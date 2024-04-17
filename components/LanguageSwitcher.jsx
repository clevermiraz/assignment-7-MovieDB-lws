"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
    const pathname = usePathname();

    const currentLanguage =
        pathname.match(/^\/(en|bn)/)?.[1] === "en" ? "English" : "Bangla";

    const [selectedLanguage, setSelectedLanguage] = useState(currentLanguage);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const router = useRouter();

    const handleSelectedLanguage = (language) => {
        setSelectedLanguage(language);
        setIsDropdownOpen(false);

        const lang = language === "English" ? "en" : "bn";

        // Extract the remaining part of the route after the language code
        const remainingPath = pathname.replace(/^\/(en|bn)(\/|$)/, "");

        const newPathname = `/${lang}/${remainingPath}`;

        // Update the URL based on the new pathname
        router.push(newPathname);
    };

    return (
        <>
            <div className="relative">
                <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    className="flex items-center justify-between px-4 py-2 bg-blue-700 rounded-lg text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span className="mr-2">{selectedLanguage}</span>
                    <svg
                        className="w-4 h-4 transform transition-transform duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                        />
                    </svg>
                </button>

                <div
                    id="dropdown"
                    className={`${
                        isDropdownOpen ? "" : "hidden"
                    } absolute z-20 top-full mt-2 w-36 bg-white rounded-lg shadow-lg dark:bg-gray-700`}
                >
                    <ul className="py-1">
                        <li>
                            <button
                                type="button"
                                className="block w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() =>
                                    handleSelectedLanguage("English")
                                }
                            >
                                English
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="block w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                onClick={() => handleSelectedLanguage("Bangla")}
                            >
                                Bangla
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
