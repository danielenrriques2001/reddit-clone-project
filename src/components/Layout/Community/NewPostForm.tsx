import ImageUpload from '@/components/Posts/ImageUpload';
import TabItem  from '@/components/Posts/TabItem';
import TextInputs from '@/components/Posts/TextInputs';
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
    const [textInput, setTextInput] = useState({
        title: '',
        body: '',
    })
    const [loading, setLoading] = useState(false)

    const [selectedFile, setSelectedFile] = useState<string>();

    const handleCreatePost = async () => {};

    const onSelectImage =  (event: React.ChangeEvent<HTMLInputElement>) => {
        const reader = new FileReader();

        if(event.target.files?.[0]) {
            reader.readAsDataURL(event.target.files[0]);

        }
        reader.onload = (readerEvent) => {
            if(readerEvent.target?.result) {
                setSelectedFile(readerEvent.target.result as string)
            }
        }
    }

    const onTextChange =  (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        setTextInput({
                ...textInput,
                [event.target.name] : event.target.value,
                
        })


    }
    
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
                            key={item.title}
                            item={item}
                            selected={item.title === selectedTab}
                            setSelectedTab={setSelectedTab}
                        />
                        </>

                    ))
                }

            </Flex >
            <Flex p={4}>
                {selectedTab === 'Post' && <TextInputs
                    textInputs={textInput}
                    handleCreatePost={handleCreatePost}
                    onChange={onTextChange}
                    loading={loading}

                />}
                {
                    selectedTab === 'Images & Video' && 
                    <ImageUpload
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                        onSelectImage={onSelectImage}
                        setSelectedTab={setSelectedTab}
                        
                    />
                    

                }

            </Flex>
        
        </Flex>


    )
}
export default NewPostForm;