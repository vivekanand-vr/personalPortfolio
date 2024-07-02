import React from 'react';
import git from '../assets/Social_icons/git.png';
import lc from '../assets/Social_icons/lc.png';
import linkedin from '../assets/Social_icons/link.png';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/vivekanand-vr',
    icon: git,
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/vicky_007/',
    icon: lc,
  },

  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vivekanand-vernekar/',
    icon: linkedin,
  },
];

function App() {
  return (
    <header className="flex items-center">
        <div className="mt-6 items-center">
          {socialLinks.map((link, index) => (
            <a className='inline-block w-10 h-10 bg-[#EBF6F7] text-center leading-10 mx-1 my-0 rounded-[50%] border-[7px] border-solid border-[#EBF6F7]
                          sm:mx-2 sm:my-2 sm:w-12 sm:h-12' 
               key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <img className='max-w-full max-h-full' src={link.icon} alt={link.name} />
            </a>
          ))}
        </div>
        <a href='https://drive.google.com/file/d/1YGahxUQ6iAaIhuDzIjJAHGfSqnkI2xq6/view?usp=drive_link'>
          <button className="inline-block text-l bg-[#edeeee] text-[black] cursor-pointer ml-3 mt-4 px-3 py-2 rounded-[5px] border-[none] hover:bg-[#0071c5] hover:text-[white]
                             sm:text-2xl sm:ml-5 sm:mt-4">Resume</button>
        </a>

    </header>
  );
}

export default App;
