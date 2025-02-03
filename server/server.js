const express = require('express');
const dotenv = require('dotenv');
const { syncDatabase } = require('./Config/db'); // Import correctly
const authRoutes = require('./Routes/UserRoutes');
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());

syncDatabase(); // Now it will work

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the API. Use /api/auth for authentication endpoints.');
});

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
