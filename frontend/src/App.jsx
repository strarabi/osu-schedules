/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Navbar from './components/Navbar'
import CourseSearch from './components/CourseSearch'
import Cart from './components/Cart'
import Course from './components/Course'
import { useState } from 'react'

const schedule_type_to_text = {
  A: 'Lecture',
  C: 'Recitation',
  D: 'Lab',
}

function App() {

  const [courses, setCourses] = useState([])
  const [term, setTerm] = useState("")

  const getPrettyName = (course) => {
    return `${course.course_name} ${schedule_type_to_text[course.schedule_type]}`
  }

  const clearCart = () => {
    setCourses([])
  }

  const handleCourseAdd = (course) => {
    setCourses(courses => [...courses, course])
  }

  const removeCourse = (course_name) => {
    setCourses(
      courses => courses.filter(function(course) {
        console.log(course.course_name, course_name)
        return getPrettyName(course) !== course_name
      })
    )
  }

  const buildSchedule = async (courses) => {
    const response = await fetch(`http://localhost:3001/api/build_schedule/`, {
      method: 'POST', 
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'}, 
      body: JSON.stringify({courses: courses}), method: 'POST',
    });
    const jsonData = await response.json()
    alert(JSON.stringify(jsonData))
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
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export default App
