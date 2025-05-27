import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "my_finance", // Unique app ID
  name: "My Finance",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 3,
  }),
});
