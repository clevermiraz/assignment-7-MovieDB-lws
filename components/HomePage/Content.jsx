import Image from "next/image";

import { getDictionary } from "@/lib/dictionaries";
import getMovieData from "@/lib/getMovieData";
import star from "@/public/assets/star.svg";
import tagImage from "@/public/assets/tag.svg";
import Link from "next/link";

export default async function Content({ language }) {
    const movieData = await getMovieData();
    const dict = await getDictionary(language);

    return (
        <>
            <div className="content">
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
                    {/* <!-- Begin Card --> */}
                    {movieData.results.map((movie) => (
                        <figure
                            className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
                            key={movie?.id}
                        >
                            <Link href={`/${language}/movies/${movie?.id}`}>
                                <Image
                                    className="w-full object-cover"
                                    src={movie?.poster_path}
                                    alt={movie?.title}
                                    width={300}
                                    height={450}
                                />
                            </Link>

                            <figcaption className="pt-4">
                                <h3 className="text-xl mb-1">
                                    {movie?.original_title}
                                </h3>
                                <p className="text-[#575A6E] text-sm mb-2">
                                    Action/Adventure/Sci-fi
                                </p>
                                <div className="flex items-center space-x-1 mb-5">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <Image
                                            key={index}
                                            src={star}
                                            width="14"
                                            height="14"
                                            alt="Rating star"
                                        />
                                    ))}
                                </div>
                                <Link
                                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                                    href={`/${language}/movies/${movie?.id}`}
                                >
                                    <Image src={tagImage} alt="" />
                                    <span>{dict?.details}</span>
                                </Link>
                            </figcaption>
                        </figure>
                    ))}

                    {/* <!-- End Card --> */}
                </div>
            </div>
        </>
    );
}
