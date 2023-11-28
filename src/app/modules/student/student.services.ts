import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudent = async (student: Student) => {
  //1.get model
  const result = await StudentModel.create(student)
  //   2. return result
  return result
}

//get all students
const getAllStudentFromDB = async () => {
  // 1.get data from model
  const result = await StudentModel.find()
  return result
}

//get signle student from DB
const getSingleStudentDB = async (id: string) => {
  //1. get data using id from model
  const result = await StudentModel.findOne({ _id: id })
  return result
}
export const StudentServices = {
  createStudent,
  getAllStudentFromDB,
  getSingleStudentDB,
}
