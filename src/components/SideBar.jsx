import React from "react";
import { Link, useNavigate } from 'react-router-dom'

const SideBar = () => {
    const navigate = useNavigate()
    function closeSession ()  {      
        navigate("/")
        localStorage.removeItem("user")
    }
    return (
        <div className="flex flex-col h-screen p-3 bg-white shadow w-60 text-gray-500">
            <div className="space-y-3">
                <div className="flex items-center">
                    <h2 className="text-xl font-bold">Dashboard</h2>
                </div>
                <div className="flex-1">
                    <ul className="pt-2 pb-4 space-y-1 text-sm">
                        <li className="rounded-sm">
                            <Link
                                to="/dashboard"
                                state={{logged: true}}	
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                    />
                                </svg>
                                <span>Inicio</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to="/dashboard/juegos"
                                state={{logged: true}}
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M 10 7 V 19 M 6 7 H 22 M 18 7 V 16 C 18 18 19 19 21 19"
                                    />
                                </svg>
                                <span>Pi Game</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to="/dashboard/cart"
                                state={{logged: true}}
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                    />
                                </svg>
                                <span>Tienda</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <Link
                                to="/dashboard/ranking"
                                state={{logged: true}}
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M 7.5 22.5 V 15 H 15 V 7.5 H 22.5"
                                    />
                                </svg>
                                <span>Ranking</span>
                            </Link>
                        </li>
                        <li className="rounded-sm">
                            <button
                                onClick={closeSession}
                                className="flex items-center p-2 space-x-3 rounded-md"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                                    />
                                </svg>
                                <span>Salir</span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default SideBar