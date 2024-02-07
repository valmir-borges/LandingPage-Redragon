import Flamengo from './img/Flamengo.png'
import LosGrandes from './img/Logo-LosGrandes.png'
import Style from './css/patrocinio.module.css'
function Patrocinio (){
    return(
        <>
        <section className={Style.patrocinio} id='patrocinio'>
            <div className={`${Style.patrociniotime} ${Style.borderpatrocinio}`}>
                <div>
                    <span className={Style.patrocinioname}>PATROCINADOR OFICIAL DO <span className={Style.patrociniored}>FLAMENGO ESPORTS</span></span>
                </div>
                <div className={Style.patrociniotimeimg}>
                    <img src={Flamengo} alt="Logo Flamengo"/>
                    <span className={Style.patrociniotext}>A Redragon é orgulhosamente patrocinadora do Flamengo Esports. Estamos muito felizes em nos unir a uma instituição renomada que já provou 
                sua força e habilidade em diversas competições de esports.</span>
                </div>
            </div>
            <div className={Style.patrociniotime}>
                <div>
                    <span className={Style.patrocinioname}>PATROCINADOR OFICIAL DA <span className={Style.patrocinioorange}>LOS GRANDES</span></span>
                </div>
                <div className={Style.patrociniolosgrandesimg}>
                <span className={Style.patrociniotext}>A Redragon é orgulhosamente patrocinadora da Los Grandes, e acompanha a Onda Laranja acreditando no potencial do time e proporcionando 
                    o melhor a uma das torcidas mais fanáticas do Brasil. Jogue com a Elite do League of Legends com a Redragon.</span>
                    <img src={LosGrandes} alt="Logo Los Grandes"/>
                </div>
            </div>
        </section>
        </>
    );
}
export default Patrocinio;