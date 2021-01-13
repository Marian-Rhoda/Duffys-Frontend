import React, {useState} from 'react'
import {FormControl, FormLabel, Input , Heading, Textarea,Text, InputLeftAddon,InputLeftElement, Container, Button,Box, InputGroup,} from "@chakra-ui/react"
import Pricelist from './Pricelist.js'
import axios from 'axios'
import Menus from './Menus.js'


function Order2() {

    const [completeorder, setCompleteorder] = useState('')
 
    


    const [name, setName] =useState('')
    const handleName =(event) => {
       setName(event.target.value)}

     


    const [transactionid, setTransactionid] =useState('')
    const handleTransactionid =(event) => {
       setTransactionid(event.target.value)}
       const [collections, setCollections] =useState('')
       const handleCollections =(event) => {
          setCollections(event.target.value)}

    const [amount, setAmount] =useState('')
    const handleAmount =(event) => {
        setAmount(event.target.value)} 


    const [pay, setPay] =useState('')
    const handlePay =(event) => {
        setPay(event.target.value)}  

    const [order, setOrder] =useState('')
    const handleOrder =(event) => {
        setOrder(event.target.value)} 
        
  
            
            


            function handleCompleteorder(event) {
                event.preventDefault();
                const newOrders= {
                name:name,
                transactionid:transactionid,
                amount:amount,
                collections:collections,
                paymentnumber: pay,
                order:order
                }
                axios.post("http://localhost:4030/orders/Order",newOrders).then(response=>{
                setCompleteorder(true)
                console.log("Welcome to Duffy's organics! Please Login")
            })
                .then(res=>{
                    res.status(200).send(res)
                })
            
                .catch((err) => {
                console.log(err)
                })
            
            }         


    return (

        completeorder
              ?
              <>
              <Container centerContent width="300%">
                
                <Text color="green.500" fontSize="lg">Order received</Text>
                <Text fontSize="sm">Please allow 2 to 3 working days for order to be processed</Text>
                <br></br>
                <Text fontSize="2xl" as="i" color="pink.500">Thanks for purchasing Duffy's Organics</Text>
                </Container>
                <Box h="500px"></Box>
              </>
              :
        <div>

            <Menus/>
            <Container centerContent bg="white" borderRadius="lg">

<Heading color="pink.300">Place Your Order</Heading>
               <br></br>
               <Pricelist/>
               <br></br>
            
            <FormControl>
               <FormLabel>
                  Name:
               </FormLabel>
               <Input type="String" value={name} onChange={handleName}></Input>
               <FormLabel>
                  Transaction id:
               </FormLabel>
               <Input type="Number" value={transactionid} onChange={handleTransactionid}></Input>
               <FormLabel>
                  Amount:
               </FormLabel>
               <InputGroup>
               <InputLeftElement pointerEvents="none"
                color="gray.400"
                fontSize="sm"
                 children="GHS">
               </InputLeftElement>
               
               <Input type="Number" value={amount} onChange={handleAmount}></Input>
               </InputGroup>
               <FormLabel>
                  Payment Number:
               </FormLabel>
               <InputGroup>
               <InputLeftAddon children="+233" fontSize="sm"></InputLeftAddon>
               <Input type="Number" value={pay} onChange={handlePay}></Input>
               </InputGroup>
               <FormLabel>
                  Order:
               </FormLabel>
               <Textarea type="String" value={order} onChange={handleOrder} placeholder="..kindly provide product and quantity"></Textarea>
               <FormLabel>
                  Collection:
               </FormLabel>
               <Box>
             
               <Textarea  value={collections} onChange={handleCollections}placeholder="..kindly provide pickup or delivery info"></Textarea>
               </Box >
              
        
      

        
        


                 
                 <br></br>

                 <Button colorScheme="pink" onClick={handleCompleteorder}>Order</Button>
             </FormControl> 
            
             </Container> 
            
        </div>
    )
}

export default Order2
