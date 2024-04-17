import Modal from "@/components/Modal";
import MovieDetailsSection from "@/components/MovieDetailsPage/Section";

export default function MovieDetailPage({ params }) {
    const { movieId, lang } = params;

    return (
        <>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Modal>
                        <MovieDetailsSection
                            movieId={movieId}
                            language={lang}
                        />
                    </Modal>
                </div>
            </main>
        </>
    );
}
