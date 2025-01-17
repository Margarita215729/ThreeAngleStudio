const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const mainRoutes = require('./routes/mainRoutes');
app.use('/api', mainRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
