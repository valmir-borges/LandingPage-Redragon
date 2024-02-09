import Style from './css/motivos.module.css'

function Motivos(){
    return(
        <>
            <section className={Style.container}>
                <span className={Style.title}>Porquê comprar na <span className={Style.red}>REDRAGON </span>?</span>
                <section className={Style.containercards}>
                    <div className={Style.card}>
                        <i class="fa-solid fa-truck" style={{color: '#EF3446'}}></i>
                        <span className={Style.titlecard}>ENVIAMOS PARA TODO O BRASIL</span>
                        <span className={Style.descriptioncard}>Aqui na <span className={Style.red}>REDRAGON</span> o seu pedido é embalado e enviado para todo o Brasil. E se você morar na região Sudeste ou Sul o 
                        frete é GRÁTIS</span>
                    </div>
                    <div className={Style.card}>
                        <i class="fa-solid fa-repeat" style={{color: '#EF3446'}}></i>
                        <span className={Style.titlecard}>GARANTIA E TROCAS</span>
                        <span className={Style.descriptioncard}>Na <span className={Style.red}>REDRAGON</span> você cliente tem 1 ano de garantia total com o seu produto comprado, podendo efetuar a troca do mesmo
                        caso necessário</span>
                    </div>
                    <div className={Style.card}>
                        <i class="fa-solid fa-phone" style={{color: '#EF3446'}}></i>
                        <span className={Style.titlecard}>SUPORTE 24HRS</span>
                        <span className={Style.descriptioncard}>Somente na <span className={Style.red}>REDRAGON</span> você cliente tem um atendimento 24hrs disponível por telefone ou e-mail para melhor te atender</span>
                    </div>
                </section>
            </section>
        </>
    )
}
export default Motivos;