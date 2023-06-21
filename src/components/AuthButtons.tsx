import React, { Fragment } from 'react';
import {Button} from '@chakra-ui/react'

const AuthButtons:React.FC = () => {
    
    return (

        <Fragment>
            <Button variant={'outline'}>Log in</Button>
            <Button>Sign Up</Button>
        </Fragment>

    )
}
export default AuthButtons;