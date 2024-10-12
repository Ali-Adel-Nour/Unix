const cpeak = require("cpeak")

const server = new cpeak()



process.on("message",(message)=>{
  console.log(`Worker ${process.pid} received message from parent ${message}`)
})

//process.send("sd")

server.route("get","/",(req,res)=>{
  process.send({action: "request"})
  res.json({message:"This is some text"})
})


server.route("get","/heavy",(req,res)=>{

  process.send({action: "request"})

  for(let i = 0 ; i<10000000000;i++){

  }

  res.json({message:"this message done"})
})

const PORT = 5090;

server.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})