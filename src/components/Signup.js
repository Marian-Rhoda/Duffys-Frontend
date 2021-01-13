import React, {useState} from 'react';
import Login from './Login.js';
import axios from 'axios'
import {FormControl, FormLabel, Input, Button, Container, Box, Heading} from "@chakra-ui/react"


function Signup(){
    const [name, setName]= useState('')
    const [username, setUsername]= useState('')
    const [dateofbirth, setDOB]= useState('')
    const [email, setEmail]= useState('')
    const [mobilenumber, setMobilenumber]= useState('')
    const [password, setPassword]= useState('')
    const [Signup, setSignup]= useState(false)
    


    const handleNameInput =(event) => {
        setName(event.target.value)
    }
    const handleUsernameInput =(event) => {
        setUsername(event.target.value)
    }

    const handleMobilenumberInput =(event) => {
        setMobilenumber(event.target.value)
    }
    

    const handleDOBInput =(event) => {
        setDOB(event.target.value)
    }

    const handleEmailInput =(event) => {
        setEmail(event.target.value)
    }
    const handlePasswordInput =(event) => {
        setPassword(event.target.value)
    }


function handleSignup(event) {
    event.preventDefault();
    const newUsers= {
    name: name,
    username:username,
    email:email,
    dateofbirth:dateofbirth,
    password:password,
    mobilenumber:mobilenumber
    }
    axios.post("http://localhost:4030/users/Signup",newUsers).then(response=>{
    setSignup(true)
    console.log("Welcome to Duffy's organics! Please Login")
})
    .then(res=>{
        res.status(200).send(res)
    })

    .catch((err) => {
    console.log(err)
    })

}         
            
        

   
    return(

        

        
            Signup
              ?
              <>
               
                <Login />
              </>
              :

            

                
            <div>
        
            <Container w="150%" centerContent>
           
           <Heading color="purple.400"> Create a new account</Heading>
           <br></br>
           
            
             
              <Box padding="4" bg="rgba(255,255,255,0.5)" w="70%" borderWidth="1px" borderRadius="lg">
                  <Box>
               <FormControl>
                <FormLabel>
                    
                     Name:
                 </FormLabel>
                 <Input bg="" type= "text" name= "firstname" value={name} onChange={handleNameInput} size="sm" placeholder="..eg..John"/>
            

                 <FormLabel>
                    Date of birth:
                 </FormLabel>
                 <Input  bg="" type= "date" name= "DOB" value={dateofbirth} size="sm" onChange={handleDOBInput} /> 

                  <FormLabel> 
                 
                    Username:
                 </FormLabel>
                 <Input bg="" type= "text" name= "firstname" value={username} size="sm" onChange={handleUsernameInput}  placeholder="..eg..John"/>

                 <FormLabel>
                    Mobilenumber:
                 </FormLabel>
                 <Input bg="" type= "number" name= "number" value={mobilenumber} size="sm" onChange={handleMobilenumberInput} placeholder="..eg..john@gmail.com" />
                 

                 <FormLabel>
                    Email:
                 </FormLabel>
                 <Input bg="" type= "Email" name= "email" value={email} size="sm" onChange={handleEmailInput} placeholder="..eg..john@gmail.com" />

                 <FormLabel>
                    Password:
                 </FormLabel>
                 <Input bg="" type= "password" name= "password" value={password} size="sm" onChange={(event) => handlePasswordInput(event) } placeholder="..eg..A1234" />
                <br></br><br></br>
                 <Button onClick={handleSignup} colorScheme="teal" size="sm"> Submit </Button>

               </FormControl>
               
            </Box>
            </Box>
               
               </Container> 
               <Box h="100px"></Box>
            
              
        
     </div>

    )
    
};
    




export default Signup;