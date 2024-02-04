import Style from "./css/header.module.css";
import LogoRedragon from './img/Logo-Redragon.png'
import Search from './img/Search-Icon.png'
function Header (){
    return(
        <>
            <header>
                <section class={Style.sectionheader}>
                    <div class={Style.divlogo}>
                        <img src={LogoRedragon} alt="Logo Redragon"/>
                    </div>
                    <div class={Style.divtext}>
                        <span><a href="">Produtos</a></span>
                        <span><a href="">Negócios</a></span>
                        <span><a href="">Lojas</a></span>
                        <span><a href="">Sobre</a></span>
                    </div>
                    <div class={Style.divsuporte}>
                        <span><a href="">Suporte</a></span>
                        <img src={Search} alt=""/>
                    </div>
                </section>
            </header>
        </>
    );
}
export default Header;