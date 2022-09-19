const Todo= require("../models/Todo");
exports.addTodo=async(req,res)=>{

try{
if(!req.body.title||req.body.title.trim().length===0)
throw{title:"title is required"}
const newTodo= newTodo({

title:req.body.title

})
const todo= awit.newTodo.save();
res.status(200).json({success:true, data: todo})

}
catch(err){
 res.status(500).json({success:false,err})   
}
}
exports.fetchTodos=async(req, res)=>{

try{
const todos= await Todo.find()
if(todos.length===0){
    res.status(404).json({success:true, message: "todo is empty"})
    return;
}
res.status(200).json({success:true, data: todos})

}catch (err){
    res.status(500).json({success:false,err})
}


}
exports.updateTodo= async(req, res)=>{
try{
const id=req.params.id
const todo= await Todo.findByIdAndUpdate(


    id,{$set:{title:req.body.title}}, {new:true}
);
res.status(200).json({success:true, data:todo})

}catch(err){

    res.status(500).json({success:false, err})

}


}
exports.deleteTodo=async(req,res)=>{

try{
    const todo=await Todo.deleteOne({_id:req.params.id});
    res.status(200).json({success:true,data:todo})


}catch(err){

    res.status(500).json({success:false, err})

}
}