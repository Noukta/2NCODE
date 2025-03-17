import { useState } from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';

const projects = [
  {
    title: 'Project 1',
    description: 'A streamlined project management web app.',
    imageUrl: 'https://img.freepik.com/vecteurs-libre/logo-design-degrade-colore-colibri_343694-2447.jpg?semt=ais_hybrid',
  },
  {
    title: 'Project 2',
    description: 'A web application for event planning.',
    imageUrl: 'https://design-assets.adobeprojectm.com/content/download/express/public/urn:aaid:sc:VA6C2:5a9afbf1-dc8a-4346-b739-353a564084e3/component?assetType=TEMPLATE&etag=7c1465bcea04a746d6429308f688f0fe&revision=0&component_id=99de525f-5160-4056-8b30-c76302678c3b',
  },
  {
    title: 'Project 3',
    description: 'An advanced dashboard for data analytics for e-commerce platforms.',
    imageUrl: 'https://images.seeklogo.com/logo-png/44/1/netbox-logo-png_seeklogo-446697.png',
  },
];

const CTA = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(nextProject, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="relative py-8 bg-gray-900">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[rgb(30,27,75,0.7)] absolute"></div>
        <img
          src="https://png.pngtree.com/background/20230617/original/pngtree-abstract-technology-and-communication-background-a-3d-rendering-of-interconnected-lines-picture-image_3703982.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
        <img
          src={projects[currentProject].imageUrl}
          alt={projects[currentProject].title}
          className="mx-auto mb-4 rounded-full w-40 h-40 object-cover shadow-lg"
        />
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed font-semibold">
          {projects[currentProject].description}
        </p>
        <div className="flex justify-center space-x-2 mb-6">
          {projects.map((_, index) => (
        <span
          key={index}
          className={`h-2 w-2 rounded-full ${index === currentProject ? 'bg-white' : 'bg-gray-500'}`}
        ></span>
          ))}
        </div>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button onClick={prevProject} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-colors">
        <ArrowLeft className="h-4 w-4 text-indigo-700" />
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button onClick={nextProject} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition-colors">
        <ArrowRight className="h-4 w-4 text-indigo-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;