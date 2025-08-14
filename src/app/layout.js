import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
    title: "Bernard Clarke Freelance Portfolio",
    keywords: "Bernard Clarke, Freelance, Portfolio, Web Development, Design, JavaScript, React, Next.js, Tailwind CSS, Hire Developer, Custom Landing Pages, Responsive Design, User-Friendly Websites, Freelance Web Developer, Bernard Clarke Portfolio",
    description: "Bernard Clarke's freelance portfolio featuring web development projects and custom landing pages. As a freelance web developer, Bernard Clarke creates modern, responsive, and user-friendly websites using JavaScript, React, Next.js, and Tailwind CSS.",

};

export default function RootLayout({children}) {
    return (<html lang="en">
        <body className={'FP-body'}>
        <Header/>
        <main className={"FP-main"}>
            {children}
        </main>
        <Footer/>
        </body>
        </html>);
}
