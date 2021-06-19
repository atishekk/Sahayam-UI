import React, { useState } from 'react';
import './navbar.scss';
import { Popover } from 'react-tiny-popover';
import Profile from '../Profile/Profile';

function Navbar() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return (
    <nav className="nav-bar">
      <h1>Sahayam</h1>
      <Popover
        isOpen={isPopoverOpen}
        position={['bottom']} // if you'd like, you can limit the positions
        padding={10} // preferred positions by priority
        reposition={false}
        onClickOutside={() => setIsPopoverOpen(false)}
        content={<Profile setIsPopoverOpen={setIsPopoverOpen} />}
      >
        <button onClick={() => setIsPopoverOpen(!isPopoverOpen)}>Profile</button>
      </Popover>
    </nav>
  );
}

export default Navbar;
