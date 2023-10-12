import { useContext, useEffect, useState } from 'react';
import { obtenmasApi } from  '../api';
import {InfoCard} from '../components/infoCard'
import AppContext from '../context/AppContext'


export default  function Home() {
  const context = useContext(AppContext)
  const getData = async()=>{
  const  { data } = await obtenmasApi.get('/challenge/banks' );
  localStorage.setItem("localStorageBancos", JSON.stringify(data))
  context.setNameContext(data)
 }

  useEffect(() => {
 
    let value = localStorage.getItem("localStorageBancos") || ""
    if(value !==""){
      console.log("storage")
      context.setNameContext(JSON.parse(value))
      
    } else {
      console.log("api")
      getData();
    }
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className='mb-2 text-4xl font-bold dark:text-white pb-4'>Bancos</h1>
       <InfoCard/>
    </main>
  )
}