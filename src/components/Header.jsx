import Style from "./css/header.module.css";
import LogoRedragon from './img/Logo-Redragon.png'
import Search from './img/Search-Icon.png'
import React, {useState} from "react";

function Header (){
    const [ exibe, setExibe ] = useState( "none" );

    function blockmobilemenu(e){
        e.preventDefault();
        if( exibe == "none" )
          setExibe( "block" );
        else
          setExibe( "none" );
      }
        return(
        <>
            <header>
                <section className={Style.sectionheader}>
                    <div className={Style.divlogo}>
                        <img src={LogoRedragon} alt="Logo Redragon"/>
                        <span onClick={(e) => blockmobilemenu(e)}><a href="#carrossel" className={`${Style.textmenu} ${Style.homemobile}`}>Lançamentos</a></span>
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
                <div className={Style.mobilemenu} style={{ display: exibe }}>
                        <span><a href="" className={Style.textmenu}>Sócio</a></span>
                        <span><a href="" className={Style.textmenu}>Lojas</a></span>
                        <span><a href="#patrocinio" className={Style.textmenu}>Patrocínio</a></span>
                        <span><a href="" className={Style.textmenu}>Suporte</a></span>
                </div>
            </header>
        </>
    );
}
export default Header;