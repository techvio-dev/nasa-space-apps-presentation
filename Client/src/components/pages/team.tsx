import React from 'react';

interface ProjectCardProps {
  acronym: string;
  title: string;
  members: number;
  color: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ acronym, title, members, color }) => (
  <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden flex items-center">
    <div className={`w-16 h-16 ${color} flex items-center justify-center`}>
      <span className="text-white text-2xl font-bold">{acronym}</span>
    </div>
    <div className="px-4 py-2 flex-grow">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600">{members} Members</p>
    </div>
    <div className="px-4">
      <button className="text-gray-400 hover:text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </button>
    </div>
  </div>
);

const Cards: React.FC = () => {
  const projects: ProjectCardProps[] = [
    { acronym: 'GA', title: 'Graph API', members: 16, color: 'bg-pink-500' },
    { acronym: 'CD', title: 'Component Design', members: 12, color: 'bg-purple-500' },
    { acronym: 'T', title: 'Templates', members: 16, color: 'bg-yellow-500' },
    { acronym: 'RC', title: 'React Components', members: 8, color: 'bg-green-500' },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-100">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Cards;