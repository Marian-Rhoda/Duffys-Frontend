
import ohemaa from '../Duffyimages/ohemaa.JPG';
import showergel from '../Duffyimages/showergel.JPG'
import hygiene from '../Duffyimages/hygiene.JPG'
import vcapsules from '../Duffyimages/vcapsules.JPG'
import vwash from '../Duffyimages/vwash.JPG'
import hairgrowth from '../Duffyimages/hairgrowth.JPG'
import acne from '../Duffyimages/acne.JPG'
import blacksports from '../Duffyimages/blacksports.JPG'
import '../Duffyimages/IMG_2429.png'
import { Image,  Grid } from "@chakra-ui/react"
import { Box, Container,Badge, Text} from "@chakra-ui/react"
import './Home.css'
import '../App.css'






function Home() {

  

    
    return (
        <div  className='body'>
          
          <Container centerContent>
              <Box >
          <Text className="texte" textAlign="center">Our Pride</Text>
          </Box>
            <Box >
                
           
            <div className="body">
                
            <Grid templateColumns="repeat(4, 1fr)" gap={8} rowGap={20}>
                <Box padding="3" width="auto" height="120%" bg="rgba(255,255,255,0.5)" borderWidth="1px" borderRadius="lg">
            <Box boxSize="170px">
            {<Image src={ohemaa} alt= 'ohemaa' />}
                
                 <Box d="flex"  alignItems="baseline">
                 <Badge borderRadius="full" px="1" colorScheme="teal" fontSize="xs">
                  Improved
                 </Badge>
                 Ohemaa <br></br>GHS60
                 </Box>
               
                 </Box>
            </Box>
            <Box  padding="3" paddingLeft="6" width="auto" height="120%" bg="rgba(255,255,255,0.5)"  borderWidth="1px" borderRadius="lg">
            <Box boxSize="150px" >{<Image src={showergel} alt= 'Showergel'alignItems="center"/>}Duffy's Healthy Glow <br></br>GHS75
            </Box>
            </Box>
            <Box padding="3"  width="auto" height="120%" bg="rgba(255,255,255,0.5)"  borderWidth="1px" borderRadius="lg">
            <Box boxSize="170px"> {<Image src={hygiene} h="100%" alt= 'Hygiene'/>}
            <Badge borderRadius="full" px="1" colorScheme="teal" fontSize="xs">
                  Improved
                 </Badge>
            Hygiene+ <br></br>GHS45
            </Box>
            </Box>
           
            <Box padding="3"  width="auto" height="120%"  bg="rgba(255,255,255,0.5)" borderWidth="1px" borderRadius="lg">
            <Box boxSize="170px">{<Image src={vcapsules}h="100%" alt= 'Vcapsules'/>}Herbal Capsules <br></br>GHS40
            </Box>
            </Box>
            <Box padding="3" paddingLeft="6" width="auto" bg="rgba(255,255,255,0.5)" height="120%"  borderWidth="1px" borderRadius="lg">
            <Box boxSize="140px">{<Image  src={vwash} alt= 'Vwash'/>}Feminine Wash <br></br>GHS30
            </Box>
            </Box>
            <Box padding="3"  width="auto" bg="rgba(255,255,255,0.5)" height="120%"  borderWidth="1px" borderRadius="lg">
            <Box boxSize="170px">{<Image src={hairgrowth} h="100%" alt= 'Hairgrowth'/>}HairGrowth Cream <br></br>GHS50
            </Box>
            </Box>
            <Box padding="3"  width="auto" height="120%"bg="rgba(255,255,255,0.5)"  borderWidth="1px" borderRadius="lg">
            <Box boxSize="170px">{<Image src={acne} h="100%" alt= 'Acne'/> }
            <Badge borderRadius="full" px="1" colorScheme="teal" fontSize="xs">
                  New
                 </Badge>
            Acne Cleanser <br></br>GHS40
            </Box>
            </Box>
            <Box padding="3"  width="auto" height="120%"  bg="rgba(255,255,255,0.5)" borderWidth="1px" borderRadius="lg">
            <Box boxSize="170px">{<Image src={blacksports} alt= 'Blacksports'/>}
            <Badge borderRadius="full" px="1" colorScheme="teal" fontSize="xs">
                  New
                 </Badge>
            BlackSpots Cream<br></br>GHS45
            </Box>
            </Box>
            

            </Grid>

            
     

        
            </div>

           
            </Box>
            <Box h="40px"></Box>
            </Container>
           
        </div>
    )
}

export default Home
