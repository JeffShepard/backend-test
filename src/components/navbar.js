import React from 'react'
import {Link} from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

const Navbar = () => {


        return (
            <>
            <AppBar>
                <Toolbar className="nav-container">
                    <Button component={Link} to="/"> Home </Button>
                    <Button component={Link} to="/notes"> Notes </Button>
                    <Button compenent={Link} to='/blah"> Blah and Blah </Button>
                </Toolbar>
              </AppBar>
            </>
        )
    
}

export default Navbar
