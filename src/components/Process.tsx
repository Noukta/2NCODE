import { CheckCircle } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      title: 'Discovery',
      description: 'We learn about your business, goals, and vision to create a tailored strategy.',
      image: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=400',
      borderColor: 'border-blue-500' // Border color for this step
    },
    {
      title: 'Design',
      description: 'Our designers create beautiful mockups that align with your brand identity.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=400',
      borderColor: 'border-indigo-500' // Border color for this step
    },
    {
      title: 'Development',
      description: 'We build your website using modern technologies and best practices.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=400',
      borderColor: 'border-green-500' // Border color for this step
    },
    {
      title: 'Launch',
      description: 'After thorough testing, your website goes live and starts driving results.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400',
      borderColor: 'border-red-500' // Border color for this step
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A streamlined approach to bringing your website to life.
          </p>
        </div>
        
        {/* Step Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Card with Image */}
              <div className="bg-white rounded-xl shadow-lg h-full overflow-hidden group-hover:scale-105 transition-transform duration-300 ease-in-out">
                <div className="h-48 overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-indigo-600 mr-2" />
                    <span className="text-sm font-semibold text-indigo-600">Step {index + 1}</span>
                  </div>
                  {/* Title with Colored Border */}
                  <h3 className={`text-xl font-semibold text-gray-900 mb-2 border-b-4 ${step.borderColor} pb-2`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              
              {/* Arrow between steps (visible only on large screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-600 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
