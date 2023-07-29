// const express=require('express')
// const app=express()
// const dotenv=require('dotenv')
// dotenv.config()
// const mysql=require('mysql')
// const cors=require('cors')
// const path =require('path')
// const jwt=require('jsonwebtoken')
// const multer=require('multer')
// const formidable=require('formidable')
// const fs=require("fs")
// const { dblClick } = require('@testing-library/user-event/dist/click')
// const { response } = require('express')

// const storage=multer.diskStorage(
//     {
//         destination:"./public/images",
//         filename:(req,file,cb)=> {
//             return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//         }
//     }
// )
// const upload=multer(
//     {
//         storage:storage
//     })
// //const cookiePraser=require('cookie-parser')
// app.use(express.json())
// app.use(cors())
// const con = mysql.createConnection({
//     host:process.env.Host,
//     database:process.env.Database,
//     user:process.env.User,
//     password:process.env.Password,
//     port:process.env.Port,
//     multipleStatements:true

//   });

//   con.connect((err)=> {
//     if (err) throw err;
//     console.log("Connected!");
//   });
 

// //app.use(cookiePraser())
// app.get('/',(req,res)=>{
//     res.send('Welcome to my server')
// })
// app.get('/api/login',(req,res)=>{
//     res.send('Login');
// })
// app.get('/api/register',(req,res)=>{
//     res.send('Registration')
// })
// app.get('/api/user',(req,res)=>{
//     con.query("select * from user",(err,result)=>{
//         if(err){
//             return res.status(500).json({
//                     message:"Internal server error"
//                 })
//             }
//             return res.status(200).json(result)
//     })

// })
// // app.get('/api/user/:id',(req,res)=>{
// //     const userr=user.find(c=>c.id===parseInt(req.params.id));
// //     if(!userr)res.status(404).send("Error")
// //     res.send(userr);
// // })
// app.post("/api/register",(req,res)=>{
    
    
//     const fullname=req.body.fullname
//     const email=req.body.email
//     const password=req.body.password
//     //console.log(fullname+" "+email+" "+password)
//     const user={name:fullname}
//     const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN)
//     res.json({accessToken:accessToken})
//     con.query("insert into user(fullname,email,password) values(?,?,?)",[fullname,email,password],(err,result)=>{
//         if(err){
//             return res.status(500).json({
//                 error:"Internal server error"
//             })
//         }
//         if(!fullname || !email || !password){
//             return res.status(400).json({
//                 error:"fill the credential properly"
//             })
//         }
//         return res.status(201).json({
//             message:"Registration successful"
//         })
//     })
// })
// function authenticateuser(req,res,next)
// {
//     const authHeader=req.headers("authorization")
//     const token=authHeader && authHeader.split('')[1]
//     if(token==NULL) return res.sendstatus(401)
//     jwt.verify(token,process.env.ACCESS_TOKEN,(err,user)=>{
//         if(err) return res.sendstatus(403)
//         req.user=user
//         next()
//     })
// }


// app.post("/api/login",(req,res)=>{
//     const email=req.body.email;
//     const password=req.body.password;
//     console.log(email+" "+password)
//    if(!email || !password){
//     return res.json({
//         message:"Enter email and password"
//     })
//    }
//     con.query("select * from user where email=? and password=?",[email,password],(err,result)=>{
//         if(err){
//         return res.status(500).json({
//                 message:"Internal server error"
//             })
//         }
//         if(result.length==0){
//             return res.status(400).json({
//                 message:"Wrong email and password"

//             })
//         }
//         return res.status(200).json({
//             message:"Login successful"
//         })
//         })
    
//     })
    
//     app.post('/api/foods',(req,res)=>{
//         const {name,price}=req.body;
//         con.query("insert into foods(food_name,food_price,food_image) values(?,?,?)",[name,price,"./images/Vanillashake.jpeg"],(err,result)=>{
//                         if(err){
//                             return res.json({
//                                 error:err
//                             })
                           
//                         }
//                         return res.status(201).json({
//                             message:"Successfully added"
//                         })
//             })
//         })  

//     app.get('/api/foods',(req,res)=>{
//         con.query("select * from foods",(err,result)=>{
//             if(err){
//                 return res.status(500).json({
//                         message:"Internal server error"
//                     })
//                 }
//                 return res.status(200).json(result)
//         })
//     })


//     app.post('/api/cart',(req,res)=>{
//         const food_id=req.body.food_id
//          const id=req.body.user_id
        

