import React from 'react';
import { useState, useEffect, useRef } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link, Navigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

import './App.css'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Layout({ children, onLogout, user }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const [isDropdownOpen2, setDropdownOpen2] = useState(false);

    const toggleDropdown2 = () => {
        setDropdownOpen2(!isDropdownOpen2);
    };

    const location = useLocation();
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const sidebarRef = useRef(null);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setSidebarOpen(false);
    };

    const [isAlertVisible, setAlertVisible] = useState(true);

    const closeAlert = () => {
        setAlertVisible(false);
    };

    useEffect(() => {
        const handleMouseDown = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                // Click occurred outside the sidebar, so close it
                closeSidebar();
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener('mousedown', handleMouseDown);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [sidebarRef]);

    return (
        <div class="body-font font-poppins bg-slate-800">

            <button
                data-drawer-target="default-sidebar"
                data-drawer-toggle="default-sidebar"
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                onClick={toggleSidebar}
            >
                <span className="sr-only">Toggle sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                    </svg>
                </svg>
            </button>

            {/* Sidebar */}
            <aside
                ref={sidebarRef}
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? '' : '-translate-x-full'
                    } sm:translate-x-0`}
                aria-label="Sidebar"
            >
                {/* <button onClick={closeSidebar}>Close Sidebar</button> */}
                <div class="h-full px-3 py-4 overflow-y-auto bg-slate-800">
                    <a href="https://flowbite.com/" class="flex items-center pl-2.5 mb-5">
                        {/* <img src={wedvitaWhite} class="h-6 mr-3 sm:h-7" alt="Flowbite Logo" /> */}
                    </a>
                    <ul class="space-y-2 font-medium">
                        <li>
                            <Link
                                to="/cms-user-profile"
                                className={`flex text-wedvita-text-light-purple items-center p-2 rounded-lg hover:bg-gray-100 hover:text-black group ${location.pathname === '/cms-user-profile' ? 'bg-gray-100 text-black' : 'text-gray-900'
                                    }`}
                            >
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <span class="ml-3 font-semibold">Profil</span>
                            </Link>
                        </li>
                        <li>
                            <button type="button" class="flex text-wedvita-text-light-purple hover:bg-gray-100 hover:text-black items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleDropdown}>
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                    <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                </svg>
                                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Pengeluaran</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-example" className={`${isDropdownOpen ? 'block' : 'hidden'
                                } py-2 space-y-2 mt-2 origin-top-right right-0`}>
                                <li>
                                    <Link class="flex items-center p-2 text-gray-900 rounded-lg text-wedvita-text-light-purple hover:bg-gray-100 hover:text-black group">
                                        <span class="ml-3 text-slate-400">Data Pengeluaran</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link class="flex items-center p-2 text-gray-900 rounded-lg text-wedvita-text-light-purple hover:bg-gray-100 hover:text-black group">
                                        <span class="ml-3 text-slate-400">Kategori Pengeluaran</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <button type="button" class="flex text-wedvita-text-light-purple hover:bg-gray-100 hover:text-black items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example" onClick={toggleDropdown2}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                    <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                                    <path fill-rule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clip-rule="evenodd" />
                                    <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                                </svg>

                                <span class="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Pemasukan</span>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            <ul id="dropdown-example" className={`${isDropdownOpen2 ? 'block' : 'hidden'
                                } py-2 space-y-2 mt-2 origin-top-right right-0`}>
                                <li>
                                    <li>
                                        <Link class="flex items-center p-2 text-gray-900 rounded-lg text-wedvita-text-light-purple hover:bg-gray-100 hover:text-black group">
                                            <span class="ml-3 text-slate-400">Data Pemasukan</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link class="flex items-center p-2 text-gray-900 rounded-lg text-wedvita-text-light-purple hover:bg-gray-100 hover:text-black group">
                                            <span class="ml-3 text-slate-400">Kategori Pemasukan</span>
                                        </Link>
                                    </li>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="flex text-wedvita-text-light-purple items-center p-2 rounded-lg hover:bg-gray-100 hover:text-black group">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                    <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                    <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                                </svg>

                                <span class="ml-3 font-semibold">Hutang</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex text-wedvita-text-light-purple items-center p-2 rounded-lg hover:bg-gray-100 hover:text-black group">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                    <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                                </svg>


                                <span class="ml-3 font-semibold">Wishlist</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex text-wedvita-text-light-purple items-center p-2 rounded-lg hover:bg-gray-100 hover:text-black group">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z" clip-rule="evenodd" />
                                </svg>

                                <span class="ml-3 font-semibold">Riwayat Menabung</span>
                            </Link>
                        </li>
                        <li>
                            <Link className="flex text-wedvita-text-light-purple items-center p-2 rounded-lg hover:bg-gray-100 hover:text-black group">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white">
                                    <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                                </svg>


                                <span class="ml-3 font-semibold">Rekapan Bulanan</span>
                            </Link>
                        </li>
                    </ul>
                    <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 dark:border-gray-700">
                        <li>
                            <Link class="flex items-center p-2 text-gray-900 rounded-lg text-wedvita-text-light-purple hover:bg-gray-100 hover:text-black group">
                                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                </svg>
                                <span class="ml-3 font-semibold">Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* Content */}
            <div className="min-h-screen flex">
                <div class="p-2 sm:ml-64 flex-1">
                    <div class="h-full rounded-lg">
                        <div class="h-full rounded-lg bg-gray-50">
                            <main class="flex-1 p-4">

                                <div class="container mx-auto flex justify-end items-center">

                                    <nav>
                                        <ul class="flex space-x-5">
                                            <Menu as="div" className="relative inline-block text-left">
                                                <div>
                                                    <Menu.Button className="flex mb-4 items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 md:mr-0 focus:ring-4 focus:ring-gray-100">
                                                        <span class="sr-only">Open user menu</span>
                                                        {/* <img class="w-8 h-8 mr-2 rounded-full" src={orang1} alt="user photo"></img> */}
                                                        <div class="font-extrabold">Nama</div>
                                                        <div class="font-extrabold"></div>
                                                        <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                                                        </svg>
                                                    </Menu.Button>
                                                </div>

                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <a
                                                                        href="#"
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        <div class="font-medium ">Pro User</div>
                                                                        <div class="truncate">Email</div>
                                                                    </a>
                                                                )}
                                                            </Menu.Item>
                                                        </div>

                                                        <div className="py-1">
                                                            <Menu.Item>
                                                                {({ active }) => (
                                                                    <Link
                                                                        onClick={onLogout}
                                                                        className={classNames(
                                                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                            'block px-4 py-2 text-sm'
                                                                        )}
                                                                    >
                                                                        Logout
                                                                    </Link>
                                                                )}
                                                            </Menu.Item>
                                                        </div>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </ul>
                                    </nav>
                                </div>
                                {children}
                            </main>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

