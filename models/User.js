// src/models/User.js
const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  name:  { type: String, required: true, trim: true },
  role:  { type: String, enum: ['user', 'admin'], default: 'user' }
}, { timestamps: true });



module.exports = model('User', userSchema);
