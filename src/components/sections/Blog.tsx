import { Component } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import Blogs from '../Blog';

class Blog extends Component {
  render() {

    const list = [
      { id: 1, title: 'The Best Way To LOREM', date: 'June 10, 2020', time: '10 min read',  category: 'Technology', image: 'https://img.freepik.com/free-vector/book-with-lighbulb-cartoon-vector-icon-illustration-object-education-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-4009.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
      {id: 2, title: 'How To Lose Money With LOREM', date: 'June 9, 2020', time: '7 min read',  category: 'Lorem', image: 'https://img.freepik.com/free-vector/cute-cat-playing-yarn-ball-cartoon-illustration_138676-3256.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...'},
      { id: 3, title: 'Where Can You Find Free LOREM Resource', date: 'June 8, 2020', time: '8 min read',  category: 'Ipsum', image: 'https://img.freepik.com/free-vector/cute-astronaut-riding-rocket-waving-hand-cartoon-icon-illustration-science-technology-icon-concept_138676-2130.jpg', description: 'Some quick example text to build on the card title and make up the bulk of the card cont...' },
    ]

    return (
      <div className='border-t border-gray-200'>
        <div className="max-w-[75rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto" id='blog'>
          <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Blog</h2>
            <p className="mt-2 text-gray-600">We write about the topics that are important to us.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:mb-14">
              {list.map((item) => (
                  <Blogs key={item.id} image={item.image} category={item.category} date={item.date} time={item.time} title={item.title} description={item.description}/>
              ))}
          </div>
          <div className="text-center">
            <div className="inline-block bg-white border shadow-sm rounded-full">
              <div className="py-3 px-4 flex items-center gap-x-2">
                <p className="text-gray-600">Want to read more?</p>
                <a className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium" href="/list-blog">
                  Go here <FiChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;