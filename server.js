import express from 'express';
import dotenv from 'dotenv'
import restaurantRouter from './routes/restaurants.js'
import cuisineRouter from './routes/cuisines.js'
import cors from 'cors'

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors());

dotenv.config()


app.use('/restaurants', restaurantRouter);
app.use('/cuisines', cuisineRouter);
app.use(express.urlencoded({extended: true}))

app.listen(PORT,()=>{
    console.log("Server is running on PORT " + PORT)
})