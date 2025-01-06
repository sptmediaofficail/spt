// 1.5s is optimal for the loading spinner to show up, https://www.uxmatters.com/mt/archives/2018/07/handling-delays.php
export const resolveAfterDelay = (promise: Promise<any>, delay = 1500) => {
  const timeout = new Promise((resolve) => setTimeout(resolve, delay));
  return Promise.allSettled([promise, timeout]);
};
