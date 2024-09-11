import Login from "./components/Login";
import Profile from "./components/Profile";
import Singnup from "./components/Singnup";
import Textarea from "./components/Textarea";
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom'


function App() {
  return (

    <div className="App">
<Router>
      <Routes>
        <Route path='/' element={<Singnup/>}/>
        <Route path='/text' element={<Textarea/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/pf' element={<Profile/>}/>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
