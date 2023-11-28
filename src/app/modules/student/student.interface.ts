export type UserName= {
  firstName: string
  middleName: string
  lastName: string
}
export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}
export type BloodGroup='A-' | 'A+' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
export type Student = {
  id: string
  name:UserName,
  email: string
  gender: 'Male' | 'Female'
  dateOfBirth: string
  contactNo: string
  emergencyContactNo: string
  bloodGroup?: BloodGroup
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
}
