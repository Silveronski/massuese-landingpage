import instagram from '../assets/images/instagram.png';
import facebook from '../assets/images/facebook.png';
import gmail from '../assets/images/gmail.png';
import whatsapp from '../assets/images/whatsapp.png';
import content from '../site-content-json/content.json';

const Contact = () => {
  return (
    <footer>
       <section className='contact-us-container'>
        <div className='contact-us-wrapper'>

          <div>
            <h5>{content.general.name}</h5>
            <hr/>
            <p>
              <span>Medical Massage</span>
              <span>Deep Tissue Massage</span>
              <span>Holistic Face Massage</span>
              <span>Natural Pharmacist</span>
              <span>Healing Processes</span>
            </p>
          </div>

          <div>
            <h5>Contact Me</h5>
            <hr/>
            <ul>
              <li>
                <a href={content.general.whatsapp} target="_blank">Whatsapp</a>
                <img src={whatsapp} alt="" 
                  onClick={() => window.open(`${content.general.whatsapp}`, "_blank")} /> 
              </li>

              <li>
                <a href={content.general.instagram} target="_blank">Instagram</a>
                <img src={instagram} alt=""
                  onClick={() => window.open(`${content.general.instagram}`, "_blank")}/>
              </li>

              <li>
                <a href={content.general.facebook} target="_blank">Facebook</a>
                <img src={facebook} alt=""
                  onClick={() => window.open(`${content.general.facebook}`, "_blank")}/>
              </li>

              <li>
                <a href={content.general.email}>Email</a>
                <img src={gmail} alt=""
                  onClick={() => window.open(`${content.general.email}`, "_blank")}/>
              </li>
            </ul>
          </div>

          <div>        
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.29973859
              9224!2d34.967665959557216!3d32.784310783722255!2m3!1f0!2f0!3f0!3m2!1i1024!2i7
              68!4f13.1!3m3!1m2!1s0x151dbb4309d76d8d%3A0xb13b7d947c5febf9!2z15DXpteY15PXmdeV158
              g16HXnteZINei15XXpNeo!5e0!3m2!1siw!2sil!4v1715006101658!5m2!1siw!2sil" 
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        </div>  
       </section>
    </footer>
  )
}

export default Contact