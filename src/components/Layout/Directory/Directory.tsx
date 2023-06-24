import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem, MenuDivider, Icon,
    Flex,
    Text
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { signOut } from 'firebase/auth';
import { IoIosLogOut } from 'react-icons/io';
import { auth } from '@/firebase/clientApp';
import { BiHome } from 'react-icons/bi';

const Directory:React.FC = () => {
    

    return(
    <Menu>
    <MenuButton 
            cursor={'pointer'}
            padding={'0px 6px'}
            borderRadius={4}
            _hover={{outline: '1px solid', outlineColor: 'gray.200'}}
            ml={{base: 0, md: 2}}

        >

            <Flex
                align={'center'}
                justify={'center'}
                gap={2}
            >
              <Flex
                align={'center'}
              >
               <Icon as={BiHome} fontSize={20} mr={{base: 1, md: 2}} />

               <Flex
                display={{base: 'none', lg: 'flex' }}
               >
                   <Text fontWeight={{base: 700, md: 500}} fontSize={'10pt'}>Home</Text>
               </Flex>
              

              </Flex>
               <Icon as={ChevronDownIcon}/>

            </Flex>
        
               
    </MenuButton>


            <MenuList>
        <MenuItem>
            <Flex
                align={'center'}
                justify={'center'}
                gap={2}
                onClick={() => signOut(auth)}
            >
                <Icon as={IoIosLogOut}/>
                Log Out

            </Flex>
        </MenuItem>
       
    </MenuList>
    
</Menu>
    )
}
export default Directory;