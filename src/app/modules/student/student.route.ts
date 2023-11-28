import express from 'express'
import { StudentControllers } from './stutdent.controller'
const router = express.Router()

// post for create student
//will call controller function
router.post('/create-student', StudentControllers.createStudent)

//get all data
router.get('/', StudentControllers.getAllStudents)
//get single student
router.get('/:studentId', StudentControllers.getSingleStudent)

export const StudentRoutes = router
