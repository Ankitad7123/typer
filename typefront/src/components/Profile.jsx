import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import './Profile.css'
import axios from 'axios'
import { LineChart , Line , ResponsiveContainer , XAxis  , YAxis  , CartesianGrid , Tooltip , Legend , PieChart  ,Pie , Cell , Bar ,BarChart , RadialBar, RadialBarChart,} from 'recharts';


function Profile() {
    const [username , setUsername] = useState('')
    const [userp , setUserp] = useState([])
    const [userpf , setUserpf] = useState([])
    const [avgAccuracy, setAvgAccuracy] = useState(0);
    const [avgWPM, setAvgWPM] = useState(0);
    const [avgNofC, setAvgNofC] = useState(0);
    const [truth , setTruth] = useState(false)
    
    useEffect(() => {
        const user = () => {
            setUsername(localStorage.getItem("user"));
        }

        user();
    }, []);

    
        const fetchData = async () => {
            try {
                const res = await axios.post("http://localhost:8000/fd/", { username });
                setUserp(res.data);
                setTruth(true)
            } catch (error) {
                alert(error);
            }

            try{
                const res2 = await axios.post('http://localhost:8000/fuser/' , {username})
            setUserpf(res2.data)
            console.log(userpf)

            }
            catch(error){
                alert(error)

            }
        }




    useEffect(() => {
        let totalAccuracy = 0;
        let totalWPM = 0;
        let totalNofC = 0;

        userp.forEach(item => {
            totalAccuracy += parseFloat(item.accuracy);
            totalWPM += parseFloat(item.wpm);
            totalNofC += item.nofC;
        });

        const totalItems = userp.length;

        setAvgAccuracy(totalAccuracy / totalItems);
        setAvgWPM(totalWPM / totalItems);
        setAvgNofC(totalNofC / totalItems);

        console.log(avgAccuracy)
        console.log(avgWPM)
        console.log(avgNofC)

    }, [userp]); // Calculate averages when userp changes\
    const data3 = [
        { name: 'Accuracy', value: avgAccuracy },
        { name: 'WPM', value: avgWPM },
        { name: 'Number of Characters', value: avgNofC },
      ];

    const data = [
        {name:"YourAccuracy" , value:avgAccuracy},
        {name:"lowestAccuracy" , value:80},
        {name:"highestAccuracy" , value:100}
        
    ]
    
    const data1 = [
        {name:"YourWPM" , value:avgWPM},
        {name:"AvgWPM" , value:60}
       
       
    ]
    const data2 = [
        {name:"Your-NofC" , value:avgNofC},
        {name:"highNofC" , value:4000},
        {name:"lowNofC" , value:20}
    ]

  return (
    <div className='pfp'>
       
            <Navbar/>
            <h3 style={{position:"absolute" , left:"589px" , zIndex:"3"}}>Profile Page</h3>
          <div className='pf1'>
          
          <img src='https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg' alt='img1'/>
          <input disabled={true}  className='intU' type='search' placeholder={"hello " + username}/>
          <img  className='simg' src='https://www.computerhope.com/jargon/s/search-icon.png' alt='img'/>
          <button className='btn' onClick={fetchData} >{truth?"Suggestion":"Statstics"}</button>
          </div>
          <div className="profile" style={{ position:"absolute" , left:"20px"}}>
                 <h4>first-name:  <input disabled={true}  className='intU1' type='search' placeholder={userpf.first_name?userpf.first_name:"none"}/></h4>
                 <h4>last-name:  <input disabled={true}  className='intU1' type='search' placeholder={userpf.last_name?userpf.last_name:"none"}/></h4>
                 <h4>email:    <input disabled={true}  className='intU1' type='search' placeholder={userpf.email}/></h4>
                
          </div>
       
          <div className="profile" style={{ position:"absolute" , left:truth?"840px":"1290px" , alignContent:"center" , overflow:"scroll" , transition:"all ease in 2s"}}>
          <h4>
        Dear {username},
      </h4>
      {avgAccuracy >= 95 && avgWPM >= 45 ? (
        <p>
          Your typing skills are exceptional!
        </p>
      ) : (
        <div>
          <p>
            Your typing skills have room for improvement. Consider practicing more to enhance your speed and accuracy.
          </p>
          {avgAccuracy < 95 && (
            <p>
              Focus on improving your accuracy.
            </p>
          )}
          {avgWPM < 45 && (
            <p>
              Aim to increase your typing speed.
            </p>
          )}
          {avgNofC < 50 && (
            <p>
              Additionally, try increasing the number of characters you type to improve efficiency.
            </p>
          )}
        </div>
      )}
      <p>
        Keep practicing and you'll surely see improvement!
      </p>
                
          </div>

          
          <div className='graphs'>
            <div className='graphs1' >
            <ResponsiveContainer width="100%" aspect={3} style={{transition:"all 2s ease" }} >
        <LineChart data={data3} animationBegin={3000}>
            <CartesianGrid stroke="green" strokeDasharray="5" vertical horizontal={false} verticalFill={['lightgrey', 'lightblue']} fillOpacity={0.8}/>
            <Tooltip />
            <Legend />
            <XAxis dataKey="name" color='black'/>
            <YAxis dataKey="value" />
            
            <Line type="monotone" dataKey="value" stroke="crimson" activeDot={{ r: 8 }} />
          
           
          
        </LineChart>
       </ResponsiveContainer>
       <div style={{fontFamily:"revert" , color:"black" , right:"290px" , position:"absolute" , top:"250px"}}>
<h3>
YOUR STATISTICS
</h3>
       </div>


            </div>
            <div className='graphs2'>
            {/* <ResponsiveContainer width="45%"   aspect={3} style={{  transition:"all 2s ease" }} >
        <LineChart data={data} animationBegin={2000}>
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" vertical horizontal={false} verticalFill={['#555555', '#444444']} fillOpacity={0.5}/>
            <Tooltip />
            <Legend />
            <XAxis dataKey="name"/>
            <YAxis dataKey="value" style={{color:"green" , fontFamily:"monospace" , backgroundColor:"wheat"}}/>
            
            <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
          
           
          
        </LineChart>
       </ResponsiveContainer> */}
       <div  style={{fontFamily:"revert" , color:"black" , right:"210px" , position:"absolute"}}>
<h3>
PIE CHART OF ACCURACY
</h3>
       </div>
         
       <ResponsiveContainer width="130%" aspect={3} style={{ transition: "all 2s ease" , }}>
  <PieChart animationBegin={2000}>
    <Pie
      data={data}
      dataKey="value"
      nameKey="name"
      cx="50%"
      cy="50%"
      outerRadius={80}
      fill={data.value==="YourAccuracy"?"red":data.value==="lowestAccuracy"?"green":"black"}
      label
    >
        {
        data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.name === "YourAccuracy" ? "crimson" : entry.name === "lowestAccuracy" ? "blue" : "black"} />
        ))
      }
        </Pie>
    
    <Tooltip />
    <Legend />
  </PieChart>
