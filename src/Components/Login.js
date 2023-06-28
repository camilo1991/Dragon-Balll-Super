import React from 'react';
import {useState} from 'react';

export default function Login({onLogin}) {
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [error, setError] = useState('');

    const handleChangeNombreUsuario = (event) => {
        setNombreUsuario(event.target.value);
    };

    const handleChangeContraseña = (event) => {
        setContraseña(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(nombreUsuario === 'Andrey' && contraseña === '123456789'){
            onLogin();
        }else{
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return(
        <div className='login'>
            <p className='mensaje-error'>{error}</p>
            <form onSubmit={handleSubmit}>
            <label>
                    
                    <input placeholder='User' type='text' value={nombreUsuario} onChange={handleChangeNombreUsuario}/>
                    </label>  
                <label>
                    <input placeholder='password' type='password' value={contraseña} onChange={handleChangeContraseña} />
                </label>
                <button type='submit'>Sing in</button>
            </form>
        </div>
    );

}