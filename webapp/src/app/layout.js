import "./globals.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export const metadata = {
    title: "Bioschmidt",
    description: "A Next.js application for Bioschmidt",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
