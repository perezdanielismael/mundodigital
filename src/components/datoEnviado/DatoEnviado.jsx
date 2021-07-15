import React from 'react'
import './datoEnviado.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
const DatoEnviado = () => {

    React.useEffect(()=>{
        Aos.init({duration: 1000, once: true});
    },[])

    return (
        <div className='seccionEnviado'>
            <h2 className='texto-enviado'>¡Muchas gracias!</h2>
            <h5 className='sub-texto'>Tus datos fueron enviados correctamente</h5>
            <div className="check" data-aos='zoom-in'><i class="far fa-check-circle"></i></div>

            <a href="/" className='solicitar volver'>Volver a la página</a>
            
        </div>
    )
}

export default DatoEnviado
