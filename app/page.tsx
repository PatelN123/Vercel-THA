"use client";

import React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface QA {
  question: string;
  answer: string;
}

const questionsAndAnswers: QA[] = [
  {
    question: "From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.",
    answer: `
**Most Favourite:**
1. **Write and maintain support articles and docs pages**
  - In my opinion, there's always room for improvement. We can look at user feedback for the docs and work to improve them further.
2. **Create video tutorials to help teach users a specific feature or use case**
  - I really enjoy creating tools and resources that customers can use. I see real value in helping users and allowing them to learn at the same time.
3. **Analyze hundreds of support tickets to spot trends the product team can use**
  - I see significant value in this task. If we can identify trends, the product team can work on creating features that may mitigate the support team's receiving these messages. This allows us to be constantly improving.
4. **Act as a dedicated CSE for a handful of key customers to ensure their success using Vercel**
  - As a customer, I know how valuable having a dedicated support member is, with whom you can form a special relationship. Coming from a role where I have seen good and bad account managers and support agents, I would love to give a great experience to my customers.
5. **Work with the product team to develop a new feature based on feedback from customers**
  - Customers are everything. They use the product daily and know what causes them issues and what would be useful better than a developer. If I can be even briefly involved in bettering a process for a user, then I am happy.

**Least Favourite:**
1. **Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub**
  - While this is really important, I don't feel I currently have the skills to be as effective in this task compared to others I have mentioned.
2. **Respond to 25+ support requests via email every day**
  - I know it is very important to maintain SLAs and respond to as many customers as possible at high quality, but personally, I enjoy the above more.
3. **Manage a support team**
  - Currently, at this stage in my career, I don't feel I have the skills to manage a team.
4. **Engage multiple users at once in a public discussion, to answer their questions and troubleshoot problems**
  - No particular reason for this one, I simply enjoy the others more.
5. **Help resolve billing issues for customers**
  - No particular reason for this one, I simply enjoy the others more.
    `,
  },
  {
    question: "What do you want to learn or do more of at work?",
    answer: `
I want to learn more about cloud technologies, particularly in the areas of serverless architecture and edge computing. I am also eager to work on projects that involve automation and improving processes to streamline development and deployment processes.
    `,
  },
  {
    question: "Describe how you solved a challenge or technical issue that you faced in a previous role (preferably in a previous support role). How did you determine that your solution was successful?",
    answer: `
As an IT Associate Service Engineer in my previous role, I identified a gap in our AI utilisation. I developed a proof of concept for an AI chatbot to assist the IT Service Teams by answering their support queries and searching our knowledge base articles (KBAs).

To ensure success, I monitored key metrics such as response times and user satisfaction. The chatbot significantly improved these metrics, leading to interest from other departments. This project helped drive AI adoption and modernised support processes.
    `,
  },
  {
    question: "When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?",
    answer: `
- **Edge Functions:** Use when you need to run code close to the user for low-latency responses, like authentication or A/B testing.
- **Serverless Functions:** Use for backend logic that doesn’t require proximity to the user, such as data processing or handling API requests.
- **Edge Middleware:** Use for middleware tasks like redirects, headers modification, or conditional routing based on request data, performed at the edge.
    `,
  },
  {
    question: "Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?",
    answer: `
First, I would gather as much information as possible about the issue. I would ask the customer:
- What specific error messages or logs are you seeing?
- What steps have you taken so far to resolve the issue?
- Can you provide a sample of your code or configuration?
- Have there been any recent changes to your environment or codebase?
- What is the expected behaviour, and how does the current behaviour differ?

I would then research the framework or technology, looking up documentation and similar issues reported by others, before reaching out to the team for support.
    `,
  },
  {
    question: "The customer from question 5 replies to your response with the below: 'I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. It must be a platform issue so just fix it for me instead of asking me questions.' Please write a follow-up reply to the customer.",
    answer: `
Hi [Customer Name],

I'm sorry to hear that you're frustrated. I understand how challenging it can be when things aren't working as expected. To help you more effectively, I'll need a bit more information about the issue. Could you please provide the specific error messages or logs you are seeing? This will allow me to identify the root cause and resolve it as quickly as possible.

Thank you for your patience.

Best regards,
Nayan Patel
    `,
  },
  {
    question: "A customer writes in to the Helpdesk asking 'How do I do a redirect from the /blog path to https://example.com?' Please write a reply to the customer.",
    answer: `
Hi [Customer Name],

How's your day going so far?

To set up a redirect from the /blog path to https://example.com, you can add the following configuration to your \`vercel.json\` file:

\`\`\`json
{
  "redirects": [
    {
      "source": "/blog",
      "destination": "https://example.com",
      "permanent": true
    }
  ]
}
\`\`\`

This configuration will ensure that any requests to /blog will be permanently redirected to https://example.com.

If you encounter any issues with the above, don't hesitate to drop me another message. I'll be happy to assist further.

Best regards,
Nayan Patel

Decision-making process: I chose this method because using the \`vercel.json\` file for redirects is straightforward and efficient. It leverages Vercel's built-in functionality to handle redirects, ensuring minimal configuration and optimal performance.
    `,
  },
  {
    question: "A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer.",
    answer: `
Hi [Customer Name],

How are you doing?

To prevent your site from being indexed by search engines, you can create a \`robots.txt\` file in the root of your project with the following content:

\`\`\`txt
User-agent: *
Disallow: /
\`\`\`

This will instruct search engines not to index any pages of your site.

If you encounter any issues with the above, don't hesitate to drop me another message. I'll be happy to assist further.

Best regards,
Nayan Patel

Decision-making process: Creating a \`robots.txt\` file is a standard and effective way to control search engine indexing. It provides clear instructions to web crawlers and is widely supported by search engines.
    `,
  },
  {
    question: "What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?",
    answer: `
One common problem customers may face is deployment issues due to misconfigurations. In the short term, I would help them by reviewing their configuration files and deployment logs to identify and resolve any errors. Long-term, I would suggest leveraging AI to intelligently suggest fixes to the user, right where the error is displayed.
    `,
  },
  {
    question: "How could we improve or alter this familiarisation exercise?",
    answer: `
This familiarisation exercise could potentially be improved by including more interactive elements, such as practical tasks or simulations of real-life support scenarios. But this was really fun and helped me learn a lot about myself!
    `,
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 bg-gray-50">
      <nav className="fixed top-0 w-full flex items-center justify-between p-4 bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-gray-800">Nayan Patel - Take Home Assessment</span>
        </div>
        <ul className="flex space-x-6">
          <li><a href="https://nayanpatel.net" className="text-gray-700 hover:text-black transition">My Website</a></li>
        </ul>
      </nav>

      <div className="mt-24 w-full max-w-5xl flex flex-col items-center space-y-4">
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="w-full">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full p-4 flex justify-between items-center text-left text-lg font-semibold bg-white shadow-md rounded-lg transition transform hover:scale-105"
              style={{
                boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.5)"
              }}
            >
              {item.question}
            </button>
            {activeIndex === index && (
              <div className="p-4 mt-2 text-gray-800 bg-white shadow-md rounded-lg transition transform hover:scale-105"
                style={{
                  boxShadow: "5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.5)"
                }}
              >
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  className="markdown"
                >
                  {item.answer}
                </ReactMarkdown>
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
