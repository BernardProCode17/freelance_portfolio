import Head from "next/head";

export default function Head({ metadata }) {
    return (
        <Head>
            <title>{metadata.title}</title>
            <meta name="keywords" content={metadata.keywords} />
            <meta name="description" content={metadata.description} />
            <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
    );
}