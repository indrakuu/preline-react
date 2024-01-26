import { Component } from 'react';
import { FiChevronDown, FiChevronRight, FiLock, FiMenu, FiUser, FiX } from 'react-icons/fi';
import logo from '../../assets/react.svg';

class Navbar extends Component { 
  render() {
    return (
      <header className="backdrop-filter backdrop-blur-lg shadow-lg bg-opacity-30 fixed flex flex-wrap lg:justify-start lg:flex-nowrap z-20 w-full text-sm py-3 lg:py-0 border-b border-gray-200">
        <nav className="relative max-w-[75rem] w-full mx-auto px-4 lg:flex lg:items-center lg:justify-between sm:px-6 lg:px-8" aria-label="Global">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold" href="/" aria-label="Brand">
              <div className="flex items-center gap-x-2 font-medium hover:text-blue-600">
                <img src={logo} alt="logo" />
                React
              </div> 
            </a>
            <div className="lg:hidden flex items-center gap-x-4">
              <button type="button" className="hs-collapse-toggle w-9 h-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <FiMenu className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" />
                <FiX className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4"/>
              </button>
            </div>
          </div>
          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:items-center lg:justify-end sm:gap-x-7 lg:mt-0">
              <a className="font-medium hover:text-blue-600 lg:py-6" href="/">
                Home
              </a>
              <a className="font-medium hover:text-blue-600 lg:py-6" href="/list-blog">
                Blog
              </a>
              <a className="font-medium hover:text-blue-600 lg:py-6" href="/gallery">
                Gallery
              </a>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover]">
                <button type="button" className="flex items-center w-full hover:text-blue-600 font-medium">
                  Dropdown
                  <FiChevronDown className="flex-shrink-0 ms-2 w-4 h-4" />
                </button>
                <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 bg-white sm:shadow-md rounded-lg p-2 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5">
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    href="/list-blog">
                    List Blog
                  </a>
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    href="/detail-blog">
                    Detail Blog
                  </a>
                  <div className="hs-dropdown relative [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                    <button type="button" className="w-full flex justify-between tems-center text-sm text-gray-800 rounded-lg py-2 px-3 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500">
                      Miscellaneous
                      <FiChevronRight className="flex-shrink-0 ms-2 w-4 h-4" />
                    </button>
                    <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 hidden z-10 sm:mt-2 bg-white sm:shadow-md rounded-lg p-2 before:absolute sm:border before:-end-5 before:top-0 before:h-full before:w-5 top-0 end-full !mx-[10px]">
                      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/404">
                        404 Page
                      </a>
                      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/500">
                        500 Page
                      </a>
                      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/maintenance">
                        Maintenance
                      </a>
                      <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500" href="/forgot-password">
                        Forgot Password
                      </a>
                    </div>
                  </div>
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    href="/about">
                    About Us
                  </a>
                  <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500"
                    href="/term-and-conditions">
                    Terms &amp; Conditions
                  </a>
                </div>
              </div>
              <a className="flex items-center gap-x-2 font-medium hover:text-blue-600 lg:border-s lg:border-black/[.3] lg:my-6 lg:ps-6" href="/sign-in">
                <FiUser className="flex-shrink-0 w-4 h-4" />
                Sign in
              </a>
              <a className="flex items-center gap-x-2 font-medium hover:text-blue-600 lg:my-6" href="/sign-up">
                <FiLock className="flex-shrink-0 w-4 h-4" />
                Sign Up
              </a>
            </div>
          </div>
        </nav>
      </header>
        );
    }
}

export default Navbar;