import React from 'react';
import { Link } from 'react-router-dom';

type ToggleOptions = {
	toggle: () => void;
};

const Navbar = ({ toggle }: ToggleOptions) => {
	return (
		<nav className='flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono' role='navigation'>
			<Link to='/' className='pl-4'>
				<svg className='w-7 hover:text-zinc-600' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'>
					<path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
				</svg>
			</Link>
			<div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
				<svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
					<path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
				</svg>
			</div>
			<div className='pr-8 md:block hidden'>
				<Link className='p-4' to='/'>
					Home
				</Link>
				<Link className='p-4' to='/menu'>
					Menu
				</Link>
				<Link className='p-4' to='/about'>
					About
				</Link>
				<Link className='p-4' to='/contact'>
					Contact
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
