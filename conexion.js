const admin = require("firebase-admin");
const keys = require("../keys.json");  // Asegúrate de que el archivo keys.json esté correctamente ubicado

// Inicializar Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(keys)
});

// Acceso a la base de datos Firestore
const bd = admin.firestore();

// Definir colecciones de Firestore
const usuarios = bd.collection("miejemplos");  // Colección para los usuarios
const productos = bd.collection("productos");  // Colección para los productos

// Exportar colecciones para usarlas en otras partes del código
module.exports = {
    usuarios,
    productos
};