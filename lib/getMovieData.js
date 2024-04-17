import "server-only";

export default async function getMovieData() {
    // dynamic import of movie data
    const movieData = await import("../data/movieList.json");
    return movieData;
}