//          if(!food_id || !id ){
//             return res.status(400).json({"error":"error"})
//          }

         
//         con.query("select * from cart where food_id=?",[food_id],(err,result2)=>{
//             if(err){
//                 return res.status(500).json({
//                     error:"Internal server error"
//                 })
//             }
//             if(result2.length>0){
//                 con.query("update cart set quantity=? where cart_id=?",[result2[0].quantity+1,result2[0].cart_id],(err,result1)=>{
//                     if(err){
//                         return res.status(500).json({
//                             error:"Internal server error"
//                         })
//                     }
//                     return res.status(200).json({
//                         message:"quantity updated"
//                     })
//                 })
//             }else{
        
//          con.query("insert into cart(quantity,id,food_id) values(?,?,?)",[1,id,food_id],(err,result)=>{
//              if(err){
//                  return res.status(500).json({
//                      error:"Internal server error"
//                  })
//              }

             
//              return res.status(200).json({
//                  message:"Item Added to cart successfully"
//              })
//          })
//         }
//         })
//     })
        
    
//      app.get('/api/cart',(req,res)=>{
//         con.query("select food_name,food_price,quantity from cart,foods where foods.food_id=cart.food_id",(err,result)=>{
//             if(err){
//                 return res.status(500).json({
//                         message:"Internal server error"
//                     })
//                 }
//                 return res.status(200).json(result)
//         })
    
//     })



//     const port=process.env.PORT || 5000
//     app.listen(port,()=>{
//       console.log(`Server is running on ${port}`)
//   })



const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const path = require('path');
const { response } = require('express');

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error(err);
});

//crypto for password hashing
const crypto = require('crypto');
const secretKey = process.env.SECRET_KEY; // Accessing secret key from .env
console.log(secretKey);


// Define MongoDB Schemas and Models
const userSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  password: String,
});

const foodSchema = new mongoose.Schema({
  food_name: String,
  food_price: Number,
  food_image: String,
});

const cartSchema = new mongoose.Schema({
  quantity: Number,
  user_id: mongoose.Types.ObjectId,
  food_id: mongoose.Types.ObjectId,
});

const User = mongoose.model('User', userSchema);
const Food = mongoose.model('Food', foodSchema);
const Cart = mongoose.model('Cart', cartSchema);

// Your APIs and Routes for registration, login, etc.
// Replace MySQL queries with MongoDB operations.

// Example API for creating a new user (registration)
app.post('/api/register', async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({ error: 'Fill the credentials properly' });
    }

    // Save user to the MongoDB database
    const newUser = new User({ fullname, email, password });
    await newUser.save();

    // Create and return JWT token
    const user = { name: fullname };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN);
    res.json({ accessToken: accessToken, message: 'Registration successful' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});
// // Example API for user login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Fill the credentials properly' });
    }

    // Check if the user exists in the database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if the provided password matches the stored password
    if (user.password !== password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // User login successful
    // Create and return JWT token
    const accessToken = jwt.sign({ userId: user._id, name: user.fullname }, process.env.ACCESS_TOKEN);
    res.json({ accessToken, message: 'Login successful' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Additional APIs for other functionalities such as login, adding items to cart, etc.
app.post('/api/foods', async (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Please provide name and price' });
    }

    // Save food item to the MongoDB database
    const newFood = new Food({ food_name: name, food_price: price, food_image: "./images/Vanillashake.jpeg" });
    await newFood.save();

    return res.status(201).json({ message: 'Successfully added' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// API to fetch all food items
app.get('/api/foods', async (req, res) => {
  try {
    const foods = await Food.find();
    return res.status(200).json(foods);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// API to add items to cart
app.post('/api/cart', async (req, res) => {
  try {
    const { food_id, user_id } = req.body;
    if (!food_id || !user_id) {
      return res.status(400).json({ error: 'Please provide food_id and user_id' });
    }

    // Check if the item already exists in the cart
    const existingCartItem = await Cart.findOne({ food_id, user_id });

    if (existingCartItem) {
      // If the item already exists, update the quantity
      existingCartItem.quantity += 1;
      await existingCartItem.save();
      return res.status(200).json({ message: 'Quantity updated' });
    } else {
      // If the item does not exist, add it to the cart
      const newCartItem = new Cart({ quantity: 1, user_id, food_id });
      await newCartItem.save();
      return res.status(200).json({ message: 'Item added to cart successfully' });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// API to fetch items from the cart
app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find().populate('food_id', 'food_name food_price').exec();
    return res.status(200).json(cartItems);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to YB Restaurant Backend');
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
