import express from "express";
import cors from 'cors'
import morgan from 'morgan'

const app = express()
app.use(cors())
app.use(morgan('combined'))

app.listen(3000, () => {
    console.log('Kismet listening on port 3000')
})

import './routine/routine.js'