const firebaseAdmin = require('firebase-admin')
const AuthFirebaseServiceKey = require('../../AuthServiceKeyFile.json')

firebaseAdmin.initializeApp({
   credential: firebaseAdmin.credential.cert(AuthFirebaseServiceKey)
})

module.exports = firebaseAdmin;