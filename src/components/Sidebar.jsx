import React, { useState } from "react";
import menuIcon from "../assets/List.svg";
import { Link } from "@tanstack/react-router";

const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <>
            {showSidebar ? (
                <button
                    className="flex text-4xl text-white items-center cursor-pointer fixed left-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    x
                </button>
            ) : (
                <img
                    onClick={() => setShowSidebar(!showSidebar)}
                    className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
                    src={menuIcon}
                    alt="Menu"
                    width="40"
                    height="40"
                />
            )}
            <div
                className={`p-0 bg-gray-800 p-0 text-white fixed h-screen w-[18rem] top-0 transition-transform duration-300 ${showSidebar ? "translate-x-0 " : "-translate-x-[17rem]"
                    }`}
            >

                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">DevConnect</h2>
                    <ul>
                        <li>
                            <Link
                                to="/home"
                                className="text-lg font-semibold text-gray-300 block mb-3 hover:text-white"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/profile"
                                className="text-lg font-semibold text-gray-300 block mb-3 hover:text-white"
                            >
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/login"
                                className="text-lg font-semibold text-gray-300 block hover:text-white"
                            >
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="absolute bottom-6 left-6">
                    <p className="text-sm text-gray-500">
                        &copy; 2023 DevConnect. All rights reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;

