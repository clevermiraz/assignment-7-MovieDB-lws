import { movieList } from "@/data/movies";
import { NextResponse } from "next/server";

export async function GET() {
    const allMovies = await movieList;

    return NextResponse.json(allMovies, { status: 200 });
}
