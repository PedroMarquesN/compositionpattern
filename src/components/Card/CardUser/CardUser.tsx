import React, { FC } from 'react'
import { CardUser, PerfilImg } from './style'


const CardUserContainer: FC = () => {
    return (
        <CardUser>
            <PerfilImg>
                <img src="https://avatars.githubusercontent.com/u/70394040?v=4" alt="Perfil" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
            </PerfilImg>
            <div>
                <label>Usuário:</label>
                <p>MarquesDev</p>
            </div>
            <div>
                <label>Perfil de Acesso:</label>
                <p>Administrador</p>
            </div>
        </CardUser>
    )
}

export default CardUserContainer