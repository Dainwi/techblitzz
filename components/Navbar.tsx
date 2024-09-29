'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleCloseMenu = () => setIsOpen(false);

    return (
        <header className='bg-gradient-to-r from-primary to-primary-foreground'>
            <div className='container mx-auto'>
            <div className="py-4 px-6 flex items-center justify-between relative">
                <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <NewspaperIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">TB</span>
                </Link>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                <nav className={`z-50 fixed top-0 right-0 w-full h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:translate-x-0 md:w-auto md:h-auto md:flex md:items-center md:space-x-6 md:bg-transparent md:shadow-none`} role="dialog" aria-modal="true">
                    <button
                        onClick={handleCloseMenu}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none md:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className={`h-full flex flex-col items-center justify-center space-y-4 p-4 md:p-0 md:flex-row md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
                        <Link href="/" onClick={handleCloseMenu} className="text-lg hover:underline">Home</Link>
                        <Link href="/news" onClick={handleCloseMenu} className="text-lg hover:underline">News</Link>
                        <Link href="/blog" onClick={handleCloseMenu} className="text-lg hover:underline">Blog</Link>
                        <Link href="/about" onClick={handleCloseMenu} className="text-lg hover:underline">About</Link>
                        <Link href="/contact" onClick={handleCloseMenu} className="text-lg hover:underline">Contact</Link>
                        {isOpen && (
                            <div className="mt-4 md:mt-0">
                                <Link href="/login" onClick={handleCloseMenu}>
                                    <Button
                                        variant="outline"
                                        className="text-slate-200 bg-slate-900 hover:text-slate-200 hover:bg-slate-950 space-x-1"
                                    >
                                        Login
                                    </Button>
                                </Link>
                            </div>
                        )}
                    </div>
                    <div className="hidden md:flex md:ml-6">
                        <Link href="/login">
                            <Button
                                variant="outline"
                                className="text-slate-200 bg-slate-900 hover:text-slate-200 hover:bg-slate-950 space-x-1"
                            >
                                Login
                            </Button>
                        </Link>
                    </div>
                </nav>
            </div>
            </div>
        </header>
    );
}

function NewspaperIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
            <path d="M18 14h-8" />
            <path d="M15 18h-5" />
            <path d="M10 6h8v4h-8V6Z" />
        </svg>
    );
}

export default Navbar;
