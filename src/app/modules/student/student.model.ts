import { Schema, model } from 'mongoose'
import validator from 'validator'
import { Guardian, LocalGuardian, Student, UserName } from './student.interface'
const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    maxlength: [20, 'First name can not be less than 20 character'],
    // validate: function (value: string) {
    //   const firstChar = value.charAt(0).toUpperCase()
    //   const restChar = value.slice(1)
    //   const firstNameStr = firstChar + restChar
    //   if (value === firstNameStr) {
    //     return true
    //   } else {
    //     return false
    //   }
    // },
    validate: {
      validator: (value: string) => {
        return validator.isAlpha(value)
      },
      message: '{Value is not valid}',
    },
  },
  middleName: { type: String },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    trim: true,
    maxlength: [20, 'Last name can not be less than 20 character'],
    validate: {
      validator: function (value:string) {
        const lastNameStr = value.charAt(0).toUpperCase() + value.slice(1)
        return value === lastNameStr
      },
      message: '{VALUE} is not a capitalized',
    },
  },
})

const guardianSchema = new Schema<Guardian>({
  fatherName: { type: String, required: [true, "Father's name is required."] },
  fatherOccupation: { type: String },
  fatherContactNo: {
    type: String,
    required: [true, "Father's contact number is required."],
  },
  motherName: { type: String, required: [true, "Mother's name is required."] },
  motherOccupation: { type: String },
  motherContactNo: {
    type: String,
    required: [true, "Mother's contact number is required."],
  },
})

const localGuardianSchema = new Schema<LocalGuardian>({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
})

const studentSchema = new Schema<Student>({
  id: {
    type: String,
    required: true,
    unique: true,
    message: 'Student ID is required and must be unique.',
  },
  name: {
    type: userNameSchema,
    required: true,
    message: 'Name is required.',
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    message: 'Email must be unique and is required.',
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not valid email type',
    },
  },
  gender: {
    type: String,
    enum: {
      values: ['Male', 'Female', 'Other'],
      message: 'Gender must be one of: Male, Female, or Other.',
    },
    required: [true, 'Gender is required.'],
  },
  dateOfBirth: String,
  contactNo: {
    type: String,
    required: [true, 'Contact number is required.'],
  },
  emergencyContactNo: String,
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-'],
      message:
        'Invalid blood group. Must be one of: A+, A-, AB+, AB-, B+, B-, O+, O-',
    },
  },
  presentAddress: String,
  permanentAddress: String,
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian information is required.'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local guardian information is required.'],
  },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
      message:
        'Invalid value for isActive. Must be either "active" or "blocked".',
    },
    default: 'active',
  },
})

// 3. Create a Model.
// const modelName=model<Type>("modelName",schema)
export const StudentModel = model<Student>('Student', studentSchema)
