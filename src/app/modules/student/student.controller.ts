import { Request, Response } from 'express'
import { StudentServices } from './student.services'

const createStudent = async (req: Request, res: Response) => {
  try {
    //1. get client data
    const student = req.body
    // 2. call service to send student
    const result = await StudentServices.createStudent(student)
    //3. res data
    res.status(200).send({
      success: true,
      message: 'Student created successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
const getAllStudent = async (req: Request, res: Response) => {
  try {
    //1. call service function
    const result = await StudentServices.getAllStudentFromDB()
    //res
    res.status(200).send({
      success: true,
      message: 'Students are retrieve successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
//get single student
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    //1.get id using params
    const { studentId } = req.params
    // 2. call service function
    const result = await StudentServices.getSingleStudentDB(studentId)

    res.status(200).send({
      success: true,
      message: 'Student is retrieved successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
export const StudentControllers = {
  createStudent,
  getAllStudent,
}
