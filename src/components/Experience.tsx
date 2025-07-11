
import { useState } from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";

const experiences = [
  {
    id: "Saviynt India Pvt Ltd",
    title: "Snr Cloud Engineer",
    company: "Saviynt India Pvt Ltd",
    logo: "/images/saviynt.jpeg",
    period: "2024 - Present",
    location: "Bangalore, India",
    description: [
      "AWS cloud infrastructure implementation and optimization",
      "Designing and implementing CI/CD pipelines using AWS services",
      "Managing cloud security , Infrastructure and compliance requirements",
      "Automating infrastructure deployment using Terraform and AWS CloudFormation",
      "Monitoring and optimizing cloud resources for cost efficiency"
    ]
  },
  {
    id: "Oracle Cerner Pvt Ltd",
    title: "System Engineer",
    company: "Oracle Cerner Pvt Ltd",
    logo: "/images/Resized-OC-logo.webp",
    period: "2020 - 2024",
    location: "Bangalore, India",
    description: [
      "Implemented and managed AWS DevOps pipelines for continuous integration and deployment",
      "Configured and maintained EKS Kubernetes Service (EKS) clusters",
      "Automated infrastructure provisioning using Terraform and Azure Resource Manager templates",
      "Implemented monitoring and alerting solutions using Azure Monitor and Application Insights",
      "Collaborated with development teams to improve application performance and reliability"
    ]
  }
  
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);

  const handleTabClick = (id: string) => {
    setActiveExperience(id);
  };

  const activeExp = experiences.find(exp => exp.id === activeExperience) || experiences[0];

  return (
    <section
      id="experience"
      className="py-20 md:py-28 relative bg-accent/50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip mb-4">My Journey</span>
          <h2 className="section-title">Professional Experience</h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Experience tabs */}
            <div className="md:col-span-4">
              <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible space-x-4 md:space-x-0 md:space-y-2 p-1">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    className={`p-4 text-left rounded-lg transition-all flex items-center space-x-3 whitespace-nowrap ${
                      activeExperience === exp.id
                        ? "bg-white dark:bg-black/20 shadow-md"
                        : "hover:bg-white/50 dark:hover:bg-white/5"
                    }`}
                    onClick={() => handleTabClick(exp.id)}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className={`font-medium ${
                        activeExperience === exp.id
                          ? "text-rifkhan"
                          : "text-foreground/70"
                      }`}>
                        {exp.company}
                      </h3>
                      <p className="text-sm text-foreground/60">{exp.period}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Experience details */}
            <div className="md:col-span-8">
              <AnimatedCard className="glass-card rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{activeExp.title}</h3>
                    <p className="text-rifkhan">{activeExp.company}</p>
                    <p className="text-sm text-foreground/60 mt-1">{activeExp.period} • {activeExp.location}</p>
                  </div>
                  <img
                    src={activeExp.logo}
                    alt={activeExp.company}
                    className="w-16 h-16 rounded-lg object-cover hidden sm:block"
                  />
                </div>

                <ul className="space-y-3">
                  {activeExp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-rifkhan mr-3">•</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
