import { useEffect, useState } from "react";
import { NavbarMobile } from "./navbarMobile";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(()=> {
        if (window.innerWidth >= 912) {
            setIsTablet(true);
        }
    },[]);

    function handleOpen() {
        setIsOpen(!isOpen);
    }
    
    return (
        <>
            {isTablet ? (
                <header className="flex justify-between items-center bg-black h-[58px] px-5 relative">
                    <nav className="flex gap-5">
                        <img src="../src/assets/mobile/LogoMobile.png" alt="" />
                        <a className="text-white text-sm" href="#">Home</a>
                        <a className="text-white text-sm" href="#">Nossas lojas</a>
                        <a className="text-white text-sm" href="#">Novidades</a>
                        <a className="text-white text-sm" href="#">Promoções</a>
                    </nav>
                    <div className="flex gap-4">
                        <input
                            className="w-full py-2 px-4"
                            type="text" 
                            placeholder="Digite o produto"
                        />
                        <button className="py-2 px-3 border border-white text-white">Buscar</button>
                    </div>
                </header>
                ) : (
                <header className="flex justify-between items-center bg-black h-[58px] px-5 relative">
                    <img src="../src/assets/mobile/LogoMobile.png" alt="" />
                    <button onClick={handleOpen}>
                        <img src="../src/assets/mobile/Icones/hamburguer.png" alt="" />
                    </button>
                    {isOpen && <NavbarMobile handleOpen={handleOpen} />}
                </header>
                )
            }   
        </>
    );
}   