import { useUser } from 'context/UserContext';
import React from 'react'

const PrivateComponent = ({roleList, children}) => {
    const {userData}= useUser();
    if(userData.Rol !== undefined){
        if(roleList.includes(userData.Rol.label)){
            return children;
        }
    }
    
    return <></>;
};



export default PrivateComponent
