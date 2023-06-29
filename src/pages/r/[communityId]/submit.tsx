import AboutCommunity from '@/components/Layout/Community/AboutCommunity';
import NewPostForm from '@/components/Layout/Community/NewPostForm';
import PageContentLayout from '@/components/Layout/PageContentLayout';
import { auth } from '@/firebase/clientApp';
import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


const SubmitPostPage:React.FC = () => {

    const [user] = useAuthState(auth)
    
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

              { user &&  <NewPostForm
                    user={user}
                />}
            </>

            <>
                <AboutCommunity/>
            </>


        </PageContentLayout>
    )
}
export default SubmitPostPage;