const express = require('express');
const app = express();
const contactRoutes = require('./routes/contacts');

// Use express.json() middleware to parse JSON bodies
app.use(express.json()); 

// Use your routes here
app.use('/api/contacts', contactRoutes);

// Handle errors (optional)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
