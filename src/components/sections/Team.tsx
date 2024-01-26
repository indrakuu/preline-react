import { Component } from 'react';

class Team extends Component {
  render() {
    const teamList = [
      { id: 1, name: 'Indra Kurniawan', image: 'https://img.freepik.com/free-vector/cute-cow-sitting-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-flat_138676-7823.jpg', description: 'CEO/Web Developer' },
      { id: 2, name: 'ChatGPT', image: 'https://img.freepik.com/free-vector/astronaut-dabbing-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3360.jpg?w=740&t=st=1706067501~exp=1706068101~hmac=f65406b05157d8461585f13a092586a865110af06580e1ded2ddc9f8bc28bf30', description: 'Chatbot' },
      { id: 3, name: 'Internet', image: 'https://img.freepik.com/free-vector/astronaut-floating-with-balloons-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3461.jpg?w=740&t=st=1706067522~exp=1706068122~hmac=8bdea3ce4b3f113c47595a34ad67ebba0fc2f362ee098d61adbde35c0d385d4e', description: 'Research & Development' },
      { id: 4, name: 'John Doe', image: 'https://img.freepik.com/free-vector/cute-astronaut-holding-laptop-cartoon-vector-icon-illustration-science-technology-icon-isolated_138676-5958.jpg?w=740&t=st=1706067537~exp=1706068137~hmac=22188a0b534e065c2a82ff77cb27c53679c25fd888b2f4030a015134f18880d2', description: 'Unknown' },
    ];  

      return (
          <div className='border-t border-gray-200'>
            <div className="max-w-5xl px-4 py-20 sm:px-6 lg:px-8 mx-auto" id='team'>
              <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Team</h2>
                <p className="mt-2 text-gray-600">Meet the team of talented designers behind the product.</p>
              </div>
              <div className="flex flex-wrap gap-8 sm:gap-12 justify-center">
                {teamList.map((item) => (
                  <div className="text-center" key={item.id}>
                    <img className="rounded-full w-24 h-24 mx-auto"
                      src={item.image}
                      alt="Image Description"/>
                    <div className="mt-2 sm:mt-4">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
}

export default Team;