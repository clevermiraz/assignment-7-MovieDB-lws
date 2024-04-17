import { movieList } from "@/data/movies";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const movieId = params.id;

    const movie = movieList.results.find(
        (movie) => movie.id === parseInt(movieId)
    );

    if (movie === undefined) {
        return NextResponse.json(
            { message: `Movie not found Based On The ID: ${movieId}` },
            { status: 404 }
        );
    }

    return NextResponse.json(movie, { status: 200 });
}

export async function PATCH(request, { params }) {
    const movie = await request.json();
    const movieId = params.id;

    const movieIndex = movieList.results.findIndex(
        (movie) => movie.id === parseInt(movieId)
    );

    if (movieIndex === -1) {
        return NextResponse.json(
            {
                message: `Movie not found Based On The ID: ${movieId}. So You Can't Update It`,
            },
            { status: 404 }
        );
    }

    movieList.results[movieIndex].title = movie?.title;

    return NextResponse.json(movieList.results[movieIndex], { status: 200 });
}

export async function DELETE(request, { params }) {
    const movieId = params.id;

    const movieIndex = movieList.results.findIndex(
        (movie) => movie.id === parseInt(movieId)
    );

    if (movieIndex === -1) {
        return NextResponse.json(
            {
                message: `Movie not found Based On The ID: ${movieId}. So You Can't Delete It`,
            },
            { status: 404 }
        );
    }

    const movieToDelete = movieList.results[movieIndex];
    movieList.results.splice(movieIndex, 1);

    return NextResponse.json(movieToDelete, { status: 200 });
}
