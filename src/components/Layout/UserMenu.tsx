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
    Flex,
    Text
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { User, signOut } from 'firebase/auth';
import {GiRamProfile, GiPlagueDoctorProfile} from 'react-icons/gi'
import {CgProfile} from 'react-icons/cg'
import {IoIosLogOut} from 'react-icons/io'
import { auth } from '@/firebase/clientApp';
import { useResetRecoilState } from 'recoil';
import { communityState } from '@/atoms/communitiesAtom';
type UserMenuProps = {

    user?: User | null;
    
};

const UserMenu:React.FC<UserMenuProps> = ({user}) => {

    const resetCommunityState = useResetRecoilState(communityState);


    const logOut = async () => {
       await signOut(auth)

         //clear Community State 
       resetCommunityState()

     
       


    }
    
    if (!user) return   <GiPlagueDoctorProfile/>

    return(
    <Menu>
    <MenuButton 
        as={Button} 
        rightIcon={<ChevronDownIcon />}
        variant={'ghost'}
        >
        
                <Flex
                    gap={2}
                >
                     <Icon 
                        as={GiRamProfile}
                        fontSize={24}
                        color={'gray.300'}
                        
                        />
                        <Flex
                             display={{base: 'none', md: 'flex'}}
                             direction={'column'}
                             fontSize={'8pt'}
                             align={'center'}
                             justify={'center'}
                             mr={8}
                        >
                        <Text
                            fontSize={'9pt'}
                            fontWeight={400}
                        >
                            {user?.displayName || user?.email?.split('@')[0]}
                        </Text>

                        </Flex>
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
                onClick={() => logOut()}
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