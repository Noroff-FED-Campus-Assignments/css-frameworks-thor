import React, { useState } from "react";
import menuIcon from "../assets/List.svg";


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
                className={`top-0 left-0 w-[35vw] bg-blue-600 p-10 pl-20 text-white fixed h-full z-40 ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "-translate-x-full"
                    }`}
            >
                <h3 className="mt-20 text-4xl font-semibold text-white">I am a sidebar</h3>
            </div>        </>
    );
};

export default Sidebar;