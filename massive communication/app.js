const {spawn} = require("node:child_process")

const fs = require ("node:fs");

const numberFormatter = spawn("number_formatter", ["./dest.txt", "$" , ","])


numberFormatter.stdout.on("data",(data)=>{
  console.log(`stdout: ${data}`)
})

numberFormatter.stderr.on("data",(data)=>{

  console.log(`stderr: ${data}`)

})


numberFormatter.on("close",(code)=>{
  if(code === 0){
    console.log("The file was read,processed and written successfully!")
  }else{
    console.log("The file have a problem")
  }

})

  const fileStream =  fs.createReadStream("./src.txt")
  fileStream.pipe(numberFormatter.stdin)

  console.log(`Current working directory: ${process.cwd()}`);


  //numberFormmatter.stdin.write("159544 77 33")