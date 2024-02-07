import Style from './css/footer.module.css'
import Logo from './img/Logo-Redragon.png'

function Footer(){
    return(
        <>
    <footer>
        <div className={Style.footercontent}>
            <div className={Style.footercontacts}>
                <h1>Logo</h1>
                <p>It's all about your dreams.</p>

                <div className={Style.footersocialmedia}>
                    <a href="#" className={`${Style.footerlink} ${Style.instagram}`}>
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" className={`${Style.footerlink} ${Style.facebook}`}>
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" className={`${Style.footerlink} ${Style.whatsapp}`}>
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            
            <ul className={Style.footerlist}>
                <li>
                    <h3>Blog</h3>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Tech</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Adventures</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Music</a>
                </li>
            </ul>

            <ul className={Style.footerlist}>
                <li>
                    <h3>Products</h3>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>App</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Desktop</a>
                </li>
                <li>
                    <a href="#" className={Style.footerlink}>Cloud</a>
                </li>
            </ul>

            <div className={Style.footersubscribe}>
                <h3>Subscribe</h3>

                <p>
                    Enter your e-mail to get notified about
                    our news solutions
                </p>

                <div className={Style.inputgroup}>
                    <input type="email" id="email"/>
                    <button>
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                </div>
            </div>
        </div>

        <div className={Style.footercopyright}>
            &#169
            2023 all rights reserved
        </div>
    </footer>
        </>
    )
}
export default Footer;