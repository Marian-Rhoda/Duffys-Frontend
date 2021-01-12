import React ,{useState} from 'react';
import Home from './Home.js';
import axios from 'axios';
import {FormControl, FormLabel, Input,Avatar, Button, Container, Text, Box} from "@chakra-ui/react"
import Menus from './Menus.js'
import '../App.css'






export default function Login() {

    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const [LoggedIn, setLoggedIn]= useState(false)

    const handleUsernameInput =(event) => {
        setUsername(event.target.value)
    }
    const handlePasswordInput =(event) => {
        setPassword(event.target.value)
    }


    function handleLoggedIn(event) {
        event.preventDefault();
        const logingin={
         username : username,
         password : password

        }
        axios.post("http://localhost:4030/users/Login",logingin).then(res=>{
    setLoggedIn(true)
    console.log("Welcome to Duffy's organics! Please Login")
})
    .then(res=>{
        res.status(200).send(res)
    })

    .catch((err) => {
    console.log(err.message)
    })
    
    }
    function handleLogout(event) {
        event.preventDefault();
        setLoggedIn(false)
    }



    return (
        LoggedIn
        ?
        <>
        
          <Text className="texte" as="em"  fontSize="2xl"> <Avatar></Avatar>Welcome {username} </Text> 
          
          <Menus/>
          
          <button onClick= {handleLogout}>Logout</button>
          <Box alignItems="right">
                    
                </Box>
          <Home/>
          
          
         
          </>

          :
    
        
        <div className='Logform' >
            <Box height="500%">
            <Container maxW="xl" centerContent height="50%">
            <Box padding="4" bg="rgba(255,255,255,0.5)" maxW="8xl" borderWidth="1px" borderRadius="lg">
                <Box >
            <FormControl>
                <FormLabel>
                    Username:
                    <Input bg=""type= "email" name= "username" value={username} onChange={handleUsernameInput} size="sm" />

                </FormLabel>
                
                <FormLabel>
                    Password:
                    <Input bg="" type= "password" name= "password" value={password} onChange={(event) => handlePasswordInput(event) } size="sm" />
                </FormLabel>
                
                <Button onClick={handleLoggedIn} colorScheme="teal" size="sm"> Login </Button>
                


        
            </FormControl>
            </Box>
            </Box>
            </Container>
            </Box>
            <Box h="410px"></Box>
            </div>
            
            
        
        
    )
};

