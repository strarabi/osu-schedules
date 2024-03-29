
import { MongoClient } from "mongodb"
const client = new MongoClient('mongodb://127.0.0.1:27017')

const code_to_day = {
    M: "Monday",
    T: "Tuesday",
    W: "Wednesday",
    R: "Thursday",
    F: "Friday",
    S: "Saturday",
    U: "Sunday",
}

/**
 * Given half of an OSU time range e.g '10' or '10:50a' (from '10-10:50a'),
 * returns 24-hour adjusted minute range, e.g 600 or 650.
 * @param {string} time 
 * @param {boolean} pm true if the time is PM, false if AM
 * @returns {string}
 */
function format_time(time, pm) {
    if (!isNaN(time)) {
        if (pm && time == 12) {
            return 12 * 60
        } else {
            return (parseInt(time) % 12 + (pm ? 12 : 0)) * 60
        }
    } else {
        time = time.replace("a", "").replace("p", "").split(":")
        var hours = parseInt(time[0])
        var minutes = parseInt(time[1])

        if (pm && hours !== 12) {
            hours = (hours + 12) % 24
        } else if (!pm && hours === 12) {
            hours = 0
        }

        return hours * 60 + minutes
    }
}



/**
 * Given an array of course objects containing 
 * course_name, term, and schedule_type, returns
 * 2D array schedule where each index represents
 * the schedule for a single day of the week
 * 
 * For example, if the schedule consisted of one
 * course offered MWF 10-10:50a, the return value
 * would be [['10-10:50a'], [], ['10-10:50a'], [], ['10-10:50a'], [], []]
 * 
 * Returns null if a schedule of the given combination is impossible.
 * 
 * 
 * @param {Array} courses ex. {course_name: 'CS 162', term: '202401', schedule_type: 'A'}
 * @returns {Array|null}
 */
export async function build_schedule(courses) {

    await client.connect()

    const course_times = []
    const collection = client.db('osu-schedules').collection('courses')

    for (const course of courses) {
        const query = {course_name: course.course_name, term: course.term, schedule_type: course.schedule_type}
        const result = await collection.find(query).toArray()
        
        if (result) {
            course_times.push({course_time: result[0].times_offered, course_name: result[0].course_name, schedule_type: course.schedule_type})
        }
    }

    const combos = cartesian(course_times)
    const valid_combos = []

    for (const combo of combos) {
        if (is_valid_schedule(combo)) {
            valid_combos.push(combo)
        }
    }

    await client.close()

    let schedules = []
    // Format times before sending to client
    for (const schedule of valid_combos) {
        let schedule_obj = []
        for (const course of schedule) {
            const [days, time] = course.course_time.split(" ")
            for (const day of days) {
                const [start_time, end_time] = time.split("-")
                const pm = end_time.includes("p")
                const formatted_start_time = format_time(start_time, pm)
                const formatted_end_time = format_time(end_time, pm)
    
                schedule_obj.push({
                    title: `${course.course_name}`,
                    day: code_to_day[day],
                    start: formatted_start_time,
                    end: formatted_end_time,
                })
            }
        }
        schedules.push(schedule_obj)
    }

    console.log(schedules)

    return (null || schedules)

}

/**
 * Given an array of OSU date and time ranges, returns true
 * if a valid schedule can be made, and false otherwise.
 * 
 * @param {Array} schedule e.g ['MWF 10-10:50a', 'TR 2-2:50p', 'MW 1-2:50p']
 * @returns {boolean}
 */
function is_valid_schedule(schedule) {
    const daysMap = { M: [], T: [], W: [], R: [], F: [], S: [], U: [] }
    const course_times = []

    for (let course of schedule) {
        course_times.push(course.course_time)
    }
  
    course_times.forEach((course) => {
      const [days, time] = course.split(" ")
  
      for (const day of days) {
        const [start_time, end_time] = time.split("-")
        const pm = end_time.includes("p")
        const formatted_start_time = format_time(start_time, pm)
        const formatted_end_time = format_time(end_time, pm)
        console.log(time, formatted_start_time, formatted_end_time)
        daysMap[day].push([formatted_start_time, formatted_end_time])
      }
    })
  
    const week = Object.values(daysMap)
  
    for (const day of week) {
      const sorted = day.sort((a, b) => a[0] - b[0])
  
      for (let i = 0; i < sorted.length - 1; i++) {
        const current = sorted[i]
        const next = sorted[i + 1]
  
        if (current[1] > next[0]) {
          return false
        }
      }
    }
  
    return true
  }

/**
 * Helper function to compute the cartesian product of a 2d array.
 * For example, the input [['red', 'blue',], ['shirt', 'pants]]
 * would return [['red', 'shirt'], ['red', 'pants'], ['blue', 'shirt'], ['blue', 'pants']]
 * 
 * @param {Array} list 
 * @param {Number} n 
 * @param {Array} result 
 * @param {Array} current 
 * @returns {Array}
 */
function cartesian(list, n = 0, result = [], current = []) {
    if (n === list.length) {
        result.push(current)
    } else {
        const currentObj = list[n]
        const currentList = Array.isArray(currentObj.course_time) ? currentObj.course_time : [currentObj.course_time]

        currentList.forEach(item => {
            cartesian(list, n + 1, result, [
                ...current,
                { course_name: currentObj.course_name, course_time: item, schedule_type: currentObj.schedule_type }
            ])
        })
    }

    return result
}
