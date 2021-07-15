import React from 'react'
import velocimetro from '../../assets/velocimetro1.png';
import plan from '../../assets/plan1.png';
import ahorro from '../../assets/Ahorro1.png';
import soporte from '../../assets/soporte1.png';
import './Servicios.css'
const Servicios = () => {
    return (
        <div className='contenedor-general parallax' id='servicios'>
            <div className="titulo-servicios">
                <h2 className='texto-titulo'>Nuestro diferencial de cada día</h2>
            </div>
            <div className='contenedor-servicios'>
                <div className='bloque'>
                    <div className="contenedor-img">
                        <img className='img-servicio' src={velocimetro} alt="" />
                    </div>
                    <div className="texto-servicio">
                        <p>Conexión Ultrarrápida</p>
                    </div>
                </div>
                <div className='bloque'>
                    <div className="contenedor-img">
                        <img className='img-servicio' src={plan} alt="" />
                    </div>
                    <div className="texto-servicio">
                        <p>Planes de tarifas flexibles</p>
                    </div>
                </div>
                <div className='bloque'>
                    <div className="contenedor-img">
                        <img className='img-servicio' src={ahorro} alt="" />
                    </div>
                    <div className="texto-servicio">
                        <p>Instalación bonificada al 50%</p>
                    </div>
                </div>
                <div className='bloque'>
                    <div className="contenedor-img">
                        <img className='img-servicio' src={soporte} alt="" />
                    </div>
                    <div className="texto-servicio">
                        <p>Soporte técnico 24/7</p>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Servicios
