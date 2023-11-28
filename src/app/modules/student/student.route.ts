import express from 'express'
import { StudentControllers } from './student.controller'
const router = express.Router()

//create-student
router.post('/create-student', StudentControllers.createStudent)

//get all student
router.get('/', StudentControllers.getAllStudent)

//get single student
router.get('/:studentId',S)

export const StudentRoutes = router
