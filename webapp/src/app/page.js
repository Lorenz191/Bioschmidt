"use client";

import * as icon from "react-feather";
import NavBar from "@/components/NavBar";
import {useSearchParams} from "next/navigation";
import {Suspense, useEffect} from "react";

function HomeContent() {
    const searchParams = useSearchParams();

    const scrollIntoView = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }

    useEffect(() => {
        const section = searchParams.get("section");
        scrollIntoView(section)
    }, [searchParams]);

    return (
        <div>
            <NavBar scrollIntoView={scrollIntoView}/>
            <div className="bg-[url(/DSC01234.png)] h-screen w-screen bg-cover bg-center">
                <div className="flex flex-col h-2/3 gap-6 md:gap-10 justify-center items-center">
                    <div>
                        <img src={"/logo1.png"} alt={"Logo"} width={200}
                             className="max-w-[150px] md:max-w-[200px]"/>
                    </div>
                    <div
                        className="text-center text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium italic px-4">
                        Willkommen bei Bioschmidt
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-10 md:mt-20">
                    <icon.ChevronsDown className="text-white mx-auto mt-6 md:mt-10 animate-bounce" size={48}/>
                </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 bg-white">
                <div id="ueber-uns" className="mb-12 scroll-mt-16">
                    <div className="mb-8 md:mb-12 flex flex-col items-center">
                        <h1 className="text-emerald-900 font-serif font-medium italic text-3xl md:text-4xl mb-2 md:mb-3 text-center">
                            Über uns
                        </h1>
                        <p className="text-gray-700 text-base md:text-lg text-center px-2">
                            Bio Betrieb, Mitgliedsbetrieb bei "Naturland" und "Erde & Saat"
                        </p>
                    </div>
                    <div className="space-y-6 md:space-y-8">
                        <div>
                            <h2 className="text-emerald-900 font-serif font-medium text-xl md:text-2xl mb-2">
                                Mitglied und Produzent für:
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg">
                                Saatbau Linz (Backsaaten, Saatgutvermehrung)
                            </p>
                        </div>
                        <div>
                            <h2 className="text-emerald-900 font-serif font-medium text-xl md:text-2xl mb-2">
                                Produkte:
                            </h2>
                            <p className="text-gray-700 text-base md:text-lg">
                                Speiselinsen, Speisebohnen, Speiseweizen, Stärkemais, Buchweizen,
                                Phacelia, Öllein, Leindotter, Senf, Dinkel, Roggen, Wicke, Durumweizen,
                                Esparsette, Luzerne uvm.
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center md:items-start gap-6">
                            <div>
                                <p className="text-gray-700 mb-1 text-base md:text-lg">
                                    Landwirtschaftliche Betriebsnummer: 248002
                                </p>
                                <p className="text-gray-700 mb-1 text-base md:text-lg">
                                    Naturland Mitgliedsnummer: 992015
                                </p>
                                <p className="text-gray-700 mb-1 text-base md:text-lg">
                                    Erde & Saat Mitgliedsnummer: ES-0885
                                </p>
                                <p className="text-gray-700 mb-1 text-base md:text-lg">
                                    Kontrollstellennummer: AT-BIO-302
                                </p>
                            </div>
                            <div className="flex gap-4 items-center mt-2 md:mt-0">
                                <img src={"/nl-partner.jpg"} width={100}
                                     alt="Naturland Partner"/>
                                <img src={"/erde-saat-oesterreich.png"} width={100}
                                     alt="Erde & Saat Österreich"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="fotogalerie" className="mb-12 scroll-mt-16">
                    <h1 className="text-emerald-900 font-serif font-medium italic text-3xl md:text-4xl mb-6 text-center">
                        Fotogalerie
                    </h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row gap-4">
                            <div className="flex flex-col gap-4 w-3/5">
                                <div className="overflow-hidden h-auto">
                                    <img src="/imgk-21.jpg" className="w-full h-full object-cover shadow-sm"
                                         alt="Bioschmidt Foto 1"/>
                                </div>
                                <div className="overflow-hidden h-auto">
                                    <img src="/imgk-19.jpg" className="w-full h-full object-cover shadow-sm"
                                         alt="Bioschmidt Foto 2"/>
                                </div>
                            </div>
                            <div className="overflow-hidden h-auto">
                                <img src="/imgk-14.jpg" className="w-full h-full object-cover shadow-sm"
                                     alt="Bioschmidt Foto 3"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="overflow-hidden  w-2/3">
                                <img src="/imgk-34.jpg" className="w-full h-full object-cover shadow-sm"
                                     alt="Bioschmidt Foto 4"/>
                            </div>

                            <div className="overflow-hidden w-1/3 ">
                                <img src="/imgk-10.jpg" className="w-full h-full object-cover shadow-sm"
                                     alt="Bioschmidt Foto 5"/>
                            </div>
                        </div>

                        <div className="flex flex-row gap-4">
                            <div className="overflow-hidden w-1/3">
                                <img src="/imgk-20.jpg" className="w-full h-full object-cover shadow-sm"
                                     alt="Bioschmidt Foto 6"/>
                            </div>

                            <div className="overflow-hidden h-auto">
                                <img src="/imgk-16.jpg" className="w-full h-full object-cover shadow-sm"
                                     alt="Bioschmidt Foto 7"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div id="kontakt" className="mb-12 scroll-mt-16">
                    <h1 className="text-emerald-900 font-serif font-medium italic text-3xl md:text-4xl mb-6 text-center">
                        Kontakt
                    </h1>
                    <div className="grid grid-cols-2 gap-6 md:gap-8">
                        <div className="w-full md:w-fit mx-auto md:mx-0">
                            <h2 className="text-emerald-900 font-serif font-medium text-xl md:text-2xl mb-2 md:mb-3">
                                Adresse:
                            </h2>
                            <p className="text-gray-700 mb-1 text-base md:text-lg">
                                Gernot Schmidt
                            </p>
                            <p className="text-gray-700 mb-1 text-base md:text-lg">
                                Untere Hauptstraße 76
                            </p>
                            <p className="text-gray-700 mb-1 text-base md:text-lg">
                                2425 Nickelsdorf
                            </p>
                            <p className="text-gray-700 mb-1 text-base md:text-lg">
                                Burgenland, Österreich
                            </p>
                        </div>
                        <div className="w-full md:w-fit mx-auto md:mx-0">
                            <h2 className="text-emerald-900 font-serif font-medium text-xl md:text-2xl mb-2 md:mb-3">
                                Kontakt:
                            </h2>
                            <div className={"flex flex-col"}>
                                <a href={"tel:+436642280760"} className="text-gray-700 mb-1 text-base md:text-lg">
                                    +46 664 2280760
                                </a>
                                <a href={"mailto:info@bioschmidt.at"}
                                   className="text-gray-700 mb-1 text-base md:text-lg">
                                    info@bioschmidt.at
                                </a>
                                <p className="text-gray-700 mb-1 text-base md:text-lg">
                                    www.bioschmidt.at
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HomeContent />
        </Suspense>
    );
}