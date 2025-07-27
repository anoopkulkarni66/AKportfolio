import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Company Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: [
        'Led development of scalable web applications serving 100K+ users',
        'Mentored junior developers and established coding best practices',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Collaborated with cross-functional teams to deliver high-impact features'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Innovation Labs',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing applications',
        'Optimized database queries improving application performance by 40%',
        'Integrated third-party APIs and payment processing systems',
        'Participated in agile development processes and sprint planning'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Solutions',
      location: 'Austin, TX',
      period: '2018 - 2020',
      description: [
        'Built responsive web interfaces using modern JavaScript frameworks',
        'Collaborated with UX designers to implement pixel-perfect designs',
        'Improved website accessibility and SEO performance',
        'Maintained and updated legacy codebases'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      location: 'Remote',
      period: '2017 - 2018',
      description: [
        'Contributed to various web development projects',
        'Learned and applied new technologies in fast-paced environment',
        'Assisted in debugging and testing applications',
        'Participated in code reviews and team meetings'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey of growth, learning, and meaningful contributions across various organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full hidden md:block"></div>
                
                <div className="md:ml-16 bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.title}</h3>
                      <div className="flex items-center text-blue-600 font-medium mb-2">
                        <Briefcase size={16} className="mr-2" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-gray-600">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}