
import { MongoClient } from "mongodb";
const client = new MongoClient('mongodb://127.0.0.1:27017');

/**
 * Given half of an OSU time range e.g '10' or '10:50a' (from '10-10:50a'),
 * returns 24-hour adjusted minute range, e.g 600 or 650.
 * @param {string} time 
 * @param {boolean} pm true if the time is PM, false if AM
 * @returns {string}
 */
function format_time(time, pm) {
    // two cases: time is either a number like '10' or
    // a time like '10:50a', handle both:
    if (!isNaN(time)) {
        if (pm) {
            return (parseInt(time)+12) * 60
        } else {
            return parseInt(time) * 60
        }
    } else {
        time = time.replace("a", "").replace("p", "").split(":")
        if (pm) {
            return (parseInt(time[0])+12) * 60 + parseInt(time[1])
        } else {
            return parseInt(time[0]) * 60 + parseInt(time[1])
        }
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
    const collection = client.db('osu-schedules').collection('courses');

    for (const course of courses) {
        const query = {course_name: course.course_name, term: course.term, schedule_type: course.schedule_type}
        const result = await collection.find(query).toArray()
        
        if (result) {
            course_times.push(result[0].times_offered)
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
    return (null || valid_combos)

}
/**
 * Given an array of OSU date and time ranges, returns true
 * if a valid schedule can be made, and false otherwise.
 * 
 * @param {Array} schedule e.g ['MWF 10-10:50a', 'TR 2-2:50p', 'MW 1-2:50p']
 * @returns {boolean}
 */
function is_valid_schedule(schedule) {
    const daysMap = { M: [], T: [], W: [], R: [], F: [], S: [], U: [] };
  
    schedule.forEach((course) => {
      const [days, time] = course.split(" ");
  
      for (const day of days) {
        const [start_time, end_time] = time.split("-");
        const pm = end_time.includes("p");
        const formatted_start_time = format_time(start_time, pm);
        const formatted_end_time = format_time(end_time, pm);
        daysMap[day].push([formatted_start_time, formatted_end_time]);
      }
    });
  
    const week = Object.values(daysMap);
  
    for (const day of week) {
      const sorted = day.sort((a, b) => a[0] - b[0]);
  
      for (let i = 0; i < sorted.length - 1; i++) {
        const current = sorted[i];
        const next = sorted[i + 1];
  
        if (current[1] > next[0]) {
          return false;
        }
      }
    }
  
    return true;
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
function cartesian(list, n = 0, result = [], current = []){
    if (n === list.length) result.push(current)
    else list[n].forEach(item => cartesian(list, n+1, result, [...current, item]))
 
    return result
}
