
import { useState } from "react";
import AnimatedCard from "@/components/ui/AnimatedCard";

interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

const skills: Skill[] = [
  {
    name: "AWS",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQE0fp2sCqnVLg/company-logo_400_400/company-logo_400_400/0/1738855736997/amazon_web_services_logo?e=1747872000&v=beta&t=dRgdvz2IxhXQ1E7-YcPcbs6NQjMgyGA5iJPBnVva2Go",
    proficiency: 95,
    category: "Cloud"
  },
  {
    name: "Azure",
    icon: "https://media.licdn.com/dms/image/v2/C560BAQE88xCsONDULQ/company-logo_400_400/company-logo_400_400/0/1630652622688/microsoft_logo?e=1747872000&v=beta&t=ha3UxF4odT1qORIUw3dJQnwtivbJzsUzweaRuY2gLiA",
    proficiency: 85,
    category: "Cloud"
  },
  {
    name: "Terraform",
    icon: "https://www.svgrepo.com/show/354447/terraform-icon.svg",
    proficiency: 90,
    category: "IaC"
  },
  {
    name: "Kubernetes",
    icon: "https://www.svgrepo.com/show/448233/kubernetes.svg",
    proficiency: 85,
    category: "Container Orchestration"
  },
  {
    name: "Docker",
    icon: "https://www.svgrepo.com/show/452192/docker.svg",
    proficiency: 90,
    category: "Containerization"
  },
  {
    name: "Jenkins",
    icon: "https://www.svgrepo.com/show/373699/jenkins.svg",
    proficiency: 80,
    category: "CI/CD"
  },
  {
    name: "Ansible",
    icon: "https://www.svgrepo.com/show/373429/ansible.svg",
    proficiency: 75,
    category: "Configuration Management"
  },
  {
    name: "Git",
    icon: "https://www.svgrepo.com/show/452210/git.svg",
    proficiency: 90,
    category: "Version Control"
  },
  {
    name: "Linux",
    icon: "https://www.svgrepo.com/show/448236/linux.svg",
    proficiency: 90,
    category: "Operating System"
  },
  {
    name: "Python",
    icon: "https://www.svgrepo.com/show/452091/python.svg",
    proficiency: 80,
    category: "Programming"
  },
  {
    name: "AWS CloudFormation",
    icon: "https://www.svgrepo.com/show/376356/aws-cloudformation.svg",
    proficiency: 85,
    category: "IaC"
  },
  {
    name: "Azure DevOps",
    icon: "https://www.svgrepo.com/show/448271/azure-devops.svg",
    proficiency: 85,
    category: "CI/CD"
  }
];

const categories = Array.from(new Set(skills.map(skill => skill.category)));

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredSkills = selectedCategory === "All"
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section
      id="skills"
      className="py-20 md:py-28 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="chip mb-4">My Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === "All"
                ? "bg-rifkhan text-white"
                : "bg-accent text-accent-foreground hover:bg-accent/80"
            }`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-rifkhan text-white"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill) => (
            <AnimatedCard
              key={skill.name}
              className="glass-card rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{skill.name}</h3>
                  <p className="text-xs text-foreground/60">{skill.category}</p>
                </div>
              </div>
              
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-rifkhan h-2 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="text-right text-sm text-foreground/70 mt-1">
                {skill.proficiency}%
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
