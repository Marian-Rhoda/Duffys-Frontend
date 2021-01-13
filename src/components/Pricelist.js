import React from 'react'
import {
    Drawer,useDisclosure, Text,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,Button, placement
  } from "@chakra-ui/react"
  import '../App.css'

function Pricelist() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div>
            <Button className="hello" colorScheme="pink" onClick={onOpen} variant="link">
        Pricelist
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerHeader color="pink.300" borderBottomWidth="1px">Pricelist</DrawerHeader>
            <DrawerBody>
              <Text color='purple.300'>Ohemaa-                 GHS60</Text>
              <Text color='purple.300'>Healthy Glow Shade 1-   GHS75</Text>
              <Text color='purple.300'>Healthy Glow Shade 2-   GHS75</Text>
              <Text color='purple.300'>Healthy Glow Shade 3-   GHS75</Text>
              <Text color='purple.300'>Hygiene+ -              GHS45</Text>
              <Text color='purple.300'>Feminine Wash-         GHS30</Text>      
              <Text color='purple.300'>Hair Growth Cream-     GHS50</Text>
              <Text color='purple.300'>Acne Cleanser-         GHS40</Text>
              <Text color='purple.300'>Blackspots Cream-       GHS45</Text>
              
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
            
        </div>
    )
}

export default Pricelist
