import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <img className='Perfil' src={user.picture} alt={user.name} />
        )
    );
}

export default Profile
