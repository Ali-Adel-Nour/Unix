const cluster = require('node:cluster');
const coresCount = require('node:os').availableParallelism();

if (cluster.isPrimary) {
    let requestCount = 0
    setInterval(() => {
        console.log(`Total number of requests: ${requestCount}`);
    }, 5000);


    for (let i = 0; i < coresCount; i++) {
        const worker = cluster.fork();
        worker.send("some data")

        console.log(
            `This parent spawned a new chlid process with PID ${worker.process.pid}`
        );
    }
    cluster.on("message",(worker,message) =>{
        if(message.action && message.action === 'request' ){
            requestCount++
        }
    })

    cluster.on("fork",(worker)=>{

    })

    cluster.on('listening',(worker,adress)=>{

    })
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.id} died. Restarting`);
        cluster.fork();
    });
} else {
    require("./server")
}
