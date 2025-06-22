export default function Footer() {
    return(
        <footer className="flex flex-row justify-evenly items-center p-4 text-black font-bold">
            <div>
                <a href={"/imprint"}>Impressum</a>
            </div>
            <div>
                <p>© 2025 Bioschmidt</p>
            </div>
            <div>
                <a href={"/data-governance"}>DSGVO</a>
            </div>
        </footer>
    )
}