import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export function Products() {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);
    }, []);

    useEffect(() => {
        // Verificar se a largura da janela é menor que 768px (mobile)
        if (window.innerWidth <= 768) {
            AOS.init({
                disable: false, // Inicializa AOS em dispositivos móveis
                startEvent: 'DOMContentLoaded',
                initClassName: 'aos-init',
                animatedClassName: 'aos-animate',
                useClassNames: false,
                disableMutationObserver: false,
                debounceDelay: 50,
                throttleDelay: 99,
                offset: 120,
                delay: 0,
                duration: 400,
                easing: 'ease',
                once: false,
                mirror: false,
                anchorPlacement: 'top-bottom',
            });
        } else {
            // Desativa AOS em telas maiores que 768px
            AOS.init({
                disable: true,
            });
        }
        
        // Reajustar AOS em caso de redimensionamento da tela
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                AOS.refresh(); // Refresca AOS ao redimensionar para dispositivos móveis
            }
        };
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            {isDesktop ? (
            <section className="flex flex-col items-center gap-4 py-6 px-[14px] mx-auto max-w-[1110px]">
                <h3 className="text-[28px] text-center">Produtos que estão bombando!</h3>            
                <div className="grid grid-cols-3 gap-8">
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/Desktop/Imagens-cards/Camiseta.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Camiseta Conforto
                            </span>
                            <p className="text-sm">
                                Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.
                            </p>
                            <span className="text-black font-bold">
                                R$ 70,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                    
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/Desktop/Imagens-cards/Calca.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Calça Alfaiataria
                            </span>
                            <p className="text-sm">
                                Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!
                            </p>
                            <span className="text-black font-bold">
                                R$ 180,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>
    
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/Desktop/Imagens-cards/Tenis.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Tênis Chunky
                            </span>
                            <p className="text-sm">
                                Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.
                            </p>
                            <span className="text-black font-bold">
                                R$ 250,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>
    
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/Desktop/Imagens-cards/Jaqueta.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Jaqueta Jeans
                            </span>
                            <p className="text-sm">
                                Modelo unissex oversized com gola de camurça. Atemporal e autêntica!
                            </p>
                            <span className="text-black font-bold">
                                R$ 150,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>
    
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/Desktop/Imagens-cards/Oculos.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Óculos Redondo
                            </span>
                            <p className="text-sm">
                                Armação metálica em grafite com lentes arredondadas. Sem erro!
                            </p>
                            <span className="text-black font-bold">
                                R$ 120,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>
    
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/Desktop/Imagens-cards/Bolsa.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Bolsa coringa
                            </span>
                            <p className="text-sm">
                                Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!
                            </p>
                            <span className="text-black font-bold">
                                R$ 120,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            ) : (
            <section className="flex flex-col items-center gap-4 py-6 px-[14px]">
                <h3 className="text-[28px] text-center">Produtos que estão bombando!</h3>            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/mobile/Imagens-cards/CardCamiseta.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Camiseta Conforto
                            </span>
                            <p className="text-sm">
                                Multicores e tamanhos. Tecido de algodão 100%, fresquinho para o verão. Modelagem unissex.
                            </p>
                            <span className="text-black font-bold">
                                R$ 70,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                    
                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/mobile/Imagens-cards/CardCalca.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Calça Alfaiataria
                            </span>
                            <p className="text-sm">
                                Modelo Wide Leg alfaiataria em linho. Uma peça pra vida toda!
                            </p>
                            <span className="text-black font-bold">
                                R$ 180,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>

                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/mobile/Imagens-cards/CardTenis.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Tênis Chunky
                            </span>
                            <p className="text-sm">
                                Snicker casual com solado mais alto e modelagem robusta. Modelo unissex.
                            </p>
                            <span className="text-black font-bold">
                                R$ 250,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>

                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/mobile/Imagens-cards/CardJaquetaJeans.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Jaqueta Jeans
                            </span>
                            <p className="text-sm">
                                Modelo unissex oversized com gola de camurça. Atemporal e autêntica!
                            </p>
                            <span className="text-black font-bold">
                                R$ 150,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>

                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/mobile/Imagens-cards/CardOculos.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Óculos Redondo
                            </span>
                            <p className="text-sm">
                                Armação metálica em grafite com lentes arredondadas. Sem erro!
                            </p>
                            <span className="text-black font-bold">
                                R$ 120,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>

                    <div data-aos="fade-down"  data-aos-easing="ease-in-out" data-aos-duration="1000" className="flex-flex-col border border-black/15">
                        <img className="w-full" src="../src/assets/mobile/Imagens-cards/CardBolsa.png" alt="" />
                        <div className="p-4 flex flex-col gap-4">
                            <span className="font-bold text-black">
                                Bolsa coringa
                            </span>
                            <p className="text-sm">
                                Bolsa camel em couro sintético de alta duração. Ideal para acompanhar você por uma vida!
                            </p>
                            <span className="text-black font-bold">
                                R$ 120,00
                            </span>
                            <button className="w-28 h-10 py-2 px-4 bg-purple text-white font-medium">
                                Ver Mais
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            )}
        </>
    )
}