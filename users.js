import { v4 as uuidv4 } from 'uuid';

let users = []
export const getUsers =(req, res) => {
    // console.log(users)
    res.send(users)
}

export const createUser = (req,res)=>{
    const user = req.body;
    const userID = uuidv4();
    const userwithID = {...user, id: userID}
    users.push(userwithID)
    res.send("user added successfully")
}

export const getUser = (req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user)=>user.id === id);
    res.send(foundUser)
   console.log(foundUser)

}

export const deleteUser = (req,res)=>{
    const { id } = req.params;
     users = users.filter((user)=> user.id!==id)
     console.log()
    res.send(`user with id ${id} is deleted successfully`)
}

export const updateUser = (req,res)=>{
    const { id } = req.params;
    const {firstName,lastName, age} = req.body
    const user = users.find((user)=> user.id === id);
    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) {user.age = age};
    res.send(`user with id ${id} has been updated`)
    

}