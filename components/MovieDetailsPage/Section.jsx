import { getDictionary } from "@/lib/dictionaries";
import getMovieData from "@/lib/getMovieData";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function MovieDetailsSection({ movieId, language }) {
    const movieData = await getMovieData();
    const movie = movieData.results.find(
        (movie) => movie.id === parseInt(movieId)
    );

    if (!movie) {
        notFound();
    }

    const dict = await getDictionary(language);

    return (
        <>
            <section>
                <div>
                    <Image
                        className="w-full object-cover max-h-[300px] lg:max-h-[500px]"
                        src={movie?.backdrop_path}
                        alt=""
                        width={600}
                        height={300}
                    />
                </div>

                <div className="grid grid-cols-12 py-12 gap-8">
                    <div className="col-span-2">
                        <Image
                            src={movie?.poster_path}
                            alt=""
                            width={200}
                            height={300}
                        />
                    </div>
                    <div className="col-span-8">
                        <h2 className="font-bold text-slate-300 text-2xl">
                            {movie?.original_title}
                        </h2>
                        <p className="my-2 text-slate-400 italic">
                            {movie?.overview}
                        </p>
                        <ul className="text-slate-300 space-y-2 my-8">
                            <li>Release Date : {movie?.release_date}</li>
                            <li>Average Vote : {movie?.vote_average}</li>
                            <li>Vote Count : {movie?.vote_count}</li>
                            <li>Popularity : {movie?.popularity}</li>
                        </ul>
                    </div>
                    <div className="col-span-2 space-y-4">
                        <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                            {dict?.streamInHD}
                        </button>
                        <button className="py-2 w-full bg-primary font-medium text-slate-800 rounded-md">
                            {dict?.downloadInHD}
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
