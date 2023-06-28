import AboutCommunity from '@/components/Layout/Community/AboutCommunity';
import NewPostForm from '@/components/Layout/Community/NewPostForm';
import PageContentLayout from '@/components/Layout/PageContentLayout';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';


const SubmitPostPage:React.FC = () => {
    
    return (
        <PageContentLayout>
            <>
                <Box
                    p={'14px 0px'}
                    borderBottom={'1px solid'}
                    borderColor={'white'}
                >
                    <Text>Create Post</Text>
                </Box>

                <NewPostForm/>
            </>

            <>
                <AboutCommunity/>
            </>


        </PageContentLayout>
    )
}
export default SubmitPostPage;