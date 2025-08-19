import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Head from "next/head";

export const metadata = {
    title: "Bernard Freelance Portfolio",
    keywords: "Bernard Clarke, Freelance, Portfolio, Web Development, Design, JavaScript, React, Next.js, Tailwind CSS, Hire Developer, Custom Landing Pages, Responsive Design, User-Friendly Websites, Freelance Web Developer, Bernard Clarke Portfolio",
    description: "Bernard Clarke's freelance portfolio featuring web development projects and custom landing pages. As a freelance web developer, Bernard Clarke creates modern, responsive, and user-friendly websites using JavaScript, React, Next.js, and Tailwind CSS.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <Head>
            <title>{metadata.title}</title>
            <meta name="keywords" content={metadata.keywords}/>
            <meta name="description" content={metadata.description}/>
            <link rel="icon" href='web-app-manifest-512x512.png'/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta charSet="UTF-8"/>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        </Head>
        <body className={'FP-body'}>
        <Header/>
        <main className={"FP-main"}>
            {children}
        </main>
        <Footer/>
        </body>
        </html>
    );
}
