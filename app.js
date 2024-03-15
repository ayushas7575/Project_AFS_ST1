import express from 'express';
import path from 'path';
import router from './routes/users.js';
import connectDB from './db/connectDb.js';

const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = "mongodb+srv://root:root@cluster0.7j41c7j.mongodb.net/test"

// connect DB
connectDB(DATABASE_URL);

// On post request
app.use(express.urlencoded({extended:false}));

// Using static files
app.use(express.static(path.join(process.cwd(), 'public')));
app.use('/:any/delete', express.static(path.join(process.cwd(), 'public')));
// app.use('/:any/edit/:any', express.static(path.join(process.cwd(), 'public')))

// Using ejs
app.set("view engine", "ejs");

// Routing
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is at http://localhost:${port}`)
})

