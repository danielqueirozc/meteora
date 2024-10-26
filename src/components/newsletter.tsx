export function Newsletter() {
    return (
        <section className="p-7 md:p-10">
            <div className="py-6 md:py-10 px-4 md:px-16 border border-black flex flex-col gap-6">
                <span className="text-black text-center md:text-xl">
                    Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
                </span>
                <div className="flex justify-center">
                    <input
                        className="md:max-w-[400px] py-2 px-4 placeholder:text-black/50 border border-black w-full" 
                        type="text" 
                        placeholder="Digite seu email" 
                    />
                    <button className="bg-purple font-medium text-white py-2 px-4">Enviar</button>
                </div>
            </div>
        </section>
    );
}