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
        <script defer src="https://cloud.umami.is/script.js" data-website-id="1be13067-5cb4-405c-a05f-4beb427f1309"></script>
        </body>
        </html>
    );
}
