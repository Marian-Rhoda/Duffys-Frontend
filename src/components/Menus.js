import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider, 
  } from "@chakra-ui/react"
  import {HamburgerIcon} from "@chakra-ui/icons"
  import {Link} from 'react-router-dom';


function Menus() {
    return (
        <div>

<Menu>
  <MenuButton
    px={4}
    py={2}
    transition="all 0.2s"
    borderRadius="md"
    borderWidth="1px"
    _hover={{ bg: "gray.100" }}
    _expanded={{ bg: "red.200" }}
    _focus={{ outline: 0, boxShadow: "outline" }}
  >
     <HamburgerIcon />
  </MenuButton>
  <MenuList>
    <MenuItem><Link to ='/Order'>Place Order</Link></MenuItem>
    <MenuDivider></MenuDivider>
    <MenuItem><Link to ='/Contact'> Contact Us</Link></MenuItem>
  </MenuList>
</Menu>
            
        </div>
    )
}

export default Menus
