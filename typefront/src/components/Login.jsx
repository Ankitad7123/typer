import React , {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate =useNavigate()
    const [username, setUsername] = useState('');
 
    const [password, setPassword] = useState('');

    const submit = async () =>{
        await axios.post("http://localhost:8000/login/" , {username , password})
        .then((res)=>{
            if(res.data==="logged"){
                navigate("/text")
                localStorage.setItem("user" , username)

            }
        })
        .catch((err)=>{alert(err)})

    }

  return (
    <div>
        <div className="namWeb">
   <div className='nav'>
        <div className='nav1'>
            <img src='https://us.123rf.com/450wm/artmari/artmari2103/artmari210300375/166312034-human-palm-push-on-small-keypad-on-white-table-desk-backdrop-black-line-drawn-netbook-pad-www-social.jpg?ver=6' alt='img'/>
            <h4 className='h4nav1'>TypePulse</h4>

        </div>
        <div className='nav2'>
          <div className='signNav'> <h3>login</h3> </div>
        </div>
       
        <div className='nav3'>
            <button className='btn'><a href='/'>signup</a></button>
        </div>
    </div>
   </div>

         <div className="e-username" >
            <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'/>
            <input type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder='password'/>
        </div>
        <div className="btnsign">
         
            <button className='btnnxt' style={{textAlign:"center"}} onClick={submit} >submit</button>
        </div>
        <div className="smiley">
        <div  style={{ background:username?'linear-gradient(to right, #ADDFFF 60%, white 0%)':password?'linear-gradient(to right, #ADDFFF 100%, white 0%)':'linear-gradient(to right, #ADDFFF 10%, white 0%)', textAlign:"center" , fontFamily:"monospace" , fontSize:"18px" , color:"crimson" , padding:"5px"}} className="mouth">{username?"1/2":password?"click submit":"0/2"}</div>

        </div>
    </div>
  )
}

export default Login