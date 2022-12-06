const express=require('express');
const mongoose=require('mongoose');
bodyParser = require('body-parser');
const TodoModel=require("./TODOSCHEME");
const app=express();
const PORT=process.env.PORT || 8000;
const dbUrl="mongodb://localhost:27017/TODO";



app.use(express.json());
mongoose.connect(dbUrl)
.then(()=>{
    console.log("connected to Db");
})
.catch((e)=>{
    console.log('error',e);
});
//THIS IS THE REQUEST FOR CREATING NEW TODO 
app.post("/todo",async(req,res)=>{
    try{
       const data=new  TodoModel(req.body);
       console.log(req.body);
       const Tododata=await data.save();
       res.status(201).send(Tododata);

    }
    catch(e){
        res.send(e);
    }
})

//THIS IS THE REQUEST FOR GETTING ALL  TODO  LIST
app.get("/todo",async(req,res)=>{
    try{
       const conn=await TodoModel.find({});
       
      
       res.send(conn);

    }
    catch(e){
        res.send(e);
    }
})
//THIS IS THE REQUEST FOR GETTING SINGLE TODO  DATA BY ID
app.get("/todo/:todo_id",async(req,res)=>{
    try{
        const _id=req.params.todo_id;
       const connted=await TodoModel.findById({_id});
       
      
       res.send(connted);

    }
    catch(e){
        res.send(e);
    }
})
//THIS IS THE REQUEST FOR UPDATING TODO  DATA BY ID
app.patch("/todo/:todo_id",async(req,res)=>{
    try{
        const _id=req.params.id;
       const connted=await TodoModel.findByIdAndUpdate(_id,req.body,{
        new:true
       });
       
      
       res.send(connted);

    }
    catch(e){
        res.status(500).send(e);
    }
})
//THIS IS THE REQUEST FOR DELETING TODO  DATA BY ID
app.delete("/todo/:todo_id",async(req,res)=>{
    try{
        const _id=req.params.id;
       const connted=await TodoModel.findByIdAndDelete(_id);
       
      
       res.send(connted);

    }
    catch(e){
        res.status(500).send(e);
    }
})


app.listen(PORT, () => {
    console.log('Server listening on ' + PORT);
});
