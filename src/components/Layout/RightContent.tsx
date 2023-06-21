import {Flex} from '@chakra-ui/react'
import AuthButtons from '../AuthButtons';

type TypeName= {
  
};


const RightContent:React.FC<TypeName> = () => {
    
    return( 
    <>

    {/**Auth modal */}

    <Flex justify='center' align='center'>
        <AuthButtons/>

    </Flex>
    </>
    
    )
}

export default RightContent;