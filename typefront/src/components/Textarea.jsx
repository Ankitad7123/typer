import { useState  , useEffect , useRef } from "react"
import React  from 'react'
import Navbar from "./Navbar"
import './Textarea.css'
import { LineChart , Line , ResponsiveContainer , XAxis  , YAxis  , CartesianGrid , Tooltip , Legend} from 'recharts';
import axios from "axios";

function Textarea() {
  const buttonRef = useRef(null);
    const [nwords, setNwords] = useState(0)
    const [nwords1, setNwords1] = useState(0)
    const [textarray, setTextarray] = useState([])
    const [textarray1, setTextarray1] = useState([])
    const [truthtimer , setTruthtimer] = useState(false)
    const [quote, setQuote] = useState();
    const [api , setApi] = useState('')
    const [userp , setUserp] = useState(0)
    const [accuracy, setAccuracy] = useState(0);
    const [wpm, setWPM] = useState(0);
    const [nofC, setNofC] = useState(0);
    const [user, setUser] = useState(0);

    let [incorrect , setIncorrect] = useState(0)
    const [username , setUsername]  = useState('')

    const [tarea , setTarea] = useState('')
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hours0, setHours0] = useState(0);
    const [minutes0, setMinutes0] = useState(0);
    const [seconds0, setSeconds0] = useState(0);
   

    // const data = {
    //     labels: ['Number of Characters', 'Number of Words',  'WPM', 'Incorrect Words', 'Accuracy (%)'],
    //     datasets: [
    //       {
    //         label: 'Metrics',
    //         backgroundColor: 'rgba(75,192,192,0.2)',
    //         borderColor: 'rgba(75,192,192,1)',
    //         borderWidth: 1,
    //         hoverBackgroundColor: 'rgba(75,192,192,0.4)',
    //         hoverBorderColor: 'rgba(75,192,192,1)',
    //         data: [
    //             { x: 'Number of Characters', y: nwords },
    //             { x: 'Number of Words', y: nwords1 },
    //             { x: 'WPM', y: Math.floor((nwords1 * 60) / (seconds - seconds0)) },
    //             { x: 'Incorrect Words', y: incorrect },
    //             { x: 'Accuracy (%)', y: Math.floor(100 - ((incorrect) / tarea.length) * 100) }
    //           ],
    //         },
    //       ],
    //     };

    //     const options = {
    //         scales: {
    //           x: {
    //             type: 'linear',
    //           },
    //           y: {
    //             beginAtZero: true,
    //           },
    //         },
    //         plugins: {
    //           legend: {
    //             display: true,
    //             position: 'top',
    //           },
    //         },
    //       };

    const data = [
        { x: 'number of charcter', y: nwords },
        { x: 'Number of words', y: nwords1 },
        { x:'wpm', y:Math.floor((nwords1 * 60) / (seconds - seconds0))},
        { x: 'Incorrect Words', y: incorrect },
        { x: 'accuracy', y: Math.floor(100 - ((incorrect) / tarea.length) * 100) }
      ];
      
      
    //   const options = {
    //     scales: {
    //       x: {
    //         beginAtZero: true,
    //       },
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //     plugins: {
    //       legend: {
    //         display: true,
    //         position: 'top',
    //       },
    //     },
    //   };

    
      
    useEffect(()=>{
      const user = () => {
        setUsername(localStorage.getItem("user"));
        

        
    }

    user();
      // const fetch1 = async  () =>{
      //   try {
      //     const res = await axios.post("http://localhost:8000/fd/", { username });
      //       if (Array.isArray(res.data) && res.data.length >= 0) {
      //         setUserp(res.data[0].user); 
      //         // Set userp to the user property of the first object in the array
      //      console.log("this is"  ,res.data[0].user)
            
           
      //       }
      // } catch (error) {
      //     alert(error);
      // }
       
      // }
      // fetch1()
     
      const quote = async () =>{
        try {
        if(localStorage.getItem("state")==="quote"){
          const res = await axios.get(`http://localhost:8000/qt/`)
          let id = Math.floor(Math.random() * 10) + 1;
          setQuote(res.data[id])
          
        }
        else if(localStorage.getItem("state")==="long"){
          const res = await axios.get(`http://localhost:8000/lg/`)
          let id = Math.floor(Math.random() * 10) + 1;
          setQuote(res.data[id])
     
          
        }
        else if(localStorage.getItem("state")==="short"){
          const res = await axios.get(`http://localhost:8000/sh/`)
        let id = Math.floor(Math.random() * 10) + 1;
        setQuote(res.data[id])
        }
        else{
          const res = await axios.get(`http://localhost:8000/ln/`)
        let id = Math.floor(Math.random() * 10) + 1;
        setQuote(res.data[id])
   
        }
      
       
        console.log(quote)
        
       } catch (error) {
        console.log(error)
        
       }
      }
   
      // apiset()
      quote()
    } , [])

    const startTimer = async () =>{
        if(seconds0===0 && minutes0===0 && hours0===0){
                const date = new Date()
                setHours0(date.getHours()+5)
                setMinutes0(date.getMinutes()+29)
                setSeconds0(date.getSeconds());}

        else{

        }

    }



    const submit = ()=> {

    //   const newAccuracy = Math.floor(100-((incorrect)/tarea.length)*100);
    //   const totalSeconds = (minutes - minutes0) * 60 + (seconds - seconds0);
    //   const wordsPerMinute = Math.floor((nwords1 * 60) / totalSeconds);
  
    //   setAccuracy(newAccuracy);
    //   setWPM(wordsPerMinute);
        
    //  setNofC( nwords1)
    //  setUser( userp)
      
    // setTextarray([])
    // setTextarray1([])
    // setHours(0)
    //   setMinutes(0)
    //   setSeconds(0);

   
        
    setTruthtimer(true)
    let itr = ''
      for(let i = 0; i<=tarea.length-1; i++){
        if(tarea[i]===' '){

        }
        else{
            textarray.push(tarea[i])
        }
      }
      for(let j = 0; j<tarea.length; j++){
        if(tarea[j] === ' '){
            textarray1.push(itr)
            itr = ''

        }else 
       {
            itr += tarea[j]
            if(j == tarea.length-1){
                textarray1.push(itr)
                
    
            }

        }
      }
      const givequote = quote && typeof quote === 'string' ? quote.split(' ') : [];

      const typedquote = tarea.split(' ')
      let count = 0
      incorrect = 1

      if (givequote.length === typedquote.length) {
        for (let count = 0; count < textarray.length; count++) {
          // Check if elements are not undefined before comparing
          if (
            givequote[count] &&
            typedquote[count] &&
            givequote[count].toLowerCase() !== typedquote[count].toLowerCase()
          ) {
            setIncorrect(incorrect++);
            console.log(typedquote[count]);
            console.log(incorrect);
          }
        }
      } 
      

      const date = new Date()
      setHours(date.getHours()+5)
      setMinutes(date.getMinutes()+29)
      setSeconds(date.getSeconds());
      // const typedTimeInSeconds = (hours - hours0) * 3600 + (minutes - minutes0) * 60 + (seconds - seconds0);
   
    // const accuracyValue = Math.floor(100-((incorrect)/tarea.length)*100)
    
    // const wpmValue =Math.floor((nwords1*60)/(seconds-seconds0));
    // setAccuracy(accuracyValue);
    // setWPM(wpmValue);
    // // setNofC(typedWords);
    // setUser(userp);
    

  

      setNwords(textarray.length)
      setNwords1(textarray1.length)
      console.log(textarray)
      console.log(textarray1)
      console.log(givequote)
      console.log(typedquote)
       
      // let accuracy = Math.floor(100 - ((incorrect) / tarea.length) * 100)
      // let wpm = Math.floor((nwords1 * 60) / (seconds - seconds0))
      // let nofC = nwords1
      // let user = userp
    
  //  const typedWords = textarray1.length;
   
    console.log(accuracy)
    console.log(wpm)

    // // Post data to the server
    // try {
    //     await axios.post("http://localhost:8000/td/", { accuracy: accuracy, wpm: wpm, nofC: textarray1.length, user: userp });
       

    // } catch (error) {
    //     console.log(error);
    // }
    // {   accuracy, wpm , nofC , user}


      // setAccuracy(100);
      // setWPM(32);
      const newAccuracy = Math.floor(100-((incorrect)/tarea.length)*100);
    const totalSeconds = (minutes - minutes0) * 60 + (seconds - seconds0);
    const wordsPerMinute = Math.floor((nwords1 * 60) / totalSeconds);

    setAccuracy(newAccuracy);
    setWPM(wordsPerMinute);
      
   setNofC( nwords1)
   setUser(username)

   
    
    
    }
    
   const tryagain =  () =>{
    
     

   

    setTruthtimer(false); setTarea(""); setNwords(0); setNwords1(0);  setHours(0)
    setMinutes(0)
    setSeconds(0);  setHours0(0);
    setMinutes0(0)
    setSeconds0(0); setIncorrect(0)
    setTextarray([])
    setTextarray1([])
    setHours(0)
      setMinutes(0)
      setSeconds(0);
    setAccuracy(0);
      setWPM(0);
         
      setNofC( 0)
      setUser( 0)
    
   }
   const submit2 = async () =>{


   
    const newAccuracy = Math.floor(100-((incorrect)/tarea.length)*100);
    const totalSeconds = (minutes - minutes0) * 60 + (seconds - seconds0);
    const wordsPerMinute = Math.floor((nwords1 * 60) / totalSeconds);

    setAccuracy(newAccuracy);
    setWPM(wordsPerMinute);
      
   setNofC( nwords1)
   setUser(username)

   console.log(accuracy , wpm , nofC , username)

   
    if(nofC===0||wpm===0){
      buttonRef.current.click();
      const newAccuracy = Math.floor(100-((incorrect)/tarea.length)*100);
      const totalSeconds = (minutes - minutes0) * 60 + (seconds - seconds0);
      const wordsPerMinute = Math.floor((nwords1 * 60) / totalSeconds);
  
      setAccuracy(newAccuracy);
      setWPM(wordsPerMinute);
        
     setNofC( nwords1)
     setUser(username)
     
    
      
    }
    else{
      try {
      
        
        await axios.post("http://localhost:8000/td/" , {   accuracy, wpm , nofC:nwords1 , username})
        
  
        
      } catch (error) {
        
        alert(error)
      }
    }
   }

  return (
    <div >
        <div>
            <Navbar/>
        </div>
        
        <div className="text1">
        <div>
        <h3 style={{fontFamily:"monospace" , margin:"40px"}}>  {quote?.quote
      ? quote?.quote
      : quote?.linear
      ? quote?.linear
      : quote?.short
      ? quote?.short
      : quote?.long}</h3>
        <textarea disabled={truthtimer}  onInput={startTimer} value={tarea} onChange={(e)=>{setTarea(e.target.value)}} style={{display:truthtimer?"none":"flex", backgroundImage:"url(https://us.123rf.com/450wm/artmari/artmari2101/artmari210103744/162205406-lcd-macbook-keypad-on-white-table-desk-backdrop-black-line-drawn-led-netbook-www-social-data-key.jpg?ver=6)", backgroundRepeat:"no-repeat",backgroundPosition:"center" , mixBlendMode:"darken" ,backgroundBlendMode:"darken", backgroundSize:"200px",  borderRadius:"8px" ,  width:"90vw" , height:"30vh" ,fontFamily:"monospace" , fontSize:"22px", alignItems:"center" , margin:"50px" , padding:"20px" , border:"0.5px solid grey" , backgroundPositionY:"147px" , backgroundPositionX:"1010px"}}> </textarea>
        <div style={{display:truthtimer?"flex":"none" , marginTop:"20px"}}>
        <ResponsiveContainer width="80%" aspect={3} style={{ margin:"95px" , transition:"all 2s ease" }} >
        <LineChart data={data} animationBegin={2000}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical horizontal={false} verticalFill={['#555555', '#444444']} fillOpacity={0.2}/>
            <Tooltip />
            <Legend />
            <XAxis dataKey="x"/>
            <YAxis dataKey="y" style={{color:"black" , fontFamily:"monospace" , backgroundColor:"wheat"}}/>
            
             <Line type="monotone" dataKey="y"  stroke="crimson"    />
          
           
          
        </LineChart>
       </ResponsiveContainer>
        </div>
        <input  className="btn"  onClick={submit} style={{margin:"50px" ,  display:truthtimer?"none":"flex", justifyContent:"center" ,textAlign:"center"  ,marginLeft:"590px"  , textAlign:"center" , justifyItems:"center" , padding:"10px" , border:"1px solid black"}} type="submit" name="submit"  />
        <button  className="btn" onClick={tryagain} style={{margin:"50px" , width:"10vw", display:truthtimer?"flex":"none", justifyContent:"center" ,textAlign:"center"  ,marginLeft:"580px"}} type="submit" name="submit"  >try again</button>
        <button  ref={buttonRef} className="btn" onClick={submit2} style={{margin:"50px" , width:"10vw", display:truthtimer?"flex":"none", justifyContent:"center" ,textAlign:"center"  ,marginLeft:"580px"}} type="submit" name="submit"  >save the data</button>
        
       </div> 
       <div className="text6">
       <div  className="text3"><h3>number of character <h1 style={{marginLeft:"150px" , color:"lightblue"}}> {nwords}</h1> </h3>
        <h3>number of words <h1 style={{marginLeft:"150px" , color:"lightblue"}}> {nwords1}</h1></h3></div>
      <div className="text4">
      <h3 style={{display:truthtimer?"flex":"none"}}>Time<h1 style={{marginLeft:"110px" , color:"crimson"}}>{minutes-minutes0===0?`${minutes-minutes0}:${seconds-seconds0}`:`0:${60*(minutes-minutes0 )+(seconds-seconds0)}`}</h1> </h3>
        <h3 style={{display:truthtimer?"flex":"none"}}>WPM<h1  id="wpm" style={{color:"crimson" , marginLeft:"50px"}}>{minutes-minutes0===0?`${Math.floor((nwords1*60)/(seconds-seconds0))}`:`${Math.floor((nwords1*60)/(60*(minutes-minutes0)+(seconds-seconds0)))}`}  </h1></h3>
           </div>
           <div className="text5">
           <h3>inccorect words :<h1 style={{marginLeft:"150px" , color:"lightblue"}}>{incorrect}</h1></h3>
        <h3>accuracy : <h1 id="accuracy" style={{marginLeft:"150px" , color:"lightblue"}}>{Math.floor(100-((incorrect)/tarea.length)*100)}%</h1></h3>
           </div>
       </div>
       
           
        </div>
        {/* <div style={{display:truthtimer?"flex":"none" , marginTop:"20px"}}>
        <ResponsiveContainer width="70%" aspect={3} style={{ margin:"60px" }} >
        <LineChart data={data}>
            <CartesianGrid/>
            <XAxis dataKey="x"/>
            <YAxis dataKey="y" style={{color:"black" , fontFamily:"monospace" , backgroundColor:"wheat"}}/>
            <Line dataKey="x"/>
            <Line dataKey="y" />
          
        </LineChart>
       </ResponsiveContainer>
        </div> */}
        
    </div>
  )
}

export default Textarea