const ProjectCard = () => (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center my-8`}>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-full md:w-1/2 p-4"
      >
        <img 
          src={imgSrc} 
          alt={title} 
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </a>
      <div className="w-full md:w-1/2 p-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          {techStack.map((tech) => (
            <span 
              key={tech} 
              className="inline-block bg-gray-200 text-xs px-2 py-1 rounded-md mr-2 dark:bg-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <a href={link} className="text-blue-500 dark:text-blue-400" target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </div>
    </div>
  );
  