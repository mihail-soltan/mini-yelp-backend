import pool from "../utilities.js";

export function getAll(req, res) {
    const {city, cuisine} = req.query
    const allRestaurants = `SELECT * ,restaurants.name as Name FROM cuisine RIGHT JOIN combine ON cuisine.id=combine.cuisine_id RIGHT JOIN restaurants ON restaurants.id=combine.restaurant_id RIGHT JOIN cities ON cities.id = restaurants.city_id   WHERE cuisine.name =? AND cities.name=?`
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connection as id........ ${connection.threadId}`);
    connection.query(allRestaurants, [cuisine, city], (err, rows) => {
      connection.release(); //return the connection to pool
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });
  });
}
export function getOne(req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connection as id........ ${connection.threadId}`);
    connection.query(
      "SELECT * from restaurants WHERE id=?",
      [req.params.id],
      (err, rows) => {
        connection.release(); //return the connection to pool
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
}

export function getByName(req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connection as id........ ${connection.threadId}`);
    connection.query(
      "SELECT * FROM `cuisine` RIGHT JOIN `combine` on `cuisine`.`id` = `combine`.`cuisine_id` RIGHT JOIN `restaurants` ON `restaurants`.`id` = `combine`.`restaurant_id`  WHERE `cuisine`.`name`=?",
      [req.params.name],
      (err, rows) => {
        connection.release(); //return the connection to pool
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
}

export function getByCity(req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connection as id........ ${connection.threadId}`);
    connection.query(
      "SELECT * FROM `restaurants` JOIN `cities` ON `restaurants`.`city_id` = `cities`.`id` WHERE `cities`.`name` =?",
      [req.params.name],
      (err, rows) => {
        connection.release(); //return the connection to pool
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
}

export function postRestaurant(req, res) {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log(`connection as id........ ${connection.threadId}`);
    //         NOT FINISHED
    // GET IDs of CUISINE TYPES
    connection.query(`SELECT id FROM cuisine WHERE name=${req.params.cuisine}`); 
    // CREATING NEW RESTAURANT NOT FINISHED (WE NEED TO GET NEW RESTAURANT ID)
    connection.query(
      `INSERT INTO restaurants (name, phone, website, city_id, picture) VALUES (${req.params.name}, ${req.params.phone}, ${req.params.website}, ${req.params.city_id}, ${req.params.picture})`,
      [req.params.name],
      (err, rows) => {
        console.log(rows)
        connection.query(`INSERT INTO combine ()`);
        var sql = "INSERT INTO Test (name, email, n) VALUES ?";
        var values = [
          ["demian", "demian@gmail.com", 1],
          ["john", "john@gmail.com", 2],
          ["mark", "mark@gmail.com", 3],
          ["pete", "pete@gmail.com", 4],
        ];
        conn.query(sql, [values], function (err) {
          if (err) throw err;
          conn.end();
        });
        connection.release(); //return the connection to pool
        if (!err) {
          res.json(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
}
