require('dotenv').config();
const express = require('express');
const { connectDB } = require('./database/db');

const app = express();
app.use(express.json());


const port = process.env.PORT || 3000;
connectDB(process.env.MONGODB_URI)
  .then(() => {
    app.listen(port, () => console.log(`🚀 API on http://localhost:${port}`));
   
  })
  .catch((err) => {
    console.error('Impossible de démarrer:', err.message);
    process.exit(1);
  });
