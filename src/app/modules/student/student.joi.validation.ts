import Joi from 'joi'
const userNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .required()
    .trim()
    .max(20)
    .regex(/^[A-Za-z]+$/),
  middleName: Joi.string(),
  lastName: Joi.string()
    .required()
    .trim()
    .max(20)
    .regex(/^[A-Za-z]+$/),
})

const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required(),
  fatherOccupation: Joi.string(),
  fatherContactNo: Joi.string().required(),
  motherName: Joi.string().required(),
  motherOccupation: Joi.string(),
  motherContactNo: Joi.string().required(),
})

const localGuardianValidationSchema = Joi.object({
  name: Joi.string(),
  occupation: Joi.string(),
  contactNo: Joi.string(),
})

const studentValidationSchema = Joi.object({
  id: Joi.string().required(),
  name: userNameValidationSchema.required(),
  email: Joi.string().email().required(),
  gender: Joi.string().valid('Male', 'Female', 'Other').required(),
  dateOfBirth: Joi.string(),
  contactNo: Joi.string().required(),
  emergencyContactNo: Joi.string(),
  bloodGroup: Joi.string().valid(
    'A+',
    'A-',
    'AB+',
    'AB-',
    'B+',
    'B-',
    'O+',
    'O-',
  ),
  presentAddress: Joi.string(),
  permanentAddress: Joi.string(),
  guardian: guardianValidationSchema.required(),
  localGuardian: localGuardianValidationSchema.required(),
  isActive: Joi.string().valid('active', 'blocked').default('active'),
})

export default studentValidationSchema
