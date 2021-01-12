import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import NavBar from './components/Navbar.js';
import Order2 from './components/Order2.js';
import {Box, Container} from  "@chakra-ui/react"
// import './App.css'
import './components/Home.css'




function App() {
  return (
    <div  className='home'>
    <Box>
    <div>
      
      

      
      <Router>
        <NavBar />
        <div className='navlink'>
      <div className='duffy'>
            <Container w="100%" h="100%" centerContent>
                
            <Box alignItems="center" padding="20px" width="160%"height='150%'>
            <h1 className="text" style={{textAlign:"center", fontWeight:"extrabold",fontFamily:"Monotype Corsiva ,times new romans, sans serif", fontSize:"105px"}}>Duffy's Organics</h1>
            
            </Box></Container>
            </div>
            <br></br>
            <br></br>

            <div>
               
            </div>
            <br></br>
            <br></br>
            </div>
        <Switch>
          <Route exact path ='/' component={Home}/>
          <Route path ='/Login' component= {Login} />
          <Route path ='/Signup' component ={Signup} />
          <Route path ='/Order' component ={Order2} />
          <Route path ='/Contact' component ={Contact} />

        </Switch>
       
      </Router>

      
    </div>
    
    
  </Box>

  
  </div>
  
  )
}

export default App
