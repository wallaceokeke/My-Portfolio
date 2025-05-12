import skills from '../../data/skills';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 neon-glow text-center">
          <span className="gradient-text">{'<Skills.Matrix />'}</span>
        </h2>
        
        <div className="terminal">
          <div className="mb-6">
            <p className="text-green-400">$</p>
            <p className="text-blue-200">
              cat wallace_skills.json | jq
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="flex justify-between mb-2">
                  <h3 className="font-mono">{skill.name}</h3>
                  <span className="text-sm">{skill.level}%</span>
                </div>
                
                <div className="progress-container">
                  <div 
                    className="progress-bar" 
                    style={{ 
                      width: `${skill.level}%`,
                      backgroundColor: skill.color 
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-10 p-4 bg-gray-900 rounded-md">
            <h3 className="text-xl mb-3 text-primary">Command Line Skills</h3>
            <pre className="font-mono text-sm">
              <code className="text-gray-300">
{`$ experience --format=years
> 5+ years of coding experience

$ specialization --list
> Bot Development
> AI Integration
> Full-Stack Web Development
> Natural Language Processing
> User Experience Design

$ learning --current
> Advanced ML Techniques
> Cloud Infrastructure
> Cybersecurity Hardening
> Distributed Systems`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;