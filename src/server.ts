import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import { Request, Response } from 'express'

require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3001
// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const helmet = require('helmet')
// const morgan = require('morgan')

// defining an array to work as the database (temporary solution)
const ads = [{ title: 'Hello, world (again)!' }]

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get('/', (req: Request, res: Response) => {
	res.send(ads)
})
app.get('/ppipee', (req: Request, res: Response) => {
	res.send("Hello, Pipe")
})

app.listen(PORT, () => {
	console.log('listening on port ', PORT)
})
