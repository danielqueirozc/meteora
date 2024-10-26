import { useEffect, useState } from "react";

export function Categories() {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        setIsTablet(window.innerWidth >= 768);
    }, []);

    return (
        <section className="flex flex-col items-center gap-4 py-6 px-[14px] mx-auto lg:max-w-[1110px]">
           <h3 className="text-[28px]">Busque por categoria:</h3>
            {isTablet ? (
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 w-full">
                <div>
                    <img className="w-full" src="../src/assets/Tablet/Categorias/CategoriaCamiseta.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Camisetas
                    </button>
                </div>
                <div>
                    <img className="w-full" src="../src/assets/Tablet/Categorias/CategoriaBolsas.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Bolsas
                    </button>
                </div>
                <div>
                    <img className="w-full" src="../src/assets/Tablet/Categorias/CategoriaCalcados.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Calçados
                    </button>
                </div>
                <div>
                    <img className="w-full" src="../src/assets/Tablet/Categorias/CategoriaCalcas.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Calças
                    </button>
                </div>
                <div>
                    <img className="w-full" src="../src/assets/Tablet/Categorias/CategoriaCasacos.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Casacos
                    </button>
                </div>
                <div>
                    <img className="w-full" src="../src/assets/Tablet/Categorias/CategoriaOculos.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Óculos
                    </button>
                </div>
            </div>
            ) : (
            <div className="grid grid-cols-2 gap-[30px]">
                <div>
                    <img src="../src/assets/mobile/Categorias/CategoriaCamiseta.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Camisetas
                    </button>
                </div>
                <div>
                    <img src="../src/assets/mobile/Categorias/CategoriaBolsas.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Bolsas
                    </button>
                </div>
                <div>
                    <img src="../src/assets/mobile/Categorias/CategoriaCalcados.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Calçados
                    </button>
                </div>
                <div>
                    <img src="../src/assets/mobile/Categorias/CategoriaCalcas.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Calças
                    </button>
                </div>
                <div>
                    <img src="../src/assets/mobile/Categorias/CategoriaCasacos.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Casacos
                    </button>
                </div>
                <div>
                    <img src="../src/assets/mobile/Categorias/CategoriaOculos.png" alt="" />
                    <button className="py-2 px-4 bg-black text-white w-full font-medium">
                        Óculos
                    </button>
                </div>
            </div>
            )}
        </section>
    );
}