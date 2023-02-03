import { useRef } from 'react';
import '../../assets/styles/FormBus.css'
import Logo from '../../assets/imgs/bus.jpg'

function FormBus() {
    const form = useRef()
    const endpoint = 'http://34.225.239.102/api/autobus/register';
    let aleatorio = String(Math.floor(Math.random() * (1000 - 100) + 100));

    const handlerClick = (e)=>{
        e.preventDefault();
        const busForm = new FormData(form.current)
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                clave: busForm.get('clave'),
                placa: busForm.get('placa'),
                numasientos: busForm.get('numasientos'),
                fecha: busForm.get('fecha'),
                tipo: busForm.get('tipo'),
                nombre: busForm.get('nombre'),
                licencia: aleatorio
            })
        }
        
        fetch(endpoint, options) 
        .then(response => response.json())
        .then(data => {
            alert(JSON.stringify(data.message));
        });
    }

    return ( 
        <div className="container-Bus">
            <img className='Logo' src={Logo} alt="LOGO DE LA EMPRESA" />
            <form ref={form} className='FormBus'>
                <div className='padre-1'>
                    <div className='one-div'>
                        <label htmlFor=''>Clave autobus</label>
                        <input className='textos'type="text" name='clave' required/>
                    </div>
                    <div className='two-div'>
                        <label htmlFor=''>Placa autobus</label>
                        <input className='textos'type="text" name='placa' required/>
                    </div>
                </div>
                <div className='padre-2'>
                    <div className='tree-div'>
                        <label htmlFor=''>Numero de asiento</label>
                        <input className='textos'type="number" name="numasientos" required/>
                    </div>
                    <div className='four-div'>
                        <label htmlFor='fecha'>Fecha de alta</label>
                        <input className='textos' type="date" id='fecha' name='fecha'  required/>
                    </div>
                </div>

                <div className='section-data'>
                    <label htmlFor='bus'>Tipo</label>
                    <select id='bus' name='tipo' required>
                        <option value='turismo' >Turismo</option>
                        <option value='lujo'>Lujo</option>
                    </select>

                    <label htmlFor=''>Nombre del chofer</label>
                    <input className='textos' type="text" name='nombre' required/>

                    <label htmlFor=''>Numero de Licencia</label>
                    <input className='textos' type="text" name='licencia' placeholder={aleatorio} required/>
                </div>
                <input type='button' value='Alta de Autobus' onClick={handlerClick} className='boton-alta' />
            </form>
        </div>
     );
}

export default FormBus;