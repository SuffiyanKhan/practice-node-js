import express from 'express'
// import cors from cors

const app = express()

app.use(express.json());
 
let PORT = process.env.PORT || 4000;

app.listen(PORT , (req , res) => {
    console.log(`server is runing ... ${PORT}`)
})

let arr =[

]
app.get("/" , (req , res) => {
    res.status(200).send(arr)
})

app.post("/" , (req , res) => {
    arr.push({id : arr.length + 1 , ...req.body})
    res.status(200).send({status : 200 , message : 'success' , user : arr})
})

