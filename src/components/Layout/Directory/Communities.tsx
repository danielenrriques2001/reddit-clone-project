import CreateCommunityModal from '@/components/Modal/CreateCommunityModal';
import React, { useState } from 'react';
import {Flex, MenuItem, Icon} from '@chakra-ui/react'
import { BsPlus } from 'react-icons/bs';
// type CommunitiesProps = {
    
// };

const Communities:React.FC = () => {

    const [open, setOpen] = useState(false)
    
    return (
        <>

        <CreateCommunityModal open={open} handleClose={() => {setOpen(false)}}/>
        <MenuItem
            width={'100%'}
            fontSize={'10pt'}
            _hover={{bg: 'gray.100'}}
            onClick={() =>  setOpen(true)}
        >
            <Flex justify={'center'} align={'center'} gap={2}>
                <Icon as={BsPlus} fontSize={20}/>
                Create Community
            </Flex>
        </MenuItem>
        
        
        
        </>
    )
}
export default Communities;