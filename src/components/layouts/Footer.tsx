import { Component } from 'react';
import { FiFacebook, FiGithub, FiGlobe, FiSlack, FiTwitter } from 'react-icons/fi';
import logo from '../../assets/react.svg';

class Footer extends Component {
    render() {
        return (
          <div>
            <div className="bg-gray-900 w-full">
              <div className="w-full max-w-[75rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="col-span-full lg:col-span-1">
                     <a className="flex-none text-xl font-semibold" href="/" aria-label="Brand">
                      <div className="flex items-center gap-x-2 font-medium text-gray-100 hover:text-gray-300">
                        <img src={logo} alt="logo" />
                        React
                      </div> 
                    </a>
                  </div>
                  <div className="col-span-1">
                    <h4 className="font-semibold text-gray-100">Product</h4>
                    <div className="mt-3 grid space-y-3">
                      <p>
                        <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                          href="https://tailwindcss.com/">
                          Tailwind {" "}
                          <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                            CSS
                          </span>
                        </a>
                      </p>
                      <p>
                        <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                          href="https://preline.co/" target="_blank">
                          Preline UI {" "}
                          <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                            Component
                          </span>
                        </a>
                      </p>
                      <p>
                        <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                          href="https://react.dev/" target="_blank">
                          React {" "}
                          <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                            Library
                          </span>
                        </a>
                      </p>
                      <p>
                        <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                          href="https://github.com/indrakuu/preline-react" target="_blank">
                          Github {" "}
                          <span className="inline ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                            Download
                          </span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1">
                    <h4 className="font-semibold text-gray-100">Company</h4>
                    <div className="mt-3 grid space-y-3">
                      <p>
                        <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                          href="/about">
                          About
                        </a>
                      </p>
                      <p>
                        <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                          href="/list-blog">
                          Blog
                        </a>
                      </p>
                      <p>
                        <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                          href="/gallery">
                          Gallery
                        </a>
                      </p>
                      <p>
                        <a className="inline-flex gap-x-2 text-gray-400 hover:text-gray-200"
                          href="/term-and-conditions">
                          Terms of Service
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-400">
                      © 2024 Indra Kurniawan. All rights reserved.
                    </p>
                  </div>
                  <div>
                    <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600"href="https://www.facebook.com/" target="_blank">
                      <FiFacebook className="flex-shrink-0 w-4 h-4" />
                    </a>
                    <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://www.infobangindra.my.id/" target="_blank">
                      <FiGlobe className="flex-shrink-0 w-4 h-4" />
                    </a>
                    <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://twitter.com/" target="_blank">
                      <FiTwitter className="flex-shrink-0 w-4 h-4" />
                    </a>
                    <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://github.com/indrakuu/preline-react" target="_blank">
                      <FiGithub className="flex-shrink-0 w-4 h-4" />
                    </a>
                    <a className="w-10 h-10 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-white/10 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600" href="https://slack.com/" target="_blank">
                      <FiSlack className="flex-shrink-0 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Footer;