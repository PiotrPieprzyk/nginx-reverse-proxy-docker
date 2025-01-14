import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the Express application
const app = express();
const PORT = 3000;
const HOST = '0.0.0.0';

// Serve static files from the 'public' directory
app.use('/web', express.static(__dirname + '/public'));

// Define a route for the homepage
app.get('/web', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Start the server
app.listen(PORT, HOST, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
