import express from 'express'
import { getAll, getByID, postNewCity } from '../controllers/cities.js'

const router = express.Router()

router.get('/', getAll)


router.get('/:id', getByID)
router.post('/', postNewCity)

export default router