import { Component } from 'react';
import { FiStar } from 'react-icons/fi';

class Testimonial extends Component {
    render() {

      const testimonialList = [
        { id: 1, name: 'Tripadvisor', image: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_tripadvisor-512.png', description: 'Truly great template and costumer support.', star: 5 },
        { id: 2, name: 'Microsoft', image: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/78-microsoft-512.png', description: 'The best one I\'ve ever come across.', star: 4 },
        { id: 3, name: 'Pepsi', image: 'https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/49-pepsi-512.png', description: 'This is a truly beautiful template.', star: 5 },
        { id: 4, name: 'Dribble', image: 'https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_dribbble-512.png', description: 'There one theme that you want.', star: 4 },
        { id: 5, name: 'LinkedIn', image: 'https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_LinkedIn-512.png', description: 'Great design and thorough documentation.', star: 5 }
      ];
        return (
          <div className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:gap-20 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
              {testimonialList.map((item) => (
                <div className="text-center" key={item.id}>
                  <img src={item.image} alt="" className="w-auto h-16 mx-auto" />
                  <div className="mt-2 sm:mt-6">
                    <p className="text-gray-800">
                      {item.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 flex justify-center space-x-1 mt-3">
                    {[...Array(item.star)].map((_, index) => (
                      <FiStar key={index} className="h-4 w-4 text-blue-500" fill="currentColor" />
                    ))}
                  </div>
                  </div>
              ))}
            </div>
          </div>
        );
    }
}

export default Testimonial;