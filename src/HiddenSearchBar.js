import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './index.css';

function HiddenSearchBar() {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState('white');

  const handleClick = (e) => {
    setBgColor('#1a1a1a');
    if (e.target.className === 'container') {
      setShowInput(false);
      setBgColor('#fff');
    }
  };

  return (
    <section
      className="container"
      // style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {showInput ? (
        <div className="container">
          <h3>click outside the input box to get search icon</h3>
          <input
            type="text"
            placeholder="Search..."
            style={{ backgroundColor: bgColor }}
          />
        </div>
      ) : (
        <div className="container">
          <h3>click on the icon to get input box</h3>
          <FaSearch
            className="icon"
            onClick={() => setShowInput(true)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      )}
    </section>
  );
}

export default HiddenSearchBar;
