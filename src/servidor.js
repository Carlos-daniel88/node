const express = require("express");  //servidor web 
const ejs = require("ejs");  //motor de plantillas
const morgan = require("morgan"); 
const path = require("path");  //rutas 
var mysql = require("mysql");
var myConnection = require("express-myconnection");
var dbOptions = {
                    host: "localhost",
                    user: "root",
                    password: "",
                    port: 3306,
                    database: "ddi_2021_datos"
                };
const servidor = express();

//configuraciones
servidor.set("puerto", 3000);
servidor.set("view engine", "ejs");
servidor.set("views", path.join(__dirname, "vistas"));
servidor.engine("html", ejs.renderFile);

//herramientas intermedias 
servidor.use(morgan("dev"));
servidor.use(express.urlencoded({ extended: false }));
servidor.use(express.json());
servidor.use(myConnection(mysql, dbOptions, "single"));

servidor.use("/",require("./rutas/index.js"));
servidor.use("/alumnos",require("./rutas/alumnos.js"));

servidor.use(express.static(path.join(__dirname, "publico")));

// servidor 
servidor.listen(servidor.get("puerto"), function() 
{
    console.log("servidor en marcha: ", servidor.get("puerto"));
});