import Header from "@/components/Header";
import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Movie DB",
    description: "Cine Rental | Learn with Sumit",
    icons: {
        icon: [
            {
                url: "/lws-logo.svg", // /public path
                href: "/lws-logo.svg", // /public path
            },
        ],
    },
};

export default function RootLayout({ children, movieModal }) {
    const cookieStore = cookies();
    const theme = cookieStore.get("theme") || "dark";

    return (
        <html lang="en" className={`${theme === "dark" ? "dark" : ""}`}>
            <body
                className={`dark:bg-body bg-white font-[Sora] dark:text-white text-dark ${inter.className}`}
            >
                <Header />
                {movieModal}
                {children}
            </body>
        </html>
    );
}
