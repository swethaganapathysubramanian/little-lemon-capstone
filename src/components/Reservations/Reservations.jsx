import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../NavigationMenu/Nav';
import SimpleAlert from '../common/SimpleAlert';
import ReserveForm from './ReserveForm';
import { useNavigate } from "react-router-dom";

const Reservations = () => {

  const [show, setShow] = React.useState(false)
  const navigate = useNavigate();

  React.useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  const submit = () => {
    navigate("/home");
  }

  return (
    <div>
        <Nav/>
        {show && <SimpleAlert />}
        <ReserveForm setShow={setShow} submit={submit}/>
        <Footer/> 
    </div>
  );
}

export default Reservations