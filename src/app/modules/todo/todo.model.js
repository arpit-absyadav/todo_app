const mongoose = require('mongoose');
const config = require('../../../config/env/config');
Schema = mongoose.Schema;

const todoSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  date: { type: String },

  isComplete: { type: Boolean, required: true, default: false },
  isActivated: { type: Boolean, required: true, default: true },
  createdAt: { type: Date, default: Date.now, required: true }
});
todoSchema.index({ name: 'text' });
mongoose.model('Todo', todoSchema);
