import { useRef } from 'react';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";
import '../../assets/styles/FormLogin.css'
import Logo from '../../assets/imgs/bus.jpg'

function FormLogin() {
    const navigate = useNavigate();

    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/iniciar';
    
    const handlerClick = (e)=>{
        e.preventDefault();
        const loginForm = new FormData(form.current)
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: loginForm.get('usuario'),
                contrasenia: loginForm.get('contrasenia')
            })
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            if(data.status === false){
                alert(JSON.stringify(data.message));
            }
            else{
                navigate("/Bus");
            } 
        });
    }

    return ( 
        <div className='container-login'>
            <img className='Logo' src={Logo} alt="LOGO DE LA EMPRESA" />
            <form className='form-login'>
                <div className='username'>
                    <label htmlFor="user">UserName</label>
                    <input className='text' type="text" id="user" name="usuario" required/>
                </div>
                <div className='password'>
                    <label htmlFor='password'>Password</label>
                    <input className='text' type="password" id='password' name='contrasenia' required/>
                </div>

                {/* <button>Iniciar Sesion</button> */}
                <input className='boton' type='button' value='Iniciar Sesión' onClick={handlerClick}/>
                <Link className='link' to="/Register">No tienes cuenta, registrate</Link>
            </form>
        </div>
     );
}

export default FormLogin;