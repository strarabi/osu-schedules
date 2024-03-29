/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Navbar from './components/Navbar'
import CourseSearch from './components/CourseSearch'
import Cart from './components/Cart'
import Course from './components/Course'
import { useState } from 'react'
import WeekCalendar from './components/WeekCalendar'
import moment from 'moment'

const schedule_type_to_text = {
  A: 'Lecture',
  C: 'Recitation',
  D: 'Lab',
}

const term_name_to_code = {
  "Winter 2024": "202402"
}

function App() {

  const [courses, setCourses] = useState([])
  const [term, setTerm] = useState("")
  const [schedules, setSchedules] = useState([])

  const getPrettyName = (course) => {
    return `${course.course_name} ${schedule_type_to_text[course.schedule_type]}`
  }

  const clearCart = () => {
    setCourses([])
  }

  const handleCourseAdd = async(course) => {
    if (course.schedule_type == 'A') {
        // if there exists a course with the same name and schedule type of C or D,
        // alert the user
        const recResponse = await fetch(`http://localhost:3001/api/course_exists/`, {
          method: 'POST', 
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
          body: JSON.stringify({course_name: course.course_name, term: term_name_to_code[term], schedule_type: 'C'}), method: 'POST',
        });
        const recitationExists = await recResponse.json()
        if (recitationExists) {
          alert("Recitation exists!")
        }
        const labResponse = await fetch(`http://localhost:3001/api/course_exists/`, {
          method: 'POST', 
          headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
          body: JSON.stringify({course_name: course.course_name, term: term_name_to_code[term], schedule_type: 'D'}), method: 'POST',
        });
        const labExists = await labResponse.json()
        if (labExists) {
          alert("Lab exists!")
        }
    }
    setCourses(courses => [...courses, course])
  }

  const removeCourse = (course_name) => {
    setCourses(
      courses => courses.filter(function(course) {
        return getPrettyName(course) !== course_name
      })
    )
  }

  const buildSchedule = async(courses) => {
    const response = await fetch(`http://localhost:3001/api/build_schedule/`, {
      method: 'POST', 
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
      body: JSON.stringify({courses: courses}), method: 'POST',
    });
    let schedule_response = await response.json()
    for (let schedule of schedule_response) {
      for (let course of schedule) {
        course.start = moment().day(course.day).hour(Math.floor(course.start / 60)).minute(course.start % 60).toDate()
        course.end = moment().day(course.day).hour(Math.floor(course.end / 60)).minute(course.end % 60).toDate()
      }
    }
    setSchedules(schedule_response)
  }

  const course_objs = []
  for (let course of courses) {
    course_objs.push(<Course removeCourse={removeCourse} name={getPrettyName(course)}/>)
  }

  return (
    <div className='app-container'>
      <Navbar/>
      <h1 css={sloganStyles}>build your <br/>perfect schedule</h1>
      <CourseSearch clearCart={clearCart} callback={handleCourseAdd} setTerm={setTerm}/>
      <Cart courses={course_objs}/>
      <button css = {buttonStyle} onClick={() => buildSchedule(courses)}>Generate schedule</button>
      <WeekCalendar events={schedules[0] ? schedules[0] : schedules}/>
    </div>
  )
}

const sloganStyles = css`
  font-family: 'Arvo', serif;
  text-align: center;
`
const buttonStyle = css`
  font-family: 'Arvo', serif;
  text-align: center;
  background-color: orange; 
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: none;
  cursor: pointer;

  margin: 0;
  position: fixed;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export default App
