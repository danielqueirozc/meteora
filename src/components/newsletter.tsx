export function Newsletter() {
    return (
        <section className="p-7">
            <div className="py-6 px-4 border border-black flex flex-col gap-6">
                <span className="text-black text-center">
                    Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!
                </span>
                <div className="flex">
                    <input
                        className="py-2 px-4 placeholder:text-black/50 border border-black focus:outline-transparent w-full" 
                        type="text" 
                        placeholder="Digite seu email" 
                    />
                    <button className="bg-purple font-medium text-white py-2 px-4">Enviar</button>
                </div>
            </div>
        </section>
    );
}