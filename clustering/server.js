const cpeak = require("cpeak")

const server = new cpeak()


server.route("get","/",(req,res)=>{
  res.json({message:"This is some text"})
})


server.route("get","/heavy",(req,res)=>{
  for(let i = 0 ; i<10000000000;i++){

  }

  res.json({message:"this message done"})
})

const PORT = 5090;

server.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`)
})