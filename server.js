import express from 'express';
import dotenv from 'dotenv'
import restaurantRouter from './routes/restaurants.js'
import cuisineRouter from './routes/cuisines.js'
import citiesRouter from './routes/cities.js'
import cors from 'cors'


const app = express()
app.use(express.json())
app.use(cors());

dotenv.config()


app.use(express.urlencoded({extended: true}))
app.use('/restaurants', restaurantRouter);
app.use('/cuisines', cuisineRouter);
app.use('/cities', citiesRouter)

app.listen(process.env.PORT || 3000,()=>{
    console.log("Server is running on 3000 or process.env.PORT ")
})