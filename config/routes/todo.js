const express=require("express")
const {addTodo,fetchTodos, updateTodo, deleteTodo}=require("../controllers/todo")
const router= express.Router();
router.route("/").post(addTodo).get(fetchTodos)
router.route("/:id").patch(updateTodo).delete(deleteTodo)
module.exports=router;