import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'
const app: Application = express()

//parser
app.use(cors())
app.use(express.json())

//use application router
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  console.log('Server is running...!!')
})

export default app
