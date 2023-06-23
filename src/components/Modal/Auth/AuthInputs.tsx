import { authModalState } from "@/atoms/authModalAtom";
import { Flex, Text } from "@chakra-ui/react";
import {useRecoilValue, useSetRecoilState} from 'recoil'
import Login from "./Login";
import SignUp from "./SignUp";
type TypeName= {
    
};

const  AuthInputs:React.FC<TypeName> = () => {

    const modalState = useRecoilValue(authModalState)
    const setAuthModalState = useSetRecoilState(authModalState)

    
    return (

        <Flex
            direction={'column'}
            align={'center'}
            width={'100%'}
            mt={4}
        >
            {modalState.view === 'login' && <Login/>}
            {modalState.view === 'signup' && <SignUp/>}
          


            


        </Flex>
    )
}

export default AuthInputs;