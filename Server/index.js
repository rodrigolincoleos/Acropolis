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
        });

});

app.post('/api/ins/direccion', (req, res) => {

    const reg = req.body.region;
    const prov = req.body.provincia;
    const com = req.body.comuna;
    const calle = req.body.calle;
    const num = req.body.numeracion;
    const dpto = req.body.dpto;
    const villa = req.body.villa;
   

    db.query("INSERT INTO `direccion` (`calle`, `numero`, `dpto`, `villa`, `comuna`, `region`,`provincia`,`persona`) VALUES (?,?,?,?,?,?,?,(SELECT `idpersona` FROM `persona` ORDER BY `idpersona` DESC LIMIT 1))",
        [calle,num,dpto,villa,com,reg,prov],
        (err, result) => {
    });

    db.query("UPDATE `persona` SET `fk_iddireccion`= (SELECT `iddireccion` FROM `direccion` ORDER BY `iddireccion` DESC LIMIT 1)",
        (err, result) => {
    });

});

app.post('/api/ins/ahorro', (req, res) => {

    const cta = req.body.cta;
    const ahorro = req.body.ahorro;
    const subs = req.body.subs;
    
   console.log(cta,ahorro,subs)

    db.query("INSERT INTO `ahorro` (`cuenta`, `ahorro`, `subsidio`) VALUES (?,?,?)",
        [cta,ahorro,subs],
        (err, result) => {
    });

    db.query("UPDATE `persona` SET `fk_idahorro`= (SELECT `idahorro` FROM `ahorro` ORDER BY `idahorro` DESC LIMIT 1)",
        (err, result) => {
    });
    
});

app.get("/api/req/regiones", (req, res) => {

    db.query("SELECT * FROM `regiones`;", (err, result) => {

        res.send(result)

    })
});
app.get("/api/req/idpers", (req, res) => {

    db.query("SELECT `idpersona` FROM `persona` ORDER BY `idpersona` DESC LIMIT 1;", (err, result) => {

        res.send(result)

    })
});


app.listen(3001, (req, res) => {
    console.log("running at 3001")
})