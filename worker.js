const { Worker } = require("bullmq");

const worker = new Worker("test-queue", async (job) => {
    console.log(`Message received with id: ${job.id}`);
    console.log("Processing message...");
    console.log(`Sending email to ${job.data.email}`);
    await sendEmail();
    console.log("Email sent!");
}, {
    connection: {
        host: '127.0.0.1',
        port: 6379
    },
});

const sendEmail = () => new Promise((res) => setTimeout(() => res(), 3 * 1000));
