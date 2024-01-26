import { useState } from 'react'; 
import { FiArrowUp } from "react-icons/fi";

const ScrollButton = () =>{ 
  const [visible, setVisible] = useState(false) 
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 300){ setVisible(true) 
    } else if (scrolled <= 300){ 
      setVisible(false) 
    } 
  }; 

  const scrollToTop = () =>{ 
    window.scrollTo({ 
    top: 0, 
    behavior: 'smooth'
    }); 
  }; 

  window.addEventListener('scroll', toggleVisible); 
  return ( 
    <div id="back-top" className="fixed bottom-0 end-0 z-[60] mx-auto p-6">
      <button type="button" className={"py-3 px-4 flex justify-center items-center text-sm font-semibold rounded-full border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" + (visible ? 'transition ease-in duration-200 opacity-100 visible' : 'transition ease-out duration-200 opacity-0 invisible')} onClick={scrollToTop}>
        <FiArrowUp size={15} />
      </button>
    </div>
  );
}

export default ScrollButton; 