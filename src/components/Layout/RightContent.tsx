import {Button, Flex} from '@chakra-ui/react'
import AuthButtons from './AuthButtons';
import AuthModal from '../Modal/Auth/AuthModal';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/clientApp';


type RightContentProps= {
  user: any;
};


const RightContent:React.FC<RightContentProps> = ({user}) => {


    
    return( 
    <>

    <AuthModal/>

    <Flex justify='center' align='center'>
       { !user ?  <AuthButtons/> : <Button onClick={() => signOut(auth)}>Log Out</Button>}
    </Flex>
    </>
    
    )
}

export default RightContent;