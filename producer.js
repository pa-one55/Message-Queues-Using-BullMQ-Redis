const { Queue } = require("bullmq");

const ourQueue = new Queue("test-queue",{
    connection :{
        host : '127.0.0.1',
        port : '6379'
    },
});

async function addToQueue() {
  const res = await ourQueue.add("Email to user", {
    email: "test@gmail.com",
    subject: "Test Message",
    body : "Testing our queue implementation"
  });
  console.log("Job added to queue with id :", res.id);
}


addToQueue();


// syntax to remove jobs from the redis server after they have been completed by the worker

// const res = await ourQueue.add("Email to user", {
//     email: "test@gmail.com",
//     subject: "Test Message",
//     body: "Testing our queue implementation"
// }, {
//     removeOnComplete: true, // Automatically remove job on completion
//     removeOnFail: true      // Automatically remove job on failure
// });
