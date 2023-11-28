import { Request, Response } from 'express'
import { StudentServices } from './student.services'
import studentValidationSchema from './student.zod.validation'
// import studentValidationSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    //1.create a schema using zod

    //creating a schema validation using joi
    //1. create schema joi

    //client theke data niye aste hobe
    // const student = req.body
    // const student = req.body.student
    const { student: studentData } = req.body
    //2. parse schema using zod
    const zodParseData = studentValidationSchema.parse(studentData)
    console.log('Zod parse:', zodParseData)

    // // 2. validate schema using joi
    // const { error, value } = studentValidationSchema.validate(studentData)
    // console.log('Error: ', error, 'Value: ', value)
    // // 3. pass validate joi data into DB
    // const result = await StudentServices.createStudentIntoDB(value)

    // 3. pass validate zod data into DB
    const result = await StudentServices.createStudentIntoDB(zodParseData)
    console.log('Result:', result)
    // if (error) {
    //   // console.log(error)
    //   res.status(500).send({
    //     success: false,
    //     message: 'Something went wrong',
    //     error: error.details,
    //   })
    // }

    //will call service function to send data
    // const result = await StudentServices.createStudentIntoDB(studentData)

    //console post data
    // console.log(result)
    //send res
    res.status(200).send({
      success: true,
      message: 'Student created Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error: error,
    })
  }
}

//get all student
const getAllStudents = async (req: Request, res: Response) => {
  try {
    //1. call service
    const result = await StudentServices.getAllStudentsFromDB()
    // 2. res
    res.status(200).send({
      success: true,
      message: 'Students are retrieve successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
//get single students
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    // 1.get id using params
    const { studentId } = req.params
    //1. call service function using id
    // 2. const studentId = res.params.studentId
    const result = await StudentServices.getSingleStudentDB(studentId)
    // 3.res
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
  getAllStudents,
  getSingleStudent,
}

/*
***********************validation with joi**********************
import { Request, Response } from 'express'
import { StudentServices } from './student.services'
import studentValidationSchema from './student.validation'

const createStudent = async (req: Request, res: Response) => {
  try {
    //creating a schema validation using joi
    //1. create schema

    //client theke data niye aste hobe
    // const student = req.body
    // const student = req.body.student
    const { student: studentData } = req.body

    // 2. validate schema using joi
    const { error, value } = studentValidationSchema.validate(studentData)
    console.log('Error: ', error, 'Value: ', value)
    // 3. pass validate data into DB
    const result = await StudentServices.createStudentIntoDB(value)
    if (error) {
      // console.log(error)
      res.status(500).send({
        success: false,
        message: 'Something went wrong',
        error: error.details,
      })
    }

    //will call service function to send data
    // const result = await StudentServices.createStudentIntoDB(studentData)

    //console post data
    // console.log(result)
    //send res
    res.status(200).send({
      success: true,
      message: 'Student created Successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Something went wrong',
      error: error,
    })
  }
}

//get all student
const getAllStudents = async (req: Request, res: Response) => {
  try {
    //1. call service
    const result = await StudentServices.getAllStudentsFromDB()
    // 2. res
    res.status(200).send({
      success: true,
      message: 'Students are retrieve successfully',
      data: result,
    })
  } catch (error) {
    console.log(error)
  }
}
//get single students
const getSingleStudent = async (req: Request, res: Response) => {
  try {
    // 1.get id using params
    const { studentId } = req.params
    //1. call service function using id
    // 2. const studentId = res.params.studentId
    const result = await StudentServices.getSingleStudentDB(studentId)
    // 3.res
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
  getAllStudents,
  getSingleStudent,
}

*/
