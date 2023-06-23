import { authModalState } from '@/atoms/authModalAtom';
import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import {useSetRecoilState} from 'recoil'
import {auth} from '../../../firebase/clientApp'
import {useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { FIREBASE_ERRORS } from '@/firebase/error';

type LoginProps = {
    
};

const Login:React.FC<LoginProps> = () => {

    const setAuthModalState = useSetRecoilState(authModalState)

    const [loginForm, setLoginForm] = useState({
        email: '',
        password: ''

    })

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const {email, password} = loginForm;


        signInWithEmailAndPassword(email, password)

        
    }

    const onChange =(event: React.ChangeEvent<HTMLInputElement>) => {

        //update form state
        setLoginForm(prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))

    }


    
    return (
        <form
            onSubmit={onSubmit}

        >
            <Input 
                required
                name='email' 
                placeholder='email' 
                type='email'
                mb={2}
                onChange={onChange}
                fontSize={'10pt'}
                _placeholder={{color: 'gray.500'}}
                _hover={{
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'
                }}
                _focus={{
                    outline: 'none',
                    bg: 'white',
                    border: '1px solid',
                    borderColor: 'blue.500'

                }}
                bg={'gray.50'}


                />
            <Input
                 required
                 name='password' 
                 placeholder='password' 
                 type='password'
                 mb={2}
                 onChange={onChange}
                 fontSize={'10pt'}
                 _placeholder={{color: 'gray.500'}}
                 _hover={{
                     bg: 'white',
                     border: '1px solid',
                     borderColor: 'blue.500'
                 }}
                 _focus={{
                     outline: 'none',
                     bg: 'white',
                     border: '1px solid',
                     borderColor: 'blue.500'
 
                 }}
                 bg={'gray.50'}
                 
            
            />
             {
              (error) && (
                <Text textAlign={'center'} color={'red'} fontSize={'10pt'}>
                    {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
                </Text>
              )
            }

            <Button
                type='submit'
                width={'100%'}
                height={'36px'}
                mt={2}
                mb={2}
                isLoading={loading}
            >
                Log In
            </Button>

            <Flex 
                fontSize={'9pt'} 
                justifyContent={'center'}>
                <Text 
                    mr={2}
                    >New Here? 
                </Text>
                <Text 
                    color={'blue.500'} 
                    fontWeight={700}
                    cursor={'pointer'}
                    onClick={()=> {setAuthModalState(prev => ({
                        ...prev,
                        view: 'signup'
                    }))}}
                
                >
                    SIGN UP
                </Text>


                


            </Flex>

            <Text 
                    mr={2}
                    fontSize={'10pt'}
                    cursor={"pointer"}
                    color={'blue.500'}
                    _hover={{color: 'blue.800'}}
                    textAlign={'center'}
                    onClick={()=> {setAuthModalState(prev => ({
                        ...prev,
                        view: 'resetPassword'
                    }))}}
                    >
                        Have you forgotten your password? 
                </Text>


            

        </form>

    )
}
export default Login;