const {spawn, exec} = require ("node:child_process")


// const subprocess = spawn('ls', ["-l"])



// subprocess.stdout.on("data",(data)=>{
//   console.log(data.toString("utf-8"))
// })

exec("ls -l",(error, stdout, stderr)=>{

  if (error){
    console.error(error)
    return;
  }

  console.log(stdout)
  console.log(`stdeer: ${stderr}`)
})