</ResponsiveContainer>

            </div>
            <div className='graphs3'>
            
      
       <ResponsiveContainer width="100%" aspect={3} style={{ transition: "all 2s ease" }}>
  <BarChart data={data2} animationBegin={2000}>
    <CartesianGrid stroke="white" strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis dataKey="value" style={{ color: "black", fontFamily: "monospace", backgroundColor: "wheat" }} />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" fill="green" >
    {
        data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.name === "YourAccuracy" ? "green" : entry.name === "lowestAccuracy" ? "blue" : "gray"} />
        ))
      }
    </Bar>

  </BarChart>
</ResponsiveContainer>
<div style={{fontFamily:"revert" , color:"black" , right:"290px" , position:"absolute" , top:"270px"}}>
<h3>
BAR CHART OF NO OF CHARCTER
</h3>
       </div>

       

            </div>
            <div className='graphs4'>
<div style={{fontFamily:"revert" , color:"black" , right:"290px" , position:"absolute" , top:"20px"}}>
<h4>your WPM {avgWPM}</h4>
</div>
            <ResponsiveContainer width="100%" aspect={3} style={{ transition: "all 2s ease" }}>
  <RadialBarChart width={500} height={500} innerRadius="10%" outerRadius="90%" fill={data.name==="YourWPM"?"grey":"red"} data={data1}>
    <RadialBar minAngle={95} label={{ position: 'insideBottomRight', fill:'black' }} background clockWise dataKey="value" />
    {/* <Legend iconSize={10} width={120} height={140} layout="horizontal" verticalAlign="middle" fill='red' wrapperStyle={{ top: 0, right: 0, left: 'auto', bottom: 'auto' }} /> */}
  </RadialBarChart>
</ResponsiveContainer>
<div style={{fontFamily:"revert" , color:"black" , right:"290px" , position:"absolute" , top:"210px"}}>
<h3>
BAR CHART OF WPM

</h3>

       </div>


            </div>
          </div>
          

    </div>
  )
}

export default Profile