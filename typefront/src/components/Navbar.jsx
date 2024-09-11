import React , {useEffect, useState} from 'react'
import './Navbar.css'
import axios from 'axios'
import {useNavigate , Link} from 'react-router-dom'

function Navbar() { 
  const [username , setUsername]=useState('')
  const navigate = useNavigate()



  const logout1 = async () =>{
    await axios.delete("http://localhost:8000/logout/")
    .then((res)=>{if(res.data==='out'){
      navigate("/login")

    }})
    .catch((err)=>{alert(err)})

  }
  useEffect(()=>{
    const getname = () =>{
      setUsername(localStorage.getItem('user'))
      
    }

    getname()
  } , [])

  return (
    <div className='nav'>
        <div className='nav1'>
           <Link to="/text">
           <img src='https://us.123rf.com/450wm/artmari/artmari2103/artmari210300375/166312034-human-palm-push-on-small-keypad-on-white-table-desk-backdrop-black-line-drawn-netbook-pad-www-social.jpg?ver=6' alt='img'/>
            <h4 className='h4nav1'>TypePulse</h4>
           </Link>
          
        </div>
        <div className='nav2' >
          <h4 onClick={()=>{ localStorage.setItem("state" , "quote"); navigate("/text");  window.location.reload();}}>quote</h4>
          <h4 onClick={()=>{ localStorage.setItem("state" , "long");  navigate("/text");  window.location.reload();}}>long</h4>
          <h4 onClick={()=>{ localStorage.setItem("state" , "short");navigate("/text");  window.location.reload();}}>short</h4>
          <h4 onClick={()=>{ localStorage.setItem("state" , "linear");  navigate("/text");  window.location.reload();}}>linear</h4>
          <Link to="/pf">
          <h4 style={{position:"absolute" , left:"1090px" , color:"red" , top:"-5px"}}>{username}</h4>
          
          </Link>
        </div>
        
        <div className='nav3'>
        
            
          
            <button className='btn' onClick={logout1}>logout</button>
        </div>
    </div>
  )
}

export default Navbar