const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const dogRoutes = require('./routes/dogRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json()); // For parsing application/json

app.use('/api', dogRoutes);
console.log("hello world");

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
