import { Component } from "react";
import { FiCpu, FiBookOpen, FiCoffee, FiShare2 } from "react-icons/fi";

class About extends Component {
  render() {

    const about = [
      { id: 1, title: 'Creative minds', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora sequi cumque eaque sit reprehenderit officiis!', icon: <FiShare2 size={32} className="text-blue-600" /> },
      { id: 2, title: 'Simple and affordable', description: 'From boarding passes to movie tickets, there\'s pretty much nothing you can\'t store with Preline.', icon: <FiCoffee size={32} className="text-blue-600" /> },
      { id: 3, title: 'Industry-leading documentation', description: 'Our documentation and extensive Client libraries contain everything a business needs to build a custom integration.', icon: <FiBookOpen size={32} className="text-blue-600" /> },
      { id: 4, title: 'Designing for people', description: 'We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.', icon: <FiCpu style={{ fontSize: '32px', color: "#2563EB" }} /> }
    ];
    
    return (
      <div className='border-t border-gray-200'>
        <div className="max-w-[75rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto" id="about">
          <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">About</h2>
            <p className="mt-2 text-gray-600">
              We are a digital agency that specializes in building enterprise products and MVPs for startups.
            </p>
          </div>
          <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 gap-8 md:gap-12">
                {about.map((item) => (
                  <div key={item.id} className="flex gap-x-5">
                    {item.icon}
                    <div className="grow">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;