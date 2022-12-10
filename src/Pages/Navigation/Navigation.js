import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className=' bg-zinc-700 text-white'>
            <div className="navbar  w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact font-semibold dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <h1 className="normal-case font-bold text-xl">Ankan Halder</h1>
                </div>
                {/* <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div> */}
                <div className="navbar-end">
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <a href='https://drive.google.com/file/d/1Y65kdb4ylPH_mHlajXTGUTlzkWX9q17D/view' target='_blank' className="btn bg-slate-300 text-black hover:bg-slate-200">Resume</a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;