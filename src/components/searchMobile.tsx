export function SearchMobile() {
    return (
       <section className="flex gap-2 p-6">
            <input 
                type="text" 
                className="w-full placeholder:text-gray p-2 outline-none px-4 py-2 border border-black" 
                placeholder="Pesquisar" 
            />
            <button className="py-2 px-4 text-black border border-black">
                Pesquisar
            </button>
       </section>
    )
}