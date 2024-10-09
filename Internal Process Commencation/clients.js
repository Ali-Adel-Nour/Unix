const net = require("net")

const client = net.createConnection({path: "/tmp/node_c_socket"});

client.on("connect", () => {
    console.log("Connected to C server!")
})


const b = Buffer.alloc(8)

b[0] = 0x12
b[1] = 0x54
b[2] = 0xfa

client.end(b)

client.on("data",(data)=>{
    console.log("Received from C server:",data.toString())
})

client.on("error",(err)=>{
  console.error("Error:",err.message)
})