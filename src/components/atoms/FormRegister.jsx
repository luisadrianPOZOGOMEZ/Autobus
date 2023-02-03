import {useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import '../../assets/styles/FormRegister.css'
import Logo from '../../assets/imgs/bus.jpg'
function FormRegister() {
    const navigate = useNavigate();

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/registrar/usuario';

    const handlerClick = (e)=>{
        e.preventDefault();
        const newForm = new FormData(form.current)
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: newForm.get('nombre'),
                usuario: newForm.get('usuario'),
                correo: newForm.get('correo'),
                contrasenia: newForm.get('contrasenia')
            })
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data.message));
            navigate("/Login");
        });
    }

    return ( 
        <div className="container-register">
            <img className='logo' src={Logo} alt="lo de la empresa" />
            <form ref={form} className='form-register'>
                <div className='inputbox'>
                    <label htmlFor='name'>Name</label>
                    <input className='t'type="text" id="name" name="nombre" required/>
                </div>
                <div className='inputbox'>
                    <label htmlFor='e-mail'>E-mail</label>
                    <input className='t' type="text" id='e-mail' name='correo' required/>
                </div>
                <div className='inputbox'>
                    <label htmlFor='usuario'>UserName</label>
                    <input className='t' type="text" id='usuario' name='usuario' required/>
                </div>
                <div className='inputbox'>
                    <label htmlFor='password'>Password</label>
                    <input className='t' type="password" id='password' name='contrasenia'  required/>
                </div>

                <input className='BotonRegis' type="button" value='Registro' onClick={handlerClick} />
            </form>
        </div>
     );
}

export default FormRegister;