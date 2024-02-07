import Style from "./css/header.module.css";
import LogoRedragon from './img/Logo-Redragon.png'
import Search from './img/Search-Icon.png'

function Header (){
        return(
        <>
            <header>
                <section className={Style.sectionheader}>
                    <div className={Style.divlogo}>
                        <img src={LogoRedragon} alt="Logo Redragon"/>
                    </div>
                    <div className={Style.divtext}>
                        <span><a href="#carrossel" className={Style.textmenu}>Lançamentos</a></span>
                        <span><a href="#socio" className={Style.textmenu}>Sócio</a></span>
                        <span><a href="" className={Style.textmenu}>Lojas</a></span>
                        <span><a href="#patrocinio" className={Style.textmenu}>Patrocínio</a></span>
                    </div>
                    <div className={Style.divsuporte}>
                        <span><a href="" className={Style.textmenu}>Suporte</a></span>
                        <img src={Search} alt=""/>
                    </div>
                </section>
            </header>
        </>
    );
}
export default Header;