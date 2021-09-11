import pool from '../utilities.js'

export function getAll(req, res){
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * from cuisine', (err, rows)=>{

            connection.release()//return the connection to pool
if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        })

    })
}

export function getByID(req, res){
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * from cuisine WHERE id=?',[req.params.id], (err, rows)=>{

            connection.release()//return the connection to pool
if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        })

    })
}