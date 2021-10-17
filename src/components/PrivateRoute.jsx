import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';
import * as server from '../pages/server';
import { useUser } from 'context/UserContext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently, isLoading  } = useAuth0();
  const {setUserData}= useUser();

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const accessToken = await getAccessTokenSilently({
          audience: 'api-autentificacion-protic',
        });
        localStorage.setItem('token', accessToken);
        console.log(accessToken)
      } catch (e) {
        console.log(e.message);
      }
      try{
        const res = await server.getUserData();
        setUserData(res.data);
        console.log(res)
      }catch(error){
          console.log(error)
      }
    };
    if (isAuthenticated) {
      getUserMetadata();
    }
  }, [isAuthenticated, getAccessTokenSilently, setUserData]);



  if (isLoading) {
    return  <ReactLoading  type="cylon" color="#023047" height={300} width={300} />
  }

  if(! isAuthenticated ){
    return loginWithRedirect();
  }

  return <> {children} </>

};

export default PrivateRoute;