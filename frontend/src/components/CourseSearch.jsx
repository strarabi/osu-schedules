/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Select from 'react-select'
import { useState, useEffect } from 'react'

const term_options = ['Fall 2024', 'Winter 2024', 'Summer 2023']

const term_to_code = {
    0: '202401',
    1: '202402',
    2: '202400',
}

const schedule_type_to_text = {
    A: 'Lecture',
    C: 'Recitation',
    D: 'Lab',
}

export default function CourseSearch(props) {
    const [term, setTerm] = useState(-1);
    const [options, setOptions] = useState([]);

    const addCourseToCart = (course) => {
        props.callback(course.value);
    };

    const changeTerm = async () => {
        props.clearCart()
        const nextTerm = (term + 1) % term_options.length;
        setTerm(nextTerm);
        props.setTerm(term_options[nextTerm]);

        const response = await fetch(`http://localhost:3001/api/get_courses_by_term/${term_to_code[nextTerm]}`);
        const jsonData = await response.json();

        const newOptions = jsonData.map((course) => {
            const pretty_name = `${course.course_name} ${schedule_type_to_text[course.schedule_type]}`;
            return { value: course, label: pretty_name };
        });

        setOptions(newOptions);
    };

    useEffect(() => {
        changeTerm();
    }, []);

    return (
        <div css={searchStyles}>
            <button onClick={changeTerm} css={buttonStyles}>
                {term_options[term]}
            </button>
            <Select onChange={addCourseToCart} css={selectorStyles} options={options} />
        </div>
    );
}

const searchStyles = css`
    font-family: 'Arvo', serif;
    /*margin-left: 40vw;*/
    margin-top: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 
`

const selectorStyles = css`
    margin-top: 2vh;
    width: 18vw;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`

const buttonStyles = css`
    font-family: 'Arvo', serif;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border: none;
    cursor: pointer;
    background-color: orange;
    border-radius: 10px;
    width: fit-content;

`
