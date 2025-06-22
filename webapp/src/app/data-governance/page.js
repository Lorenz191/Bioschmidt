import NavBar from "@/components/NavBar";

export default function Page() {

    return(
        <div>
            <NavBar isMain={false}/>
            <div>
                <h1 className="text-emerald-900 font-serif font-medium italic text-3xl md:text-4xl mb-2 md:mb-3 text-center">
                    Impressum
                </h1>
            </div>
        </div>
    )
}