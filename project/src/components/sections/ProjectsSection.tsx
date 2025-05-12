import { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import GlowingIcon from '../ui/GlowingIcon';
import projects from '../../data/projects';

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  
  const toggleProject = (projectId: string) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-background to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 neon-glow text-center">
          <span className="gradient-text">{'<Project.Showcase />'}</span>
        </h2>
        
        <div className="grid-container">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="project-card terminal relative overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 overflow-hidden z-0">
                {project.image && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      opacity: 0.2,
                      filter: 'blur(3px)'
                    }}
                  ></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              </div>
              
              <div className="relative z-10 p-6 h-full flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-primary text-sm mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-blue-900 text-blue-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-auto">
                  <GlowingIcon 
                    size="sm"
                    href={project.github}
                    target="_blank"
                  >
                    <Github size={20} />
                  </GlowingIcon>
                  
                  <button
                    className="px-3 py-1 bg-primary text-black rounded-md text-sm hover:bg-opacity-80 transition-colors duration-200 flex items-center"
                    onClick={() => toggleProject(project.id)}
                  >
                    <Code size={14} className="mr-1" />
                    Explore
                  </button>
                </div>
                
                {activeProject === project.id && (
                  <div className="absolute inset-0 bg-background bg-opacity-95 z-20 p-6 flex flex-col overflow-auto">
                    <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                    
                    <div className="flex-grow">
                      <p className="mb-4">{project.description}</p>
                      
                      <pre className="bg-gray-900 p-3 rounded-md text-xs mt-4 overflow-x-auto">
                        <code>{`// Sample code from ${project.title}
import { createBot } from 'wallace-ai';

const ${project.id.replace(/-/g, '')} = createBot({
  name: "${project.title}",
  capabilities: [${project.techStack.map(tech => `"${tech}"`).join(', ')}],
  github: "${project.github}"
});

${project.id.replace(/-/g, '')}.initialize();
${project.id.replace(/-/g, '')}.run();`}</code>
                      </pre>
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <GlowingIcon 
                        size="sm"
                        href={project.github}
                        target="_blank"
                      >
                        <ExternalLink size={18} />
                      </GlowingIcon>
                      
                      <button
                        className="px-3 py-1 bg-red-600 text-white rounded-md text-sm hover:bg-opacity-80 transition-colors duration-200"
                        onClick={() => toggleProject(project.id)}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;