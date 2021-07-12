const express = require("express")
const controlador = require("../controladores/controladorAlumnos.js")
const route = express.Router()
const controladorAlumnos = require("../controladores/controladorAlumnos.js");

route.get("/", controladorAlumnos.mostrar);
route.get("/eliminar/:NL",controladorAlumnos.eliminar);
route.post("/agregar", controladorAlumnos.agregar);
route.get("/editar/NL",controladorAlumnos.editar);
route.post("/editar",controladorAlumnos.editar);
route.post("/modificar/:NL", controladorAlumnos.modificar);

module.exports = route;