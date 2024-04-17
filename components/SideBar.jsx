import Image from "next/image";
import Link from "next/link";

import { getDictionary } from "@/lib/dictionaries";
import commingSoonImage from "@/public/assets/icons/commingSoon.svg";
import favouriteImage from "@/public/assets/icons/favourite.svg";
import newReleaseImage from "@/public/assets/icons/newRelease.svg";
import trendingImage from "@/public/assets/icons/trending.svg";
import watchLaterImage from "@/public/assets/icons/watchLater.svg";

export default async function Sidebar({ language }) {
    const dict = await getDictionary(language);

    return (
        <>
            <aside>
                <ul className="space-y-2">
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
                            href="#"
                        >
                            <Image
                                src={trendingImage}
                                width="24"
                                height="24"
                                alt=""
                            />
                            <span>{dict?.trending}</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                            href="#"
                        >
                            <Image
                                src={newReleaseImage}
                                width="24"
                                height="24"
                                alt=""
                            />
                            <span>{dict?.newReleases}</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                            href="#"
                        >
                            <Image
                                src={commingSoonImage}
                                width="24"
                                height="24"
                                alt=""
                            />
                            <span>{dict?.comingSoon}</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                            href="#"
                        >
                            <Image
                                src={favouriteImage}
                                width="24"
                                height="24"
                                alt=""
                            />
                            <span>{dict?.favourites}</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
                            href="#"
                        >
                            <Image
                                src={watchLaterImage}
                                width="24"
                                height="24"
                                alt=""
                            />
                            <span>{dict?.watchLater}</span>
                        </Link>
                    </li>
                </ul>
            </aside>
        </>
    );
}
