import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
    const router = useRouter()

    const meta = {
        title: "Jonathan Tan - Software Engineer",
        description: "Penultimate Business Management and Information Systems Undergraduate at Singapore Management University",
        image: "/avatar.png",
        type: "website",
        ...customMeta,
    };

    return (
        <div>
            <Head>
                <title>{meta.data}</title>
                <meta content={meta.description} name="description" />
                <meta
                    property="og:url"
                    content={`https://localhost${router.asPath}`}
                />
                <link
                    rel="canonical"
                    href={`https://localhost${router.asPath}`}
                />
                <meta property="og:type" content={meta.type} />
                <meta property="og:site_name" content="Jonathan Tan" />
                <meta property="og:description" content={meta.description} />
                <meta property="og:title" content={meta.title} />
                <meta property="og:image" content={meta.image} />
            </Head>
            <main className="dark:bg-gray-800">
                <Navbar />
                <div>{children}</div>
                <Footer />
            </main>
        </div>
    );
}
