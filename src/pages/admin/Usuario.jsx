import React from 'react'
import { useParams } from 'react-router'

const Usuario = () => {

    let params = useParams();

    console.log("params",params)
    
    return (
        <div> Pagina del usuario {params.nombreusuario} </div>
    )
}

export default Usuario
