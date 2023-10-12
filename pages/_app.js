import '../styles/globals.css'
import { useState,  useContext } from 'react'
import AppContext from '../context/AppContext'

function MyApp({ Component, pageProps }) {

  const [ nameContext ,setNameContext ] = useState([]);
  
  return ( <AppContext.Provider value={ {nameContext ,setNameContext}} >
                  <Component {...pageProps} /> 
          </AppContext.Provider> )
}

export default MyApp
