/* eslint-disable no-undef */
import React, { useState } from 'react';
import Links from '../Links/Links';
import { Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'

const Nav = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    // eslint-disable-next-line no-undef
    { id: 1, name: 'Home', path: '/Home' },
    { id: 1, name: 'Product', path: '/Product' },
    { id: 1, name: 'About', path: '/About' },
  ]
  return (
    <div>
                              {/* //? open?:'close icon':'oepn icon' */}
      <Bars3Icon className="h-6 w-6 text-blue-500" onClick={() => setOpen(!open)} />
      <span> {open ? 'open' : 'close'}</span>
      <nav className='md:flex justify-center'>

        {
          routes.map(route => <Links key={route.id} route={route}></Links>)
        }
      </nav>
    </div>

  );
};

export default Nav;