import React, { useEffect, useState } from 'react';
import { collection, getDocs, QuerySnapshot, DocumentData } from 'firebase/firestore';
import { db } from './../../firebaseConfig'; // Import Firebase config

// Type for your project data
type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];  // Array of image URLs for the project
  link: string;
  liveDemo: string;
};

interface ProjectsProps {
  darkMode: boolean; // Accept darkMode as a prop
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);  // State for loading

  // Fetch projects from Firestore
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const projectSnapshot: QuerySnapshot<DocumentData> = await getDocs(projectsCollection);

        const projectList: Project[] = projectSnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,  // Auto-generated document ID
            ...data,
            images: data.images || [], // Ensure images is an array, default to empty if not found
          } as Project;
        });

        setProjects(projectList);  // Set projects to state
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error('Error fetching projects: ', error);
        setLoading(false);  // Set loading to false in case of error
      }
    };

    fetchProjects(); // Fetch data when component mounts
  }, []);

  return (
    <div className="mt-20 min-h-screen m-10 ml-12 " id="projects">
      <h2 className="text-4xl font-semibold mt-10 ml-4">Personal Projects</h2>

      {/* Loader: Show a spinner or message while loading */}
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="animate-spin border-t-4 border-blue-600 w-16 h-16 rounded-full border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20">
          {projects.length === 0 ? (
            <p>No projects available</p>  // Show message if no projects
          ) : (
            projects.map((project) => (
              <div
                key={project.id}
                className="relative group p-6 rounded-xl mt-10 transition-all duration-300 ease-in-out
                md:hover:shadow-[3px_3px_10px_rgba(0,0,0,0.2),_-3px_-3px_10px_rgba(255,255,255,0.7)]
                shadow-[3px_3px_10px_rgba(0,0,0,0.2),_-3px_-3px_10px_rgba(255,255,255,0.7)]
                md:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.3),inset_-2px_-2px_5px_rgba(255,255,255,0.6)]
                w-5/6 h-full ml-5
                "
              >
                {/* MOBILE VIEW: Single Card */}
                <div className="block md:hidden">
                  {/* Image & Title Container */}
                  <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
                    {project.images.map((imageURL, index) => (
                      <img
                        key={index}
                        src={imageURL}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="max-w-full max-h-64 object-contain rounded-lg flex-shrink-0"
                      />
                    ))}
                  </div>
                  <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
                  {/* Project Details */}
                  <p className="mt-4">{project.description}</p>
                  <p className="mt-2 text-sm">Technologies: {project.technologies.join(', ')}</p>
                  <div className="mt-4 flex justify-between">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-24 bg-[#F96E2A] rounded-md flex items-center justify-center transition-all duration-300 transform active:bg-sky-700 active:scale-95 font-semibold"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-24 bg-[#F96E2A] rounded-md flex items-center justify-center transition-all duration-300 transform active:bg-sky-700 active:scale-95 font-semibold"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>

                {/* DESKTOP VIEW: Hover Effect Card */}
                <div className="hidden md:block">
                  {/* Image & Title Container */}
                  <div className="relative">
                    <div className="flex space-x-4 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 items-center justify-center gap-5">
                      {project.images.map((imageURL, index) => (
                        <img
                          key={index}
                          src={imageURL}
                          alt={`${project.title} screenshot ${index + 1}`}
                          className="max-w-full max-h-64 object-cover rounded-lg flex-shrink-0"
                        />
                      ))}
                    </div>
                    <h3 className="text-2xl font-semibold mt-4">{project.title}</h3>
                  </div>

                  {/* Hover Content */}
                  <div
                    className={`absolute top-0 left-0 right-0 bottom-0 mt-5 p-6 rounded-xl opacity-0 group-hover:opacity-100
                      transform translate-y-10 group-hover:translate-y-0 transition-all duration-500 ease-out
                      shadow-[3px_3px_10px_rgba(0,0,0,0.2),_-3px_-3px_10px_rgba(255,255,255,0.7)]
                      ${darkMode ? 'bg-[#1B1833]' : 'bg-[#FBF8EF]'}`}
                  >
                    {/* Project Details */}
                    <h1 className='font-bold text-lg p-2'>Details</h1>
                    <p className="mt-3  text-lg">{project.description}</p>
                    <p className="mt-4 text-lg">Technologies: {project.technologies.join(', ')}</p>
                    <div className="mt-16 flex justify-between">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-24 bg-[#F96E2A] rounded-md flex items-center justify-center transition-all duration-300 transform active:bg-sky-700 active:scale-95 font-semibold"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-24 bg-[#F96E2A] rounded-md flex items-center justify-center transition-all duration-300 transform active:bg-sky-700 active:scale-95 font-semibold"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
