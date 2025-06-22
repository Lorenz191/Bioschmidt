import NavBar from "@/components/NavBar";
import imprintData from "../../data/imprint_text.json";

export default function Page() {

    return(
        <div>
            <NavBar isMain={false}/>
            <div>
                {
                    imprintData.map((item) => {
                        return (
                            <div key={item.title}>
                                <h1 className="text-emerald-900 font-serif font-medium italic text-3xl md:text-4xl mb-2 md:mb-3 text-center">
                                    {item.title}
                                </h1>
                                {
                                    item.sections.map((section) => {
                                        return (
                                            <div key={section.section_title} className="flex flex-col gap-4 items-center mt-12">
                                                <h2 className="text-emerald-900 font-serif font-medium text-xl md:text-2xl">
                                                    {section.section_title}
                                                </h2>
                                                <p className={"w-2/3"}>
                                                    {section.content}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}