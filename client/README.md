This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Solve the Linux server's systems clock

The error message you're encountering suggests that there might be a problem with your server's system clock, leading to an "Infinite redirect loop" issue in your Clerk authentication integration. Let's break down what "Reason 1" is indicating and how to address it:

**Reason 1: Your server's system clock is inaccurate. Clerk will continuously try to issue new tokens, as the existing ones will be treated as "expired" due to clock skew.**

Clock skew refers to the difference in time between the server's clock and the actual current time. If there's a significant difference between the server's clock and the correct time, it can lead to various issues, including authentication-related problems.

Here's how to resolve the issue related to an inaccurate system clock:

1. **Check Server Clock:** Verify the accuracy of your server's system clock. The clock should be set to the correct time and date.

2. **Turn On Automatic Time Synchronization:**

   - On Linux: If you're using a Linux server, you can enable automatic time synchronization using NTP (Network Time Protocol). Run the following commands:
     ```bash
     sudo apt-get update
     sudo apt-get install ntp
     sudo systemctl enable ntp
     sudo systemctl start ntp
     ```
   - On Windows: On Windows servers, you can enable automatic time synchronization through the Control Panel. Search for "Date and Time" settings, navigate to the "Internet Time" tab, and click "Change settings."

3. **Manual Adjustment:** If automatic synchronization isn't possible, you can manually set the correct time and date on your server.

4. **Check for Errors:** Monitor your server's system logs for any errors related to the system clock. These logs can provide insights into any clock synchronization issues.

5. **Restart Services:** After adjusting the clock, it might be a good idea to restart any relevant services, especially those related to your application and authentication.

By ensuring that your server's system clock is accurate and correctly synchronized, you can eliminate potential clock skew issues that might be causing the infinite redirect loop in your Clerk authentication integration. Once you've addressed this issue, you can check whether the authentication loop problem is resolved.
