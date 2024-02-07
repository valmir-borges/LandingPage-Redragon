import SocioImage from './img/Socio-image.png'
import Style from './css/socio.module.css';
function Socio (){
    return(
        <>
            <main id='socio'>
                <section className={Style.sectionsocio}>
                    <div  className={Style.divsociotext}>
                        <h2>SEJA SÓCIO DA <span className={Style.spanred}>MELHOR MARCA</span> DE PERIFÉRICOS DA AMÉRICA LATINA</h2>
                        <span>Se interessou? Cadastre-se já</span>
                        <form action="">
                            <label for="email">Insira seu email</label>
                            <input type="text" autocomplete="off" name="text" class={Style.input} placeholder="Email..."/>
                            <input type="submit" value="CADASTRAR" className={Style.button}/>
                        </form>
                    </div>
                    <div className={Style.divsocioimg}>
                        <img src={SocioImage} alt=""/>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Socio;