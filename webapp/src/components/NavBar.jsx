"use client";

import { useEffect, useState } from "react";
import * as icon from "react-feather";
import { useRouter } from "next/navigation";

export default function NavBar({ scrollIntoView, isMain = true }) {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 768);
    };

    const toggleNav = () => {
        setExpanded((prev) => !prev);
    };

    const closeNav = () => {
        setExpanded(false);
    };

    const handleNavClick = (section) => {
        if (isMain) {
            scrollIntoView(section);
            if (isSmallScreen) closeNav();
        } else {
            router.push(`/?section=${section}`);
        }
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {isSmallScreen && (
                <>
                    {!expanded && (
                        <button
                            onClick={toggleNav}
                            className="fixed z-50 m-2 p-2 hover:cursor-pointer bg-emerald-900 rounded-full shadow-lg"
                        >
                            <icon.Menu size={24} color={"white"} />
                        </button>
                    )}

                    {expanded && (
                        <div
                            className="fixed inset-0 bg-white/20 z-40 hover:cursor-pointer"
                            onClick={closeNav}
                        />
                    )}

                    <div
                        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-50 rounded-r-2xl rounded-br-2xl border-r border-r-gray-100 transform transition-transform duration-300 ease-in-out
                            ${expanded ? "translate-x-0" : "-translate-x-full"}
                        `}
                    >
                        <div className="p-5">
                            <img src="/logo1.png" alt="Logo" width={82} className="mb-8" />
                            <nav className="flex flex-col gap-6 text-xl text-gray-900 font-semibold">
                                <p onClick={() => handleNavClick("ueber-uns")} className="cursor-pointer hover:text-gray-600">
                                    Über uns
                                </p>
                                <p onClick={() => handleNavClick("fotogalerie")} className="cursor-pointer hover:text-gray-600">
                                    Fotogalerie
                                </p>
                                <p onClick={() => handleNavClick("kontakt")} className="cursor-pointer hover:text-gray-600">
                                    Kontakt
                                </p>
                            </nav>
                        </div>
                    </div>
                </>
            )}

            {!isSmallScreen && (
                <nav className={"top-0 left-0 w-full p-5 flex flex-row items-center justify-between font-bold bg-transparent" + (isMain ? " text-white absolute" : " text-gray-900")}>
                    <div>
                        <img src="/logo1.png" alt="Logo" width={82} className="max-w-[60px] md:max-w-full" />
                    </div>
                    <div className="flex flex-row gap-10 text-xl">
                        <p onClick={() => handleNavClick("ueber-uns")} className="hover:cursor-pointer">
                            Über uns
                        </p>
                        <p onClick={() => handleNavClick("fotogalerie")} className="hover:cursor-pointer">
                            Fotogalerie
                        </p>
                        <p onClick={() => handleNavClick("kontakt")} className="hover:cursor-pointer">
                            Kontakt
                        </p>
                    </div>
                </nav>
            )}
        </>
    );
}