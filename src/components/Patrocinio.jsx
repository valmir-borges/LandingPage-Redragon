import Flamengo from './img/Flamengo.png'
import LosGrandes from './img/Logo-LosGrandes.png'
import Style from './css/patrocinio.module.css'
function Patrocinio (){
    return(
        <>
        <section class={Style.patrocinio}>
            <div class={`${Style.patrociniotime} ${Style.borderpatrocinio}`}>
                <span class={Style.patrocinioname}>PATROCINADOR OFICIAL DO <span class={Style.patrociniored}>FLAMENGO ESPORTS</span></span>
                <div class={Style.patrociniotimeimg}>
                    <img src={Flamengo} alt="Logo Flamengo"/>
                </div>
                <span class={Style.patrociniotext}>A Redragon é orgulhosamente patrocinadora do Flamengo Esports. Estamos muito felizes em nos unir a uma instituição renomada que já provou 
                sua força e habilidade em diversas competições de esports.</span>
            </div>
            <div class={Style.patrociniotime}>
                <span class={Style.patrocinioname}>PATROCINADOR OFICIAL DA <span class={Style.patrocinioorange}>LOS GRANDES</span></span>
                <div class={Style.patrociniolosgrandesimg}>
                    <img src={LosGrandes} alt="Logo Los Grandes"/>
                </div>
                <span class={Style.patrociniotext}>A Redragon é orgulhosamente patrocinadora da Los Grandes, e acompanha a Onda Laranja acreditando no potencial do time e proporcionando 
                o melhor a uma das torcidas mais fanáticas do Brasil. Jogue com a Elite do League of Legends com a Redragon.</span>
            </div>
        </section>
        </>
    );
}
export default Patrocinio;