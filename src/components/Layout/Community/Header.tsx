import { Community } from '@/atoms/communitiesAtom';
import { Box, Flex, Icon, Image, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { BsReddit } from 'react-icons/bs';
import useCommunityData from '@/hooks/useCommunityData';
type HeaderProps = {
    communityData: Community
    
};

const Header:React.FC<HeaderProps> = ({communityData}) => {
    
    const {
        onJoinOrLeaveCommunity, 
        communityStateValue,
        loading
        } = useCommunityData();
                    // with this !! you can booleanize a return 
    const isJoined = !!communityStateValue.mySnippets.find(item => item.communityId === communityData.id);
    

    
    return (
        <Flex 
            direction={'column'} 
            width={'100%'} 
            height={'146px'}  
        >

            <Box 
                height={'50%'} 
                backgroundColor={'blue.400'}
                />
            <Flex 
                justify={'center'} 
                bg={'white'} 
                flexGrow={1} >
                <Flex 
                    width={'95%'} 
                    maxWidth={'860px'} >

                    {
                        communityData.imageUrl ? (

                            <Image 
                            />




                        ) :(

                        <Icon 
                            as={BsReddit} 
                            fontSize={64} 
                            position={'relative'}
                            top={-3}
                            color={'blue.600'}
                            border={'4px solid white'}
                            borderRadius={'50%'}

                        />
                        )
                    }
                    <Flex 
                        padding={'10px 16px'}
                    >
                        <Flex 
                            direction={'column'} 
                            mr={6} 
                            >
                            <Text 
                                fontWeight={800}
                                fontSize={'16pt'}
                                color={'gray.700'}

                            >
                                {communityData?.id}
                            </Text>

                            <Text 
                                fontWeight={600}
                                fontSize={'10pt'}
                                color={'gray.400'}

                            >
                                r/{communityData?.id}
                            </Text>

                        </Flex>
                        <Button 
                            variant={isJoined ? 'outline' : 'solid'}
                            height={'30px'}
                            px={6}
                            onClick={() => onJoinOrLeaveCommunity(communityData, isJoined)}
                            isLoading={loading}
                            >
                            {isJoined ? 'Joined' : 'Join'}
                        </Button>



                    </Flex>

                    

                </Flex>

            </Flex>
            

        </Flex>
    )
}
export default Header;