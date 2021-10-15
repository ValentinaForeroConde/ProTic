import React, {useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const PrivateRoute = ({children}) => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    useEffect(() => {
        console.log(user, isAuthenticated, isLoading)
        
      }, [user, isAuthenticated, isLoading]);

    if (isLoading) return <div>Loading...</div>;
    return isAuthenticated ? <>{children}</> : <div>No estas autorizado</div> 
   
}

export default PrivateRoute
