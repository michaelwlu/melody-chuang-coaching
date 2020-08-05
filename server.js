const express = require('express');
const dotenv = require('dotenv'); // allow global variables
const path = require('path');
const morgan = require('morgan');
const connectDB = require('./config/db'); // mongodb connection

// Utilize variables in config file
dotenv.config({ path: './config/config.env' });

// Start MongoDB connection
connectDB();

// Import routers
const contactRouter = require('./routes/ContactAPI');
const applicationRouter = require('./routes/ApplicationAPI');

const app = express();

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// Express body parser middleware
app.use(express.json());

// Set API routes
app.use('/api/contact', contactRouter);
app.use('/api/application', applicationRouter);

// Use morgan if in development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// Use port from config
const PORT = process.env.PORT || 5000;

// Start server listening
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
