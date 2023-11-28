import { Student } from './student.interface'
import { StudentModel } from './student.model'

const createStudentIntoDB = async (student: Student) => {
  //query chalate hobe model er upor
  const result = await StudentModel.create(student)
  return result
}

//get all data
const getAllStudentsFromDB = async () => {
  //1. get data from model
  const result = await StudentModel.find()
  // 2.return result
  return result
}

//get single student
const getSingleStudentDB = async (id: string) => {
  // 1. get data using id from model
  const result = await StudentModel.findOne({ _id: id })
  return result
}
export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentDB,
}
