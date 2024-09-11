import React , {useState} from 'react'
import './Signup.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'


function Singnup() {
    const navigate = useNavigate()
    const [counter , setCounter] = useState(0)
    const [flname , setFlname] = useState(true)
    const [euser , setEuser] = useState(false)
    const [passwordiv, setPasswordiv] = useState(false)
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass1, setPass1] = useState('');
    const [pass2, setPass2] = useState(''); 

   
    const submit = async ()=>{
  
            await axios.post("http://localhost:8000/user/" , { username , fname , lname ,  email , pass1 , pass2})
            .then((res)=>{if(res.data==="done"){
                alert("you are logged in")
                navigate('/text')

            }
            
        })
        .catch((error)=>{
            alert(error)
            console.log(error)
        })
      
    }
    const next = () =>{
       
        if(counter===2){
             
             setCounter(0)
             setFlname(true)
             setEuser(false)
             setPasswordiv(false)
        }
        else{
            setCounter(counter+1)
            if(counter===1){
                setFlname(false)
                setEuser(false)
                setPasswordiv(true)

            }
            else{
                setFlname(false)
             setEuser(true)
             setPasswordiv(false)
            }

        }
        console.log(counter)
    }

  return (
    <div>
        
       <div className="signup">
        
   <div className="namWeb">
   <div className='nav'>
        <div className='nav1'>
            <img src='https://us.123rf.com/450wm/artmari/artmari2103/artmari210300375/166312034-human-palm-push-on-small-keypad-on-white-table-desk-backdrop-black-line-drawn-netbook-pad-www-social.jpg?ver=6' alt='img'/>
            <h4 className='h4nav1'>TypePulse</h4>

        </div>
        <div className='nav2'>
          <div className='signNav'> <h3>create your account</h3> </div>
        </div>
       
        <div className='nav3'>
            <button className='btn'><a href='/login'>Login</a></button>
        </div>
    </div>
   </div>

    
    <div className="f-lname" style={{display:flname?"flex":"none"}}>
  
            <input type='text' value={fname} onChange={(e)=>{setFname(e.target.value)}} placeholder='First-Name'/>
            <input type='text' value={lname} onChange={(e)=>{setLname(e.target.value)}} placeholder='Last-Name'/>
        </div>
        <div className="e-username" style={{display:euser?"flex":"none"}}>
            <input type='text' value={username} onChange={(e)=>{setUsername(e.target.value)}} placeholder='username'/>
            <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email'/>
        </div>
        <div className="password" style={{display:passwordiv?"flex":"none"}}>
         <input type='password' value={pass1} onChange={(e)=>{setPass1(e.target.value)}} placeholder='password'/>
         <input type='password' value={pass2} onChange={(e)=>{setPass2(e.target.value)}} placeholder='confirm password'/>
        </div>
        <div className="btnsign">
            <button className='btnnxt'  disabled={counter===0?(fname===""&&lname===""?true:false):counter===1?(username===""&&email===""?true:false):counter===2?false:false} style={{display:counter===0?"flex":counter===1?"flex":"none" , textAlign:"center"}}onClick={next}>next</button>
            <button className='btnnxt' style={{display:counter==2?"flex":"none" , textAlign:"center"}} onClick={submit}>submit</button>
        </div>
        <div className="smiley">
        <div  style={{ background:counter==0?'linear-gradient(to right, #ADDFFF 30%, white 0%)':counter===1?  'linear-gradient(to right, #ADDFFF 60%, white 0%)': 'linear-gradient(to right, #ADDFFF 100%, white 0%)' , textAlign:"center" , fontFamily:"monospace" , fontSize:"18px" , color:"crimson" , padding:"5px"}} className="mouth">{counter===0?"1/3":counter===1?"2/3":""} completed</div>

        </div>
    </div>
       </div>

    
  )
}

export default Singnup