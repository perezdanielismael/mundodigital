import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import './Inicio.css';
import persona from '../../assets/persona.png'
const Inicio = () => {
    useEffect(()=>{
        Aos.init({duration: 2000, once: true});
    },[])
   
    return (
        <div className='contenedor parallax' id='inicio'>     
            <div className='contenedor-inicio'>
                <div className='section-left' data-aos='fade-right'>
                    <h1 className="titulo"> UV Mundo Digital</h1>
                    <h5 className="texto-intro">Brindamos el mejor servicio de fibra óptica con velocidades de conexión realmente altas para que puedas disfrutar de una experiencia de navegación única</h5>
                    <div className="botones">
                        <a href="/formulario" className="solicitar">Solicitar</a>        
                        <a href="#promociones" className='promocion'> Promociones</a>
                    </div>      
                </div>
                <div className='section-right'>
                    <img className='img-persona' 
                        src={persona} 
                        alt="Persona mirando un teléfono en la mano, escuchando algo con auriculares" />
                </div>
            </div>
            
        </div>
    )
}

export default Inicio
