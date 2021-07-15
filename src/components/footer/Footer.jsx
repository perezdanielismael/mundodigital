import React from 'react'
import './footer.css'
/*import MessengerCustomerChat from 'react-messenger-customer-chat';*/

const Footer = () => {
    return (
        <footer className='contenedor-footer' id='footer'>
            <div className="direcciones">
                <div className="ciudad">
                    <h5 className='nombre-ciudad'>Trelew</h5>
                    <h6 className='text-footer'>Atención al Cliente <br /> 280 462-7900</h6>
                    <h6 className='text-footer'>Av Fontana 455<br /> 9100 Trelew - Chubut <br /> Argentina</h6>
                    <h6 className='text-footer'>info@uvmundodigital.com </h6>
                </div>
                <div className="ciudad">
                    <h5 className='nombre-ciudad'>Rawson</h5>
                    <h6 className='text-footer'>Atención al Cliente <br /> 280 472-7686</h6>
                    <h6 className='text-footer'>Av. Juan Vucetich 742<br /> 9103 Rawson - Chubut<br /> Argentina</h6>
                    <h6 className='text-footer'>info@uvmundodigital.com </h6>
                </div>
                <div className="redes">
                    <h5 className='seguinos nombre-ciudad'>Seguínos en las redes</h5>
                    <div className="iconos">
                       <a href="https://www.facebook.com/UvMundoDigital" rel="noreferrer" target='_blank'><i class="fab fa-facebook" alt='logo de facebook'></i></a> 
                       <a href="https://www.instagram.com/uvmundodigital/" rel="noreferrer" target='_blank'><i class="fab fa-instagram" alt='logo de instagram'></i></a> 
                    </div>
                    <div className='seccion-solicitar'>
                    <a href='/formulario' className='solicitar oscuro'>Quiero el servicio</a>
                    </div>
                </div>
            </div>
            
            <div className="derechos">
                    <p>Copyright © 2021. Todos los derechos reservados.</p>
            </div>
            {/*<MessengerCustomerChat
                pageId="2472068066146203"
                appId="607329473570652"
            />*/}
        </footer>
    )
}

export default Footer
