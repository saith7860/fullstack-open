import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
//import path
// import Blog from './server/models/blogSchema.js';
import router from './server/routers/blogRouter.js';
const app=express();
dotenv.config();
app.use(express.json());

const PORT=process.env.PORT||3000;
const connectionString=process.env.CONNECTION_URL;
//routes
app.use("/api/blogs",router);
//connecting database 
mongoose.connect(connectionString).then(()=>{
    app.listen(PORT,()=>{
        console.log(`app is listening on port ${PORT}`); 
    })
}).catch((err)=>{
console.log('error connecting database',err);

});

