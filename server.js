import express from 'express';
import mysql from 'mysql';
import dotenv from 'dotenv'

const PORT = 3000
const app = express()
app.use(express.json())
dotenv.config()
var pool = mysql.createPool({
    connectionLimit : 10,
    host     : process.env.HOST,
    port     :  3306,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE

});

app.get('/', (req, res)=>{
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * from restaurants', (err, rows)=>{

            connection.release()//return the connection to pool
if(!err){
                res.send(rows)
            }else{
                console.log(err)
            }
        })

    })
})

app.listen(3000,()=>{
    console.log("Server is running on PORT " + PORT)
})