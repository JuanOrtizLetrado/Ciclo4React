import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDark } from '../context/dark';
import { useUser } from '../context/user'


const Index = () => {
    const {userData} = useUser();
    const { dark } = useDark();

    useEffect(()=>{
        console.log('este es un useEfect que se ejecuta una sola vez');
        console.log('info del usuario', userData);
    },[]);
    return (
        <div className={`${dark?'fondo-oscuro':'fondo-claro'}`}>
           <p className={`${dark?'letra-blanca': 'letra-nigga'}`}> Este es el index por referencia </p>
            <Link to="/configuracion">
            Ir a Config
            </Link>
        </div>
    )
}

export default Index
