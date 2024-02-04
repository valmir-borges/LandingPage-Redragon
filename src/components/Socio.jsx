import SocioImage from './img/Socio-image.png'
import Style from './css/socio.module.css'
function Socio (){
    return(
        <>
            <main>
                <section class={Style.sectionsocio}>
                    <div  class={Style.divsociotext}>
                        <h2>SEJA SÓCIO DA MELHOR MARCA DE PERIFÉRICOS DA AMÉRICA LATINA</h2>
                        <span>Se interessou? Cadastre-se já</span>
                        <form action="">
                            <label for="email">Insira seu email</label>
                            <input type="email" placeholder="Insira seu email..." class={Style.inputemail}/>
                            <input type="submit" value="CADASTRAR" class={Style.inputsubmit}/>
                        </form>
                    </div>
                    <div class={Style.divsocioimg}>
                        <img src={SocioImage} alt=""/>
                    </div>
                </section>
            </main>
        </>
    );
}
export default Socio;