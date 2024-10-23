export function Categories() {
    return (
        <section className="flex flex-col items-center gap-4 py-6 px-[14px]">
            <h3 className="text-[28px]">Busque por categoria:</h3>
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
        </section>
    );
}