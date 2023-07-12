
import express  from "express";
import cors from "cors";
import mysql from "mysql";



const app = express();

//app.use(cors());
app.use(express.urlencoded({extended: false}));

//create database connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactdb"
});

//create connection listener
app.post('/login', (req, res) => {
    console.log(req.body);
    const sql = "SELECT * FROM login WHERE username = ? AND password = ?";
    const values = [
        req.body.email,
        req.body.password
    ]
	console.log(values)
    db.query( sql, [values], (err, data) => {
        if(err) return res.json("Login failed");
        return res.json(data);
    } );
});

function getJsonFromUrl(url) {
  if(!url) url = location.search;
  var query = url.replace(/^.+\?/g,''); // remove the link and question mark e.g. /login?
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

//get 
app.get('/login', (req, res) => {
	const body = getJsonFromUrl(req['originalUrl']);
    const sql = `SELECT * FROM login WHERE username = '${body.email}' AND password = '${body.password}'`;
    
    db.query( sql, (err, data) => {
        if(err) return res.json("Login failed");
        return res.json(data);
    } );
});


app.listen(8081, () => {
    console.log("Listening at http://localhost:8081");
})