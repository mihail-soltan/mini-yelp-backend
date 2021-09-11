import express from 'express'
import {getAll, getOne, getByName, getByCity} from '../controllers/restaurants.js'

const router = express.Router()

router.get('/', getAll)
router.get('/:id', getOne)
router.get('/cuisine/:name', getByName)
router.get('/cities/:name', getByCity)


export default router