import { Zap, Code2 } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaAws, FaDocker, FaAndroid, FaWhatsapp } from "react-icons/fa";
import { SiEjs as SiVuejs, SiNextdotjs, SiTypescript, SiTailwindcss, SiDjango, SiExpress, SiPostgresql, SiFlutter, SiIos, SiKubernetes, SiGooglecloud, SiIced as SiCicd } from "react-icons/si";
import { MdOutlineCloud, MdOutlineViewQuilt, MdOutlineStorage, MdOutlineSmartphone } from "react-icons/md";

const Technologies = () => {


const techStacks = [
  {
    category: "Frontend",
    icon: <MdOutlineViewQuilt className="h-6 w-6 text-indigo-600" />,
    technologies: [
      { name: "React", icon: <FaReact className="h-4 w-4 text-indigo-600 mr-2" /> },
      { name: "Vue.js", icon: <SiVuejs className="h-4 w-4 text-green-600 mr-2" /> },
      { name: "Next.js", icon: <SiNextdotjs className="h-4 w-4 text-black mr-2" /> },
      { name: "TypeScript", icon: <SiTypescript className="h-4 w-4 text-blue-600 mr-2" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="h-4 w-4 text-teal-600 mr-2" /> }
    ]
  },
  {
    category: "Backend",
    icon: <MdOutlineStorage className="h-6 w-6 text-indigo-600" />,
    technologies: [
      { name: "Node.js", icon: <FaNodeJs className="h-4 w-4 text-green-600 mr-2" /> },
      { name: "Python", icon: <FaPython className="h-4 w-4 text-blue-500 mr-2" /> },
      { name: "Django", icon: <SiDjango className="h-4 w-4 text-green-700 mr-2" /> },
      { name: "Express", icon: <SiExpress className="h-4 w-4 text-gray-600 mr-2" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="h-4 w-4 text-blue-600 mr-2" /> }
    ]
  },
  {
    category: "Mobile",
    icon: <MdOutlineSmartphone className="h-6 w-6 text-indigo-600" />,
    technologies: [
      { name: "React Native", icon: <FaReact className="h-4 w-4 text-indigo-600 mr-2" /> },
      { name: "Flutter", icon: <SiFlutter className="h-4 w-4 text-blue-400 mr-2" /> },
      { name: "iOS", icon: <SiIos className="h-4 w-4 text-gray-600 mr-2" /> },
      { name: "Android", icon: <FaAndroid className="h-4 w-4 text-green-600 mr-2" /> },
      { name: "PWA", icon: <FaReact className="h-4 w-4 text-indigo-600 mr-2" /> }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: <MdOutlineCloud className="h-6 w-6 text-indigo-600" />,
    technologies: [
      { name: "AWS", icon: <FaAws className="h-4 w-4 text-orange-600 mr-2" /> },
      { name: "Google Cloud", icon: <SiGooglecloud className="h-4 w-4 text-blue-600 mr-2" /> },
      { name: "Docker", icon: <FaDocker className="h-4 w-4 text-blue-400 mr-2" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="h-4 w-4 text-blue-500 mr-2" /> },
      { name: "CI/CD", icon: <SiCicd className="h-4 w-4 text-gray-600 mr-2" /> }
    ]
  }
];


  return (
    <section className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use cutting-edge technologies to build scalable and robust solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-lg">
                  {stack.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{stack.category}</h3>
              </div>
              <ul className="space-y-3">
                {stack.technologies.map((tech, techIndex) => (
                  <li key={techIndex} className="flex items-center text-gray-600">
                    {/* <Code2 className="h-4 w-4 text-indigo-600 mr-2" /> */}
                    {tech.icon}
                    <span>{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-2 border-indigo-600 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">
              Ready to Build Your Next Project?
            </h3>
            <p className="text-gray-600 mb-8">
              Let's discuss how our technology stack can help bring your ideas to life
            </p>
            <a href="https://wa.me/+212625889397" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
              Contact Us on WhatsApp
              <FaWhatsapp className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;