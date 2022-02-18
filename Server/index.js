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


app.post('/api/ins/pers', (req, res) => {

    const nombre_1 = req.body.nombre_1;
    const nombre_2 = req.body.nombre_2;
    const apellido_1 = req.body.apellido_1;
    const apellido_2 = req.body.apellido_2;
    const rut = req.body.rut;
    const dv = req.body.dv;
    const telefono = req.body.telefono;
    const mail = req.body.mail;
    const nac = req.body.nac;
    const rsh = req.body.rsh;
    const es = req.body.es;


    db.query("INSERT INTO `persona`(`nombre_1`, `nombre_2`, `apellido_1`, `apellido_2`, `rut`, `dv`,`telefono`,`email`,`fecha_nac`,`rsh`,`est_civ`) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
        [nombre_1, nombre_2, apellido_1, apellido_2, rut, dv, telefono, mail, nac, rsh, es],
        (err, result) => {
            console.log(err)
        });

});

app.post('/api/ins/conyuge', (req, res) => {

    const nombre_1 = req.body.nombre_1;
    const nombre_2 = req.body.nombre_2;
    const apellido_1 = req.body.apellido_1;
    const apellido_2 = req.body.apellido_2;
    const rut = req.body.rut;
    const dv = req.body.dv;
    const telefono = req.body.telefono;
    const mail = req.body.mail;
    const nac = req.body.nac;


    db.query("INSERT INTO `conyuge`(`nombre_1`, `nombre_2`, `apellido_1`, `apellido_2`, `rut`, `dv`,`telefono`,`email`,`fecha_nac`) VALUES (?,?,?,?,?,?,?,?,?)",
        [nombre_1, nombre_2, apellido_1, apellido_2, rut, dv, telefono, mail, nac],
        (err, result) => {
            console.log(err)
        });

    db.query("UPDATE `persona` SET `fk_idconyuge`= (SELECT `idconyuge` FROM `conyuge` ORDER BY `idconyuge` DESC LIMIT 1) WHERE `idpersona`= (SELECT `idpersona` FROM `persona` ORDER BY `idpersona` DESC LIMIT 1)",
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
        [calle, num, dpto, villa, com, reg, prov],
        (err, result) => {
        });

    db.query("UPDATE `persona` SET `fk_iddireccion`= (SELECT `iddireccion` FROM `direccion` ORDER BY `iddireccion` DESC LIMIT 1) WHERE `idpersona`= (SELECT `idpersona` FROM `persona` ORDER BY `idpersona` DESC LIMIT 1)",
        (err, result) => {
        });

});

app.post('/api/ins/ahorro', (req, res) => {

    const cta = req.body.cta;
    const ahorro = req.body.ahorro;
    const subs = req.body.subs;


    db.query("INSERT INTO `ahorro` (`cuenta`, `ahorro`, `subsidio`) VALUES (?,?,?)",
        [cta, ahorro, subs],
        (err, result) => {
        });

    db.query("UPDATE `persona` SET `fk_idahorro`= (SELECT `idahorro` FROM `ahorro` ORDER BY `idahorro` DESC LIMIT 1) WHERE `idpersona`= (SELECT `idpersona` FROM `persona` ORDER BY `idpersona` DESC LIMIT 1)",
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

let ir = ('')

app.post('/api/ins/searchpers', (req, res) => {

    ir = req.body.ir;

});

app.get("/api/req/searchpers", (req, res) => {


    db.query(
        "SELECT * FROM `persona` WHERE `nombre_1` LIKE '%" + ir + "%'OR `nombre_2` LIKE '%" + ir +
        "%' OR `apellido_1` LIKE '%" + ir + "%'OR `apellido_2` LIKE '%" + ir + "%' OR `rut` LIKE '%" + ir +
        "%' OR `dv` LIKE '%" + ir + "%';",
        (err, result) => {

            res.send(result)
            console.log(result)
            console.log(err)

        })
});



app.listen(3001, (req, res) => {
    console.log("running at 3001")
})