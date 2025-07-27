import React from 'react';
import { Code, Database, Globe, Palette, Settings, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Technical Skills',
      icon: <Code className="text-blue-600" size={24} />,
      skills: ['JavaScript', 'Python', 'React', 'Node.js', 'TypeScript', 'HTML/CSS']
    },
    {
      title: 'Database & Tools',
      icon: <Database className="text-blue-600" size={24} />,
      skills: ['SQL', 'MongoDB', 'Git', 'Docker', 'AWS', 'PostgreSQL']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="text-blue-600" size={24} />,
      skills: ['REST APIs', 'GraphQL', 'Responsive Design', 'Progressive Web Apps', 'SEO', 'Performance Optimization']
    },
    {
      title: 'Design & UX',
      icon: <Palette className="text-blue-600" size={24} />,
      skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Wireframing', 'Prototyping', 'User Research']
    },
    {
      title: 'DevOps & Systems',
      icon: <Settings className="text-blue-600" size={24} />,
      skills: ['CI/CD', 'Linux', 'Kubernetes', 'Monitoring', 'Security', 'Cloud Architecture']
    },
    {
      title: 'Soft Skills',
      icon: <Users className="text-blue-600" size={24} />,
      skills: ['Leadership', 'Communication', 'Problem Solving', 'Team Collaboration', 'Project Management', 'Mentoring']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}