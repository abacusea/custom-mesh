const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// import routes
const meshRoutes = require('./routes/mesh');

// app
const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

// routes middleware
app.use('/api', meshRoutes);

const port = 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});