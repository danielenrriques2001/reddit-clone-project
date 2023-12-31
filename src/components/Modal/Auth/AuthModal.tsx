import React, { useEffect } from 'react';
import {useRecoilState} from 'recoil';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Flex,
    Text
  } from '@chakra-ui/react'
import { authModalState } from '@/atoms/authModalAtom';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/clientApp';
import ResetPassword from './ResetPassword';

const AuthModal:React.FC = () => {

    const [modalState, setModalState] = useRecoilState(authModalState);
    const [user, loading, error] = useAuthState(auth);


    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }

    useEffect(() => {
      if(user) handleClose();
    }, [user])
    

    
    
  
    return (
      <>
  
        <Modal isOpen={modalState.open} onClose={handleClose}>
          <ModalOverlay />
          <ModalContent
            pb={5}
          >
            <ModalHeader textAlign={'center'}>
                {modalState.view === 'login' && 'Login'}
                {modalState.view === 'resetPassword' && 'Reset Password'}
                {modalState.view === 'signup' && 'Sign Up'}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              pb={2}


            >
              <Flex 
                direction={'column'}
                align={'center'}
                justify={'center'}
                width={'70%'}

                >

                  {
                    modalState.view === 'login' || modalState.view === 'signup' ? (

                      <>
                      <OAuthButtons/>
                        <Text
                          color={'gray.600'}
                          fontWeight={700}
                        >OR
                        </Text>
                      <AuthInputs/>

                      </>

                    )  :  <ResetPassword toggleView={function (view: 'login' | 'signup' | 'resetPassword'): void {
                      throw new Error('Function not implemented.');
                    } }/>
                  }

                  
                



              </Flex>

          
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
export default AuthModal;