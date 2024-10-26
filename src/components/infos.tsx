import { useEffect, useState } from "react";

export function Infos() {
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        setIsTablet(window.innerWidth >= 768);
    }, []);

    return (
        <div className="bg-black px-6 py-8 flex items-center justify-center">
            <section className="flex flex-col items-center justify-center gap-8">
                <h4 className="text-white text-2xl font-medium text-center">Conheça todas as nossas facilidades</h4>
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex gap-6">

                        {isTablet ? (
                        <img className="w-[72px] h-[72px]" src="../src/assets/Tablet/Icones/x-diamond.png" alt="" />
                        ) : (
                        <img className="w-14 h-14" src="../src/assets/mobile/Icones/x-diamond.png" alt="" />
                        )}

                        <div className="flex flex-col gap-4">
                            <strong className="text-yellow">PAGUE PELO PIX</strong>
                            <span className="text-sm text-white">
                                Ganhe 5% OFF em <br />
                                pagamentos via PIX
                            </span>
                        </div>
                        </div>
                        <div className="flex gap-6">

                        {isTablet ? (
                        <img className="w-[72px] h-[72px]" src="../src/assets/Tablet/Icones/arrow-repeat.png" alt="" />
                        ) : (
                        <img className="w-14 h-14" src="../src/assets/mobile/Icones/arrow-repeat.png" alt="" />
                        )}

                        <div className="flex flex-col gap-4">
                            <strong className="text-yellow">TROCA GRÁTIS</strong>
                            <span className="text-sm text-white">
                                Fique livre para trocar em até <br /> 30 dias.
                            </span>
                        </div>
                        </div>
                        <div className="flex gap-6">

                        {isTablet ? (
                        <img className="w-[72px] h-[72px]" src="../src/assets/Tablet/Icones/flower.png" alt="" />
                        ) : (
                        <img className="w-14 h-14" src="../src/assets/mobile/Icones/flower.png" alt="" />
                        )}

                        <div className="flex flex-col gap-4">
                            <strong className="text-yellow">SUSTENTABILIDADE</strong>
                            <span className="text-sm text-white">
                                Moda responsável, que respeita <br /> o meio ambiente.
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}