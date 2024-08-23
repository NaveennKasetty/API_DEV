import express from "express";


import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js'



const router = express.Router()



router.get('/',getUsers) 

router.post('/',createUser)

// /users/2  req.params { id: 2}
router.get('/:id',getUser)

// router.delete('/:id',(req,res)=>{
//     const { id } = req.params
//     const deleteUser = users.pop(id)
//     res.send(users)
//     console.log(deleteUser)
// })
// Another delete method 
router.delete("/:id",deleteUser)

//put method completely overwrites and patch method partially modify

router.patch("/:id",updateUser)

export default router;