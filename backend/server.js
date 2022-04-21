//import required modules
import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';

dotenv.config();

//calling the express function "express()" and
//putting new Express application inside the app variable
const app = express();

//parses incoming JSON requests and puts the parsed data in req
app.use(express.json());

//It parses incoming requests with urlencoded payloads and is based on body-parser
app.use(express.urlencoded({extended:true}));

//database connection using mongoose
mongoose.connect( "mongodb+srv://test123:test@cluster0.vef7a.mongodb.net/BongShop2022?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//get request to test if the server is working
app.get('/', (req, res) => {
  res.send('Server is ready');
});

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message});
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});