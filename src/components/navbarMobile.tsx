interface NavbarMobileProps {
    handleOpen: () => void;
}

export function NavbarMobile({handleOpen}: NavbarMobileProps) {
    return (
        <nav className="py-4 px-6 bg-[#343A40] flex flex-col gap-2 items-end absolute z-10 right-0 top-0 w-40">
            <button onClick={handleOpen!}>
                <img src="../src/assets/mobile/Icones/x.png" alt="" />
            </button>
            <div className="flex flex-col items-start gap-3 w-full text-white">
                <a href="#">Home</a>
                <div className="h-px w-full bg-gray" />
                <a href="#">Nossas lojas</a>
                <div className="h-px w-full bg-gray" />
                <a href="#">Novidades</a>
                <div className="h-px w-full bg-gray" />
                <a href="#">Promoções</a>
            </div>
        </nav>
    )
}