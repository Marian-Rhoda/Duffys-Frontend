import React from "react";
import {Link} from 'react-router-dom';
import { Tabs, TabList, Tab } from "@chakra-ui/react"


export default function NavBar() {

    return (

        <div className="Navv"  >
            <nav>
            <Tabs align="end" variant="enclosed">
            
                <ul >
                <TabList mb="1em">
                  <Tab>  <Link to='/'>Home</Link></Tab>
                
                
                   <Tab> <Link to='/Login'>Login</Link></Tab>
            
            
                    <Tab><Link to='/Signup'>Signup</Link></Tab>
                    </TabList>
                </ul>
                </Tabs>
            </nav>
        </div>
    )

}