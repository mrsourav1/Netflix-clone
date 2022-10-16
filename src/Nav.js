
import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const changePage = ()=>{
    navigate('/profile')
  }

  const transitionNavBar = ()=>{
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }
  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return() =>window.removeEventListener('scroll',transitionNavBar);
  },[]);

  return (
    <div className= {`nav ${show && `nav_black`}`}>
        <div className='nav_contents'>

        <img 
        onClick={()=>navigate("/")}
        className='nav_logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />
        <img
        onClick= {changePage}
        className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" />

        </div>  
    </div>
  )
}

export default Nav