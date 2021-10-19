import React, { useEffect, useState } from "react";
import Aside from "components/Aside";
import Footer from "components/Footer";
import SideResponsive from "components/SideResponsive";
import * as server from '../pages/server';
import { useUser } from 'context/UserContext';
import { useAuth0 } from '@auth0/auth0-react';
import ReactLoading from 'react-loading';

const PrivateLayout = ({ children }) => {
  const { isAuthenticated, loginWithRedirect, getAccessTokenSilently, isLoading  } = useAuth0();
  const [loadingUserInformation, setLoadingUserInformation] = useState(false);
  const {setUserData}= useUser();

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        setLoadingUserInformation(true)
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
        setLoadingUserInformation(false)
        console.log(res)
      }catch(error){
          console.log(error)
          setLoadingUserInformation(false)
      }
    };
    if (isAuthenticated) {
      getUserMetadata();
    }
  }, [isAuthenticated, getAccessTokenSilently, setUserData]);

  if (isLoading || loadingUserInformation) {
    return  <ReactLoading  type="cylon" color="#023047" height={300} width={300} />
  }

  if(! isAuthenticated ){
    return loginWithRedirect();
  }

  return (
      <div className="layout">
        <Aside/>
        <SideResponsive />
        <main className="contenido"> {children}</main>
        <Footer />
      </div>

  );
};

export default PrivateLayout;
