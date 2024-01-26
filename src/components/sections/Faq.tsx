import { Component } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

class Faq extends Component {
  render() {
      
    const faqList = [
      {
        id: 1,
        title: 'Can I cancel at anytime?',
        description: 'Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.'
      },
      {
        id: 2,
        title: 'My team has credits. How do we use them?',
        description: 'Once your team signs up for a subscription plan. This is where we sit down, grab a cup of coffee and dial in the details.'
      },
      {
        id: 3,
        title: 'How does Preline\'s pricing work?',
        description: 'Our subscriptions are tiered. Understanding the task at hand and ironing out the wrinkles is key.'
      },
      {
        id: 4,
        title: 'How secure is Preline?',
        description: 'Protecting the data you trust to Preline is our first priority. This part is really crucial in keeping the project in line to completion.'
      },
      {
        id: 5,
        title: 'How do I get access to a theme I purchased?',
        description: 'If you lose the link for a theme you purchased, don\'t panic! We\'ve got you covered. You can login to your account, tap your avatar in the upper right corner, and tap Purchases. If you didn\'t create a login or can\'t remember the information, you can use our handy Redownload page, just remember to use the same email you originally made your purchases with.'
      },
      {
        id: 6,
        title: 'Upgrade License Type',
        description: 'There may be times when you need to upgrade your license from the original type you purchased and we have a solution that ensures you can apply your original purchase cost to the new license purchase.'
      }];

      return (
          <div className='border-t border-gray-200'>
            <div className="max-w-[75rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto">
              <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">Frequently asked questions</h2>
                <p className="mt-2 text-gray-600">
                  Here are some of the most asked questions. If you have other questions, feel free to reach out to us.
                </p>
              </div>
              <div className="grid md:grid-cols-4 gap-10">
                <div className="md:col-span-2">
                  <div className='max-w-lg'>
                      <img className="rounded-xl"
                          src="https://img.freepik.com/free-vector/tablet-stylus-pencil-cartoon-vector-illustration_138676-2207.jpg"
                          alt="Image Description"/>
                  </div>
                </div>
                <div className="md:col-span-2">
                  <div className="hs-accordion-group divide-y divide-gray-200">                  
                    {faqList.map((faq) => (
                      <div className="hs-accordion pt-6 pb-3" key={faq.id} id={`hs-basic-with-title-and-arrow-stretched-heading-${faq.id}`}>
                        <button className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500" aria-controls={`hs-basic-with-title-and-arrow-stretched-collapse-${faq.id}`}>
                          {faq.title}
                          <FiChevronDown className="hs-accordion-active:hidden block flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500" />
                          <FiChevronUp className="hs-accordion-active:block hidden flex-shrink-0 w-5 h-5 text-gray-600 group-hover:text-gray-500" />
                        </button>
                        <div id={`hs-basic-with-title-and-arrow-stretched-collapse-${faq.id}`}
                          className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                          aria-labelledby={`hs-basic-with-title-and-arrow-stretched-heading-${faq.id}`}>
                          <p className="text-gray-600">
                            {faq.description}
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

export default Faq;