export function Infos() {
    return (
        <section className="bg-black px-6 py-8 flex flex-col items-start justify-center gap-8">
            <h4 className="text-white text-2xl font-medium text-center">Conheça todas as nossas facilidades</h4>
            <div className="flex gap-6">
                <img src="../src/assets/mobile/Icones/x-diamond.png" alt="" />
                <div className="flex flex-col gap-4">
                    <strong className="text-yellow">PAGUE PELO PIX</strong>
                    <span className="text-sm text-white">
                        Ganhe 5% OFF em <br />
                        pagamentos via PIX
                    </span>
                </div>
            </div>
            <div className="flex gap-6">
                <img src="../src/assets/mobile/Icones/arrow-repeat.png" alt="" />
                <div className="flex flex-col gap-4">
                    <strong className="text-yellow">TROCA GRÁTIS</strong>
                    <span className="text-sm text-white">
                        Fique livre para trocar em até <br /> 30 dias.
                    </span>
                </div>
            </div>
            <div className="flex gap-6">
                <img src="../src/assets/mobile/Icones/flower1.png" alt="" />
                <div className="flex flex-col gap-4">
                    <strong className="text-yellow">SUSTENTABILIDADE</strong>
                    <span className="text-sm text-white">
                        Moda responsável, que respeita <br /> o meio ambiente.
                    </span>
                </div>
            </div>
        </section>
    );
}