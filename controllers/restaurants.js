import pool from '../utilities.js'

export function getAll(req, res){pool.getConnection((err, connection)=>{
    if(err) throw err
    console.log(`connection as id........ ${connection.threadId}`)
        connection.query('SELECT * from restaurants', (err, rows)=>{

        connection.release()//return the connection to pool
if(!err){
            res.json(rows) 
        }else{
            console.log(err)
        }
    })

})
}
export function getOne(req, res){
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * from restaurants WHERE id=?',[req.params.id], (err, rows)=>{

            connection.release()//return the connection to pool
if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        })

    })
}

export function getByName(req, res){
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * FROM `cuisine` RIGHT JOIN `combine` on `cuisine`.`id` = `combine`.`cuisine_id` RIGHT JOIN `restaurants` ON `restaurants`.`id` = `combine`.`restaurant_id`  WHERE `cuisine`.`name`=?',[req.params.name], (err, rows)=>{

            connection.release()//return the connection to pool
if(!err){
                res.json(rows)
            }else{
                console.log(err)
            }
        })

    })
}

export function getByCity(req, res){
    pool.getConnection((err, connection)=>{
        if(err) throw err
        console.log(`connection as id........ ${connection.threadId}`)
            connection.query('SELECT * FROM `restaurants` JOIN `cities` ON `restaurants`.`city_id` = `cities`.`id` WHERE `cities`.`name` =?',[req.params.name], (err, rows)=>{

            connection.release()//return the connection to pool
if(!err){
    
                res.json(rows)
            }else{
                console.log(err)
            }
        })

    })
}