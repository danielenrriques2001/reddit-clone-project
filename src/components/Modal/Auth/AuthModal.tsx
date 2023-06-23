import React from 'react';
import {useRecoilState} from 'recoil';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex,
    Text
  } from '@chakra-ui/react'
import { authModalState } from '@/atoms/authModalAtom';
import AuthInputs from './AuthInputs';
import OAuthButtons from './OAuthButtons';

const AuthModal:React.FC = () => {

    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleClose = () => {
        setModalState(prev => ({
            ...prev,
            open: false,
        }))
    }
    
  
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

                  <OAuthButtons/>
                  <Text
                    color={'gray.600'}
                    fontWeight={700}
                  >OR
                  </Text>
                  <AuthInputs/>
                  {/**Reset Password */}



              </Flex>

          
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    )
}
export default AuthModal;