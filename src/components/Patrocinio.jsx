import Flamengo from './img/Flamengo.png'
import LosGrandes from './img/Logo-LosGrandes.png'
import Style from './css/patrocinio.module.css'
function Patrocinio (){
    return(
        <>
        <section className={Style.patrocinio}>
            <div className={`${Style.patrociniotime} ${Style.borderpatrocinio}`}>
                <span className={Style.patrocinioname}>PATROCINADOR OFICIAL DO <span className={Style.patrociniored}>FLAMENGO ESPORTS</span></span>
                <div className={Style.patrociniotimeimg}>
                    <img src={Flamengo} alt="Logo Flamengo"/>
                </div>
                <span className={Style.patrociniotext}>A Redragon é orgulhosamente patrocinadora do Flamengo Esports. Estamos muito felizes em nos unir a uma instituição renomada que já provou 
                sua força e habilidade em diversas competições de esports.</span>
            </div>
            <div className={Style.patrociniotime}>
                <span className={Style.patrocinioname}>PATROCINADOR OFICIAL DA <span className={Style.patrocinioorange}>LOS GRANDES</span></span>
                <div className={Style.patrociniolosgrandesimg}>
                    <img src={LosGrandes} alt="Logo Los Grandes"/>
                </div>
                <span className={Style.patrociniotext}>A Redragon é orgulhosamente patrocinadora da Los Grandes, e acompanha a Onda Laranja acreditando no potencial do time e proporcionando 
                o melhor a uma das torcidas mais fanáticas do Brasil. Jogue com a Elite do League of Legends com a Redragon.</span>
            </div>
        </section>
        </>
    );
}
export default Patrocinio;