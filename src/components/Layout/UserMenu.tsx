import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Icon,
    Flex
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { User, signOut } from 'firebase/auth';
import {GiRamProfile, GiPlagueDoctorProfile} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import {IoIosLogOut} from 'react-icons/io'
import { auth } from '@/firebase/clientApp';
type UserMenuProps = {

    user?: User | null;
    
};

const UserMenu:React.FC<UserMenuProps> = ({user}) => {
    
    if (!user) return   <GiPlagueDoctorProfile/>

    return(
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        
                <Flex>
                     <Icon 
                        as={GiRamProfile}
                        fontSize={24}
                        color={'gray.300'}
                        
                        />
                </Flex>
               
            
        
    </MenuButton>


            <MenuList>
        <MenuItem>
            <Flex
                align={'center'}
                justify={'center'}
                gap={2}
            >
                <Icon as={CgProfile}/>
                Profile

            </Flex>
        </MenuItem>
        <MenuDivider/>
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
export default UserMenu;