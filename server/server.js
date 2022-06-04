const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors')

const app = express();

// Import routes
const postRoutes = require('./server/routes/posts');

// App middleware
app.use(bodyparser.json());
app.use(cors())

// Route middleware
app.use(postRoutes);

const port = 8000;

const DB_URL = 'mongodb+srv://joel:joel123@mernapp.1d0migs.mongodb.net/?retryWrites=true&w=majority';
mongoose
   .connect(DB_URL)
   .then(() => {
      console.log('DB Connected!');
   })
   .catch((err) => {
      console.log('DB Connection Error', err);
   });

app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
});
