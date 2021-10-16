import React, {useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";


const PrivateRoute = ({children}) => {
    const { user, isAuthenticated,getAccessTokenSilently , isLoading } = useAuth0();
    
    console.log(isAuthenticated);
    console.log(isLoading)
    useEffect(() => {
if (!isAuthenticated){
        const fetchAuth0Token = async () =>{
            const accessToken = await getAccessTokenSilently({
                audience: 'api-autenticacion-petshop',
            });
            localStorage.setItem('token', accessToken);
            console.log("1.  se guarda el token")

            console.log(accessToken);
        }
        
            fetchAuth0Token();
    }
      }, [isAuthenticated,getAccessTokenSilently]);

    

    if (isLoading) return <div>Loading...</div>;
    return isAuthenticated ? <>{children}</> : <div>No estas autorizado</div> 
   
}

export default PrivateRoute
