import React from 'react'
import './Slide.css'
import { Carousel } from 'react-bootstrap'
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.png';
const Slidershow = () => {
   
    return (
        
        <Carousel controls={false} pause={false} slide={true} id='promociones' className='fondo'>
            <Carousel.Item className='item-carousel' id='slider1' interval={3000}>
                    <img
                        className="imagen"
                        src={img1}
                        alt="Persona mirando una computadora, imagen 1 del slider"
                    />
                    <div className='promocion-slider'>
                        <h3 className='titulo-promo'>Servicio de Wireless 10 Megas </h3>
                        <div className='detalle-promo'>
                            <h3 className='parrafo-promo'><i class="fas fa-wifi"></i> Router WiFi</h3>
                            <h3 className='parrafo-promo'><i class="fas fa-check"></i> Instalación Gratis!</h3>
                            <h2 className='precio'>$2400</h2>
                            <p className='condicion'>(Primeros 6 Meses)</p>
                        </div>
                        <div className='btn-promo'>
                            <a href='/formulario' className='solicitar solicitar-item'>Solicitar</a>
                        </div>
                       
                    </div>
                    

                <Carousel.Caption>
                   
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item-carousel' id='slider2' interval={3000}>
                <img
                className="imagen"
                src={img2}
                alt="Persona sonriendo mirando a la camara y con una notebook en su escritorio"
                />
                <div className='promocion-slider'>
                        <h3 className='titulo-promo'>Servicio de Fibra Óptica 20 Megas </h3>
                        <div className='detalle-promo'>
                            <h3 className='parrafo-promo'><i class="fas fa-wifi"></i> Router WiFi</h3>
                            <h3 className='parrafo-promo'><i class="fas fa-check"></i> Primer mes bonificado!</h3>
                            <h3 className='parrafo-promo'><i class="fas fa-check"></i> Instalación Gratis!</h3>
                            <h2 className='precio'>$2500</h2>
                            <p className='condicion'>(Primeros 6 Meses)</p>
                        </div>
                        <div className='btn-promo'>
                        <a href='/formulario' className='solicitar solicitar-item'>Solicitar</a>
                        </div>
                       
                    </div>
                <Carousel.Caption>
                
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='item-carousel' id='slider3' interval={3000}>
                <img
                    className="imagen"
                src={img3}
                alt="Señora con dos niños en un sillon mirando una tablet"
                />
                <div className='promocion-slider'>
                        <h3 className='titulo-promo'>Servicio de Fibra Óptica 50 Megas </h3>
                        <div className='detalle-promo'>
                            <h3 className='parrafo-promo'><i class="fas fa-wifi"></i> Router WiFi</h3>
                            <h3 className='parrafo-promo'><i class="fas fa-check"></i> Primer mes bonificado!</h3>
                            <h3 className='parrafo-promo'><i class="fas fa-check"></i> Instalación Gratis!</h3>
                            <h2 className='precio'>$2500</h2>
                            <p className='condicion'>(Primeros 6 Meses)</p>
                        </div>
                        <div className='btn-promo'>
                        <a href='/formulario' className='solicitar solicitar-item'>Solicitar</a>
                        </div>
                       
                    </div>
                <Carousel.Caption>
              
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
          
    )
}

export default Slidershow
