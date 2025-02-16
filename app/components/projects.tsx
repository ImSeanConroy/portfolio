import Section from "@/app/components/ui/section";

const data = [
  {
    title: "Disturbance Free Calling",
    subtitle: "Minimising Disturbance to enable Productive Remote Work:",
    description:
      "Prototyped an ESP32-based IoT device integrated with Webex webhooks for real-time event-driven notifications. Implemented secure MQTT communication with AWS IoT Core, designed RESTful APIs with AWS API Gateway, and built serverless backend logic using AWS Lambda. Programmed in C++ to optimize performance.",
    link: "https://github.com/ImSeanConroy/disturbance-free-calling",
  },
  {
    title: "Real-Time Messaging",
    subtitle: "Ensuring Privacy with Secure Communication:",
    description:
      "Developed a real-time messaging application using React, Node.js, Socket.io, and PostgreSQL to enable low-latency, instant communication. Experimented with message encryption methods to ensure privacy and secure delivery.",
    link: "https://github.com/ImSeanConroy/relay",
  },
];

const Projects = () => {
  return (
    <Section>
      <h2 className="text-xl font-bold">Side Projects</h2>
      {data.map((item) => (
        <div className="flex flex-col gap-3 py-2" key={item.title}>
          <div className="flex flex-col sm:flex-row sm:justify-between gap-3 text-base">
          <h3 className="inline-flex font-semibold leading-none">
          <a href={item.link} className="font-semibold hover:underline" target="_blank">{item.title}</a>
          </h3>
          <p className="text-sm leading-none text-gray-500">
          {item.subtitle}
          </p>
        </div>

          <div className="leading-relaxed antialiased text-pretty font-mono text-sm">
            {item.description}
          </div>
        </div>
      ))}
    </Section>
  );
};

export default Projects;
