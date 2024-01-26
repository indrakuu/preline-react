import { Component } from 'react';
import { FiAlertCircle, FiMessageSquare, FiMonitor, FiMail, FiArrowRight} from "react-icons/fi";
import PrimaryButton from '../buttons/PrimaryButton';

class Contact extends Component {
    render() {
      return (
          <div className='border-t border-gray-200'>
            <div className="max-w-[75rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto" id='contact'>
              <div className="max-w-2xl lg:max-w-5xl mx-auto">
                <div className="text-center">
                  <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact</h1>
                  <p className="mt-2 text-gray-600">
                    We're here to help and answer any question you might have. We look forward to hearing from you.
                  </p>
                </div>
                <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
                  <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
                    <h2 className="mb-8 text-xl font-semibold text-gray-800">Fill in the form</h2>
                    <form>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="hs-firstname-contacts-1" className="sr-only">First Name</label>
                            <input type="text" name="hs-firstname-contacts-1" id="hs-firstname-contacts-1"
                              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              placeholder="First Name"/>
                          </div>
                          <div>
                            <label htmlFor="hs-lastname-contacts-1" className="sr-only">Last Name</label>
                            <input type="text"
                              name="hs-lastname-contacts-1"
                              id="hs-lastname-contacts-1"
                              className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                              placeholder="Last Name"/>
                          </div>
                        </div>
                        <div>
                          <label htmlFor="hs-email-contacts-1" className="sr-only">Email</label>
                          <input
                            type="email"
                            name="hs-email-contacts-1"
                            id="hs-email-contacts-1"
                            autoComplete="email"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Email"/>
                        </div>
                        <div>
                          <label htmlFor="hs-phone-number-1" className="sr-only">Phone Number</label>
                          <input
                            type="text"
                            name="hs-phone-number-1"
                            id="hs-phone-number-1"
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Phone Number"/>
                        </div>
                        <div>
                          <label htmlFor="hs-about-contacts-1" className="sr-only">Details</label>
                          <textarea
                            id="hs-about-contacts-1"
                            name="hs-about-contacts-1"
                            rows={4}
                            className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                            placeholder="Details"
                            defaultValue={""}/>
                        </div>
                      </div>
                      <div className="mt-4 grid">
                        <PrimaryButton type="submit" as='button' className='w-full'>
                          Send inquiry
                        </PrimaryButton>
                      </div>
                      <div className="mt-3 text-center">
                        <p className="text-sm text-gray-500">We'll get back to you in 1-2 business days.</p>
                      </div>
                    </form>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <div className="flex gap-x-7 py-6">
                      <FiAlertCircle style={{fontSize: '24px'}}/>
                      <div className="grow">
                        <h3 className="font-semibold text-gray-800">Knowledgebase</h3>
                        <p className="mt-1 text-sm text-gray-500">We're here to help with any questions or code.</p>
                        <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                          Contact support <FiArrowRight style={{fontSize: '15px'}}/>
                        </a>
                      </div>
                    </div>
                    <div className="flex gap-x-7 py-6">
                      <FiMessageSquare style={{fontSize: '24px'}}/>
                      <div className="grow">
                        <h3 className="font-semibold text-gray-800">FAQ</h3>
                        <p className="mt-1 text-sm text-gray-500">Search our FAQ for answers to anything you might ask.</p>
                        <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                          Visit FAQ <FiArrowRight style={{fontSize: '15px'}}/>
                        </a>
                      </div>
                    </div>
                    <div className=" flex gap-x-7 py-6">
                      <FiMonitor style={{fontSize: '24px'}}/>
                      <div className="grow">
                        <h3 className="font-semibold text-gray-800">Developer APIs
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">Check out our development quickstart guide.
                        </p>
                        <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                          Contact sales <FiArrowRight style={{fontSize: '15px'}}/>
                        </a>
                      </div>
                    </div>
                    <div className=" flex gap-x-7 py-6">
                      <FiMail style={{fontSize: '24px'}}/>
                      <div className="grow">
                        <h3 className="font-semibold text-gray-800">Contact us by email</h3>
                        <p className="mt-1 text-sm text-gray-500">If you wish to write us an email instead please use</p>
                        <a className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800" href="#">
                          example@site.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        );
    }
}

export default Contact;