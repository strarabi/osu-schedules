import { build_schedule } from './build_schedule.js';

import express from 'express'
import { MongoClient } from 'mongodb'; 
import cors from 'cors'
import bodyParser from 'body-parser';

var app = express()
app.use(cors())
app.use(bodyParser.json())

const client = new MongoClient('mongodb://127.0.0.1:27017');

var port = process.env.PORT || 3001

app.get('/api/get_courses_by_term/:term', async function(req, res) {
    await client.connect()
    const collection = client.db('osu-schedules').collection('courses');
    const query = {term: req.params.term}
    const result = await collection.find(query).toArray()
    res.status(200).send(result)
})

app.post('/api/build_schedule', function(req, res) {
    build_schedule(req.body.courses).then((schedule) => {
        res.status(200).send(schedule)
    })
})

// Given term, schedule type, and course name, returns True
// if the given course exists, and False otherwise.
app.post('/api/course_exists', async function(req, res) {
    await client.connect()
    const collection = client.db('osu-schedules').collection('courses');
    const query = {term: req.params.term, schedule_type: req.params.schedule_type, course_name: req.params.course_name}
    const result = await collection.find(query).toArray()
    res.status(200).send(result.length != 0)

})

app.listen(port, () => {
    console.log("Server started on port " + port)
})
