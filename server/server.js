const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const allowedOrigins = [
  'http://localhost:3000',
  'https://f1rental.netlify.app' 
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());


// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Health check
app.get('/', (req, res) => {
  res.status(200).json({
    status: "Backend operational",
    timestamp: new Date().toISOString(),
    port: process.env.PORT || 5051
  });
});

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage });

// GET endpoint for listings
app.get('/api/listings', (req, res) => {
  const dbPath = path.join(__dirname, 'database.json');
  console.log('Checking for database.json at:', dbPath); // Debug log

  if (fs.existsSync(dbPath)) {
    console.log('Found database.json, reading data...'); // Debug log
    const db = JSON.parse(fs.readFileSync(dbPath));
    res.status(200).json(db); // Return the database content (listings)
  } else {
    console.log('No database.json found!'); // Debug log
    res.status(404).json({ message: 'No listings found' });
  }
});

// POST endpoint for creating listings
app.post('/api/listings', upload.array('images'), (req, res) => {
  const { body, files } = req;

  console.log('Received new listing data:', body); // Debug log
  console.log('Received files:', files); // Debug log

  const listingData = {
    ...body,
    images: files.map(file => file.filename),
    createdAt: new Date().toISOString()
  };

  const dbPath = path.join(__dirname, 'database.json');
  const db = fs.existsSync(dbPath) ? JSON.parse(fs.readFileSync(dbPath)) : [];
  db.push(listingData);
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
  console.log('Updated database:', db); // Check if the database content is being updated


  console.log('Listing added to database:', listingData); // Debug log

  res.status(201).json({ success: true });
});


// Start the server
app.listen(5051, () => console.log('Server running on port 5051'));
