import express from 'express'
import { getAll, getByID } from '../controllers/cities.js'
import pool from '../utilities.js'

const router = express.Router()

router.get('/', getAll)


router.get('/:id', getByID)

export default router