const {spawn, exec} = require ("node:child_process")

const {stdin, stdout, stderr} = require("node:process")


stdin.on("data", (data) => {

  console.log("Got this data from standard in :", data.toString("utf8"));

})

stdout.write("This is some text that i want..")
stderr.write("This is some text that i may not want")


// console.log(process.env.PATH)
// console.log(process.arg)
// console.log(process.pid)
// console.log(process.ppid)

// const subprocess = spawn('bash', ["script.sh"])



// subprocess.stdout.on("data",(data)=>{
//   console.log(data.toString("utf-8"))
// })

// exec("ls -l",(error, stdout, stderr)=>{

//   if (error){
//     console.error(error)
//     return;
//   }

//   console.log(stdout)
//   console.log(`stdeer: ${stderr}`)
// })
