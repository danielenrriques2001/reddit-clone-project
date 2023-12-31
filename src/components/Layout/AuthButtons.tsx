import React, { Fragment } from 'react';
import {Button} from '@chakra-ui/react'
import { authModalState } from '@/atoms/authModalAtom';
import {useSetRecoilState} from 'recoil'
const AuthButtons:React.FC = () => {

    const setAuthModalState = useSetRecoilState(authModalState)
    
    return (

        <Fragment>
            <Button 
                variant='outline' 
                height='28px' 
                display={{base: 'none', sm: 'flex' }}
                width={{base: '70px', md: '110px'}}
                mr={2}
                onClick={() => setAuthModalState({open: true, view:'login' })}
                >Log in
            
            </Button>
            <Button
                height='28px'
                display={{base: 'none', sm: 'flex' }}
                width={{base: '70px', md: '110px'}}
                mr={2}
                onClick={() => setAuthModalState({open: true, view:'signup' })}

            
            >Sign Up
            
            </Button>
        </Fragment>

    )
}
export default AuthButtons;