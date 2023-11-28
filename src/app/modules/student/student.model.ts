import { Schema, model, connect, STATES } from 'mongoose'
import {
  BloodGroup,
  Guardian,
  LocalGuardian,
  Student,
  UserName,
} from './student.interface'
const userNameSchema = new Schema<UserName>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  motherContactNo: { type: String },
})
const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
})

const studentSchema = new Schema<Student>({
  id: { type: String },
  name: userNameSchema,
  email: { type: String, required: true },
  gender: ['Male', 'Female'], //enum same as union of ts
  dateOfBirth: String,
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String },
  bloodGroup: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
  presentAddress: { type: String },
  permanentAddress: { type: String },
  guardian: guardianSchema,
  localGuardian: localGuardianSchema,
  isActive: ['active', 'blocked'],
})

// 3. Create a Model.
// const modelName=model<Type>("modelName",schema)
export const StudentModel = model<Student>('Student', studentSchema)
