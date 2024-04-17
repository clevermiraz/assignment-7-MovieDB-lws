import Footer from "@/components/Footer";
import Content from "@/components/HomePage/Content";
import Sidebar from "@/components/SideBar";

export default function HomePage({ params: { lang } }) {
    return (
        <>
            <main>
                <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
                    <Sidebar language={lang} />
                    <Content language={lang} />
                </div>
            </main>

            <Footer />
        </>
    );
}
