import { Container, Heading , Link, IconButton, Image, Box} from '@chakra-ui/react'
import React from 'react'
import {EmailIcon,  PhoneIcon} from "@chakra-ui/icons"
import dp from '../Duffyimages/dp.jpg'
import Menus from './Menus'
import {GrFacebookOption} from 'react-icons/gr'
import {GrInstagram} from 'react-icons/gr'




function Contact() {


    return (
        <div>
            <Menus/>
             <Container centerContent>
            <Heading as="h1" fontSize="4xl" color="blue.500">Contact us</Heading>
            <br></br>
            <Box>{<Image
              borderRadius="full"
              boxSize="250px"
              src={dp}
              alt="jesus is king"/>}</Box>
              <br></br>
              
              <br></br>
              <Box p="3">
              <IconButton
                variant="outline"
                colorScheme="cyan"
                 aria-label="Call Segun"
                 size="md"
                 icon={<PhoneIcon />}
                   /> Telephone: 0246798263/64/65
              </Box>
              
              <Box p="">
              <IconButton
               variant="outline"
               colorScheme="cyan"
                aria-label="Send email"
                  icon={<EmailIcon />}
                   /> Email: info@duffysorganics.com
              </Box>

              <Box p="3">
                <IconButton
               variant="outline"
               colorScheme="cyan"
                aria-label="Send email"
                  icon={<GrFacebookOption/>}></IconButton>
                <Link src="https://web.facebook.com/DuffysHair/?ref=page_internal">http://www.instagram.com/duffyshair</Link>
              </Box>
              <Box>
                <IconButton
               variant="outline"
               colorScheme="cyan"
                aria-label="Send email"
                  icon={<GrInstagram/>}></IconButton>
                <Link src="http://www.instagram.com/duffyshair">http://www.facebook.com/duffyshair</Link>
              </Box>
              Location

              <Box borderRadius="lg" borderWidth="1px" p="2" borderColor="cyan.500">
              <iframe title="Duffy's Organics" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.4072290806653!2d-0.15357728523362965!3d5.654084295901465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9cad04f45867%3A0xd292bd278653f983!2sDuffys%20Hair!5e0!3m2!1sen!2sgh!4v1610118949779!5m2!1sen!2sgh" width="600" height="450" frameborder="0" border="0" allowfullscreen="true" aria-hidden="false" tabindex="0"></iframe>
                
              </Box> 
          
              
              </Container>
              <Box h="90px"></Box>
              
              
              



            
            
        </div>
    )
}

export default Contact
