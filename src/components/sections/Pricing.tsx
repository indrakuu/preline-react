import { Component } from 'react';
import { FiCheck, FiChevronDown, FiMinus} from 'react-icons/fi';
import SecondaryButton from '../buttons/SecondaryButton';
import { Link } from 'react-router-dom';
import PrimaryButton from '../buttons/PrimaryButton';

class Pricing extends Component {
    render() {
      return (
        <div className="border-t border-gray-200">
          <div className="max-w-[75rem] px-4 py-20 sm:px-6 lg:px-8 mx-auto" id='pricing'>
            <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
              <h2 className="text-2xl font-bold md:text-3xl md:leading-tight">
                Pricing
              </h2>
              <p className="mt-1 text-gray-600">
                Increase your teams productivity. Get things done in rapid time.
              </p>
            </div>
            <div className="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:w-full after:h-48 after:bg-gradient-to-t after:from-white after:via-white/0 pb-14">
              <div className="lg:block lg:sticky top-20 start-2 bg-white static lg:z-15">
                <div className="grid grid-cols-4 lg:grid-cols-6 gap-6">
                  <div className="col-span-2 hidden lg:block">
                    <div className="h-full"></div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl">
                      <div>
                        <span className="font-semibold text-lg text-gray-800">
                          Free
                        </span>
                        <p className="text-xs text-gray-500">Free forever</p>
                      </div>
                      <div className="mt-2">
                        <SecondaryButton as={Link} to='https://www.google.co.id/?hl=id' className='w-full'>
                          Get started
                        </SecondaryButton>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl">
                      <div>
                        <span className="font-semibold text-lg text-gray-800">
                          Startup
                        </span>
                        <p className="text-xs text-gray-500">
                          $39 per month billed annually
                        </p>
                      </div>
                      <div className="mt-2">
                        <PrimaryButton as={Link} to='https://www.google.co.id/?hl=id' className='w-full'>
                          Get started
                        </PrimaryButton>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl">
                      <div>
                        <span className="font-semibold text-lg text-gray-800">
                          Team
                        </span>
                        <p className="text-xs text-gray-500">
                          $89 per month billed annually
                        </p>
                      </div>
                      <div className="mt-2">
                        <SecondaryButton as={Link} to='https://www.google.co.id/?hl=id' className='w-full'>
                          Get started
                        </SecondaryButton>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 lg:col-span-1">
                    <div className="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl">
                      <div>
                        <span className="font-semibold text-lg text-gray-800">
                          Enterprise
                        </span>
                        <p className="text-xs text-gray-500">
                          $149 per month billed annually
                        </p>
                      </div>
                      <div className="mt-2">
                        <SecondaryButton as={Link} to='https://www.google.co.id/?hl=id' className='w-full'>
                          Get started
                        </SecondaryButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 lg:space-y-0">
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  <li className="lg:col-span-2 lg:py-3">
                    <span className="text-lg font-semibold text-gray-800">
                      General
                    </span>
                  </li>
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                </ul>
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800">
                      Number of seats
                    </span>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Free
                      </span>
                      <span className="text-sm text-gray-800">
                        1
                      </span>
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Startup
                      </span>
                      <span className="text-sm text-gray-800">
                        Up to 3
                      </span>
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Team
                      </span>
                      <span className="text-sm text-gray-800">
                        Up to 10
                      </span>
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Enterprise
                      </span>
                      <span className="text-sm text-gray-800">
                        Unlimited
                      </span>
                    </div>
                  </li>
                </ul>
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800">
                      Storage
                    </span>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Free
                      </span>
                      <span className="text-sm text-gray-800">
                        15 GB
                      </span>
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Startup
                      </span>
                      <span className="text-sm text-gray-800">
                        1 TB
                      </span>
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Team
                      </span>
                      <span className="text-sm text-gray-800">
                        15 TB
                      </span>
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Enterprise
                      </span>
                      <span className="text-sm text-gray-800">
                        Unlimited
                      </span>
                    </div>
                  </li>
                </ul>
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800">
                      Email sharing
                    </span>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Free
                      </span>
                      <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Startup
                      </span>
                      <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Team
                      </span>
                      <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Enterprise
                      </span>
                      <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                    </div>
                  </li>
                </ul>
                <ul className="grid lg:grid-cols-6 lg:gap-6">
                  <li className="lg:col-span-2 pb-1.5 lg:py-3">
                    <span className="text-sm text-gray-800">
                      Any time, anywhere access
                    </span>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Free
                      </span>
                      <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Startup
                      </span>
                      <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Team
                      </span>
                      <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                    </div>
                  </li>
                  <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                    <div className="grid grid-cols-6 lg:block">
                      <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                        Enterprise
                      </span>
                      <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                    </div>
                  </li>
                </ul>
              </div>
              <div id="view-all-features-button" className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="view-all-features">
                <div className="mt-6 relative z-10 space-y-4 lg:space-y-0">
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 lg:py-3">
                      <span className="text-lg font-semibold text-gray-800">
                        Additional features
                      </span>
                    </li>
                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                    <li className="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center"></li>
                  </ul>
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="text-sm text-gray-800">
                        Dedicated account manager
                      </span>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Free
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Startup
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Team
                        </span>
                        <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Enterprise
                        </span>
                        <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                      </div>
                    </li>
                  </ul>
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="text-sm text-gray-800">
                        24/7 support
                      </span>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Free
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Startup
                        </span>
                        <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Team
                        </span>
                        <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Enterprise
                        </span>
                        <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                      </div>
                    </li>
                  </ul>
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="text-sm text-gray-800">
                        Rewards
                      </span>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Free
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Startup
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Team
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Enterprise
                        </span>
                        <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                      </div>
                    </li>
                  </ul>
                  <ul className="grid lg:grid-cols-6 lg:gap-6">
                    <li className="lg:col-span-2 pb-1.5 lg:py-3">
                      <span className="text-sm text-gray-800">
                        Business API
                      </span>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Free
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Startup
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Team
                        </span>
                        <FiMinus size="20" className="lg:mx-auto text-gray-400" />
                      </div>
                    </li>
                    <li className="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100">
                      <div className="grid grid-cols-6 lg:block">
                        <span className="lg:hidden col-span-2 font-semibold text-sm text-gray-800">
                          Enterprise
                        </span>
                        <FiCheck size="20" className="lg:mx-auto text-blue-600" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <button type="button" className="hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                  id="hs-pricing-comparision" data-hs-collapse="#view-all-features-button">
                  <span className="hs-collapse-open:hidden block">View all features</span>
                  <span className="hs-collapse-open:block hidden">Hide all features</span>
                  <FiChevronDown className="hs-collapse-open:rotate-180 w-4 h-4" />
                </button>
            </div>
          </div>
        </div>
        );
    }
}

export default Pricing;