const express = require("express");
const cors = require("cors");
const data = require("./restaurants.json");
const fs = require("fs");

const app = express()
app.use(cors())
app.use(express.json())

app.listen(4000, () => console.log("our api running on 4000"))

const handleWriteFile = () =>{
    const datajson = JSON.stringify(data)
    fs.writeFile('restaurants.json', datajson, err => console.log(err))
}
 
app.get("/", (req, res) => {
    res.send("hello world")
  })

app.get("/all-restaurants", (req, res) => {
    res.send(data)
  })

  app.post("/add-restaurants", (req, res) => {
    data.push(req.body)
    handleWriteFile()
    res.send(data)
  })

  console.log(data)

app.patch("/update-restaurants", (req, res) => {
 const { name } = req.query
console.log(name)
const itemFound = data.find (eachRestaurant => eachRestaurant.name === name)
const indexOfItem = data.indexOf(itemFound)
data[indexOfItem] = req.body
 handleWriteFile()
res.send(data)
})

app.patch("/update-restaurants", (req, res) => {
 const { name } = req.query
console.log(name)
const itemFound = data.find (eachRestaurant => eachRestaurant.name === name)
const indexOfItem = data.indexOf(itemFound)
data[indexOfItem] = req.body
 handleWriteFile()
res.send(data)
})


