import MovieDetailsSection from "@/components/MovieDetailsPage/Section";
import Sidebar from "@/components/SideBar";

export default function MovieDetailPage({ params }) {
    const { movieId, lang } = params;

    return (
        <>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar language={lang} />
                    <MovieDetailsSection movieId={movieId} language={lang} />
                </div>
            </main>
        </>
    );
}
