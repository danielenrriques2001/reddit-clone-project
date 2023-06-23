import React from 'react';
import {auth} from '../../firebase/clientApp'
import { signOut } from 'firebase/auth';
import { Button, Flex, Icon } from '@chakra-ui/react';
import { BsArrowUpRightCircle, BsBarChart, BsCamera, BsCameraReels, BsChatDots, BsFilterCircle, BsPlus, BsSignDoNotEnterFill, BsSignNoRightTurnFill } from 'react-icons/bs';
import {BiNotification} from 'react-icons/bi'
type IconsProps = {
    
};

const Icons:React.FC<IconsProps> = () => {
    
    return (
        <Flex>
            <Flex 
                display={{base: 'none', md: 'flex'}} 
                align={'center'} 
                borderRight={'1px solid'} 
                borderColor={'gray.200'}
                justify={'center'}
                >

            

            <Flex 
                mr={1.5} 
                ml={1.5} 
                padding={1} 
                cursor={'pointer'} 
                borderRadius={4} 
                _hover={{bg: 'gray.200'}}>
                <Icon as={BsArrowUpRightCircle}/>
            </Flex>
            <Flex 
                mr={1.5} 
                ml={1.5} 
                padding={1} 
                cursor={'pointer'} 
                borderRadius={4} 
                _hover={{bg: 'gray.200'}}>
                <Icon as={BsFilterCircle}/>
            </Flex>
            <Flex 
                mr={1.5} 
                ml={1.5} 
                padding={1} 
                cursor={'pointer'} 
                borderRadius={4} 
                _hover={{bg: 'gray.200'}}>
                <Icon as={BsCameraReels}/>
            </Flex>

            </Flex>
           <>
           <Flex 
                mr={1.5} 
                ml={1.5} 
                padding={1} 
                cursor={'pointer'} 
                borderRadius={4} 
                _hover={{bg: 'gray.200'}}>
                <Icon as={BsChatDots}/>
            </Flex>
            <Flex 
                mr={1.5} 
                ml={1.5} 
                padding={1} 
                cursor={'pointer'} 
                borderRadius={4} 
                _hover={{bg: 'gray.200'}}>
                <Icon as={BiNotification}/>
            </Flex>
            <Flex 
                display={{base: 'none', md: 'flex'}} 
                mr={1.5} 
                ml={1.5} 
                padding={1} 
                cursor={'pointer'} 
                borderRadius={4} 
                _hover={{bg: 'gray.200'}}>
                <Icon as={BsPlus} fontSize={20}/>
            </Flex>
           
           </>
    
        {/* <Button onClick={() => signOut(auth)}>Log Out</Button> */}
        </Flex>
        )
}
export default Icons;