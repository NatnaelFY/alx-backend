// creates push notification jobs
const createPushNotificationsJobs = (jobs, queue) => {
  if (!Array.isArray(jobs)) throw Error("Jobs is not an array");
  for (let _job of jobs) {
    const job = queue.createJob("push_notification_code_3", _job).save();
    job.on("enqueue", () => console.log(`Notification job created: ${job.id}`));
    job.on("complete", () =>
      console.log(`Notification job ${job.id} completed`)
    );
    job.on("failed", (err) =>
      console.log(`Notification job ${job.id} failed: ${err}`)
    );
    job.on("progress", (progress) =>
      console.log(`Notification job ${job.id} ${progress}% complete`)
    );
  }
};

export default createPushNotificationsJobs;
