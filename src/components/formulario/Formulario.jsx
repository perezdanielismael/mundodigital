import React from 'react'
import './formulario.css'
import {firebase} from '../../firebase'
import { withRouter } from 'react-router-dom'
const Formulario = (props) => {

    const [nombre, setNombre] = React.useState('')
    
    const [mail, setMail] = React.useState('')
    
    const [telefono, setTelefono] = React.useState('')

    const [error, setError] = React.useState(null)

    const enviarFormulario = async(e)=>{
        e.preventDefault()
       
        if(!nombre.trim()){
            setError('Por favor escriba su nombre y apellido')
            return
        }
        if(nombre.length < 6){
            setError('Nombre y apellido completo por favor')
            return
        }
        if(!mail.trim()){
            setError('Por favor escriba su correo')
            return
        }
        if(!telefono.trim()){
            setError('Por Favor escriba su numero de teléfono')
            return
        }
        if(telefono.length < 6){
            setError('El número debe tener al menos 6 carácteres')
            return
        }
        try {
            const db = firebase.firestore()
            const nuevoUsuario = {
                nombre: nombre,
                mail: mail,
                telefono: telefono
            }

            const data = await db.collection('futuros-clientes').add(nuevoUsuario)
            console.log(data)

            setNombre('')
            setMail('')
            setTelefono('')
        } catch (error) {
            console.log(error)
        }
        props.history.push('/enviado')
    }
    return (
        <div className='contenedor-formulario'>
            <h2 className='titulo-form'>Para conocer mejor el plan que elegiste</h2>
            <h5 className='subtitulo-form'>Dejanos tus datos y te contactamos a la brevedad</h5>
            <form className='formulario' onSubmit={enviarFormulario}>

                {
                    error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )
                }

                <label htmlFor="" className='mt-3 label'>Nombre y Apellido</label>
                <input type="text" 
                     className='form-control mb-2' 
                     placeholder='Nombre(s) y Apellido(s)'
                     onChange={(e)=>setNombre(e.target.value)}
                     value={nombre}
                />
                <label htmlFor="" className='mt-3 label'>Correo Electrónico</label>
                <input type="email" 
                     className='form-control mb-2' 
                     placeholder='nombre@apellido.com'
                     onChange={(e)=>setMail(e.target.value)}
                     value={mail}
                />
                <label htmlFor="" className='mt-3 label'>Teléfono</label>
                <input type="number" 
                     className='form-control mb-2' 
                     placeholder='Ej: 280426784 (sin 0 y sin 15)'
                     onChange={(e)=>setTelefono(e.target.value)}
                     value={telefono}
                />
                <button className="enviar solicitar">Enviar</button>
            </form>
        </div>
    )
}

export default withRouter(Formulario) 
