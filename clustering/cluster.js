const cluster = require('node:cluster');
const coresCount = require('node:os').availableParallelism();

if (cluster.isPrimary) {
    for (let i = 0; i < coresCount; i++) {
        const worker = cluster.fork();

        console.log(
            `This parent spawned a new chlid process with PID ${worker.process.pid}`
        );
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.id} died. Restarting`);
        cluster.fork();
    });
} else {
    require("./server")
}
