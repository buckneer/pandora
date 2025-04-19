import Hero from "../components/common/Hero/Hero";

function Uni() {
    return (
        <>
            <Hero
                backgroundImage={"https://images.unsplash.com/photo-1519681393784-d120267933ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8MTkyMHgxMDgwfGVufDB8fDB8fHww"}
                mobileImage="https://placehold.co/400/mobile"
                title={{ cir: "Природно-математички факултет Универзитет у Приштини", lat: "Prirodno-matematički fakultet Univerziteta u Prištini" }}
                subtitle={{ 
                    cir: "Званична страница Природно-математичког факултета – Место где наука и знање обликују будућност.", 
                    lat: "Zvanična stranica Prirodno-matematičkog fakulteta – Mesto gde nauka i znanje oblikuju budućnost." 
                }}
                buttonText={{ cir: "Упис 2025", lat: "Upis 2025" }}
                buttonUrl="URI"
            />
        </>
    );
}

export default Uni;