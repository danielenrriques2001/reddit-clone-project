import TabItem  from '@/components/Posts/TabItem';
import { Flex, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiPoll } from 'react-icons/bi';
import { BsLink, BsMic } from 'react-icons/bs';
import { IoDocumentText, IoImageOutline } from 'react-icons/io5';

type NewPostFormProps = {
    
};

const FORM_TABS = [
    {
        title: 'Post',
        icon: IoDocumentText
    },
    {
        title: 'Images & Video',
        icon: IoImageOutline
    },
    {
        title: 'Link',
        icon: BsLink
    },
    {
        title: 'Poll',
        icon: BiPoll
    },
    {
        title: 'Talk',
        icon: BsMic
    },




]

export type TabItemType = {
    title: string;
    icon: typeof Icon.arguments; 
}



const NewPostForm:React.FC<NewPostFormProps> = () => {

    const [selectedTab, setSelectedTab] = useState(FORM_TABS[0].title);
    
    return (
        <Flex
            direction={'column'}
            background={'white'}
            borderRadius={4}
            mt={2}
        >
            <Flex
                width={'100%'}

            >
                {
                    FORM_TABS.map((item) => (
                        <>
                        <TabItem
                            item={item}
                            selected={item.title === selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                        </>

                    ))
                }

            </Flex>
        
        </Flex>


    )
}
export default NewPostForm;