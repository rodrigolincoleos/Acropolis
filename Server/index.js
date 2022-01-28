const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba'
});


app.post('/api/insertpers', (req, res) => {

    const nombre_1 = req.body.nombre_1;
    const nombre_2 = req.body.nombre_2;
    const apellido_1 = req.body.apellido_1;
    const apellido_2 = req.body.apellido_2;
    const rut = req.body.rut;
    const dv = req.body.dv;

    db.query("INSERT INTO `persona`(`nombre_1`, `nombre_2`, `apellido_1`, `apellido_2`, `rut`, `dv`) VALUES (?,?,?,?,?,?)",
        [nombre_1, nombre_2, apellido_1, apellido_2, rut, dv],
        (err, result) => {
            console.log(result);
        });

});

app.get("/api/req", (req, res) => {

    db.query("SELECT `idpersona` FROM `persona` ORDER BY idpersona DESC LIMIT 1;", (err, result) => {

        res.send(result)

    })
});
app.get("/api/req/regiones", (req, res) => {

    db.query("SELECT `idpersona` FROM `persona` ORDER BY idpersona DESC LIMIT 1;", (err, result) => {

        res.send(result)

    })
});

app.listen(3001, (req, res) => {
    console.log("running at 3001")
})