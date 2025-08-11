// src/db.js
const mongoose = require('mongoose');

async function connectDB(uri) {
  if (!uri) throw new Error('MONGODB_URI manquant');
  // options par défaut ok en Mongoose 7+
  await mongoose.connect(uri);
  console.log('✅ MongoDB connecté:', mongoose.connection.host);

  // Sécurité: logs d’erreur et arrêt propre
  mongoose.connection.on('error', (err) => {
    console.error('❌ Mongo error:', err.message);
  });
}

module.exports = { connectDB };
