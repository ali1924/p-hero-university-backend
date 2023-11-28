import { z, ZodError } from 'zod'

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: 'First name must contain only alphabetical characters.',
    }),
  middleName: z.string(),
  lastName: z
    .string()
    .min(1)
    .max(20)
    .refine(
      (value) => {
        const lastNameStr = value.charAt(0).toUpperCase() + value.slice(1)
        return value === lastNameStr
      },
      {
        message: 'Last name must start with a capital letter.',
      },
    ),
})

const guardianValidationSchema = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string(),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string(),
  motherContactNo: z.string().min(1),
})

const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
})

const studentValidationSchema = z.object({
  id: z.string(),
  name: userNameValidationSchema,
  email: z.string().email().min(1),
  gender: z.enum(['Male', 'Female', 'Other']),
  dateOfBirth: z.string(),
  contactNo: z.string().min(1),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'AB+', 'AB-', 'B+', 'B-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidationSchema,
  localGuardian: localGuardianValidationSchema,
  isActive: z.enum(['active', 'blocked']).default('active'),
})

export default studentValidationSchema
