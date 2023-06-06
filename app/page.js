"use client";
import Header from "../components/Header";
import Content from "../components/Content";
import { sonnets } from "shakespeare-data";
import { Quotes } from "@phosphor-icons/react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { useState } from "react";

export default function Home() {
    const [lines, setLines] = useState([]);

    function generate() {
        setLines(sonnets.random().lines);
    }

    return (
        <main className="max-w-md conatiner mx-auto flex min-h-screen flex-col items-center gap-8 p-4 py-8">
            <Header />

            <div className="w-full flex items-center gap-4">
                <button
                    className="w-full p-4 bg-sunset rounded-md font-bold text-back"
                    onClick={(e) => generate()}
                >
                    Random
                </button>

                <CopyToClipboard 
                    text={lines.length > 0 ? lines.join(' ') : ''}
                >
                    <button
                        type="submit"
                        className="w-full p-4 border-2 border-sunset rounded-md font-bold flex"
                    >
                        <div className="flex items-center gap-2 m-auto">
                            <Quotes size={24} weight="fill" />
                            Copy
                        </div>
                    </button>
                </CopyToClipboard>
            </div>

            <Content lines={lines} />
        </main>
    );
}
