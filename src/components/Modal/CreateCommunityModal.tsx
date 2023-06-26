import React, { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Box,
    Text,
    Input,
    Stack,
    Checkbox

  } from '@chakra-ui/react'
import { CgProfile } from 'react-icons/cg';
import { BsEyeFill } from 'react-icons/bs';
import { BiLock } from 'react-icons/bi';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, firestore } from '@/firebase/clientApp';
import { useAuthState } from 'react-firebase-hooks/auth';

type CreateCommunityModalProps = {
    open: boolean;
    handleClose: () => void;
    
};

const CreateCommunityModal:React.FC<CreateCommunityModalProps> = ({open, handleClose}) => {

    const [communityName, setCommunityName] = useState('');
    const [communityType, setCommunityType] = useState('public');
    const [charRemaining, setCharRemaining] = useState(21);
    const [error, setError] = useState('');
    const [user] = useAuthState(auth);
    const [loading, SetLoading] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        if(event.target.value.length > 21) return;
        //recalculate
        setCommunityName(event.target.value);

        setCharRemaining(21 - event.target.value.length);

    }

    const onCommunityChangeType = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setCommunityType(event.target.name);
    }

    const handleCreateCommunity = async () => {
      setError('');
        //validate the community name
        const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if(format.test(communityName) || communityName.length < 3) {
          setError('Community names must be among 3-21 characters, and can only contain letters, numbers or underscore')
          return;

        }

       


          SetLoading(true)

          try {

          const communityDocRef = doc(firestore, 'communities', communityName);
          const communityDoc = await getDoc(communityDocRef)

          //check if community exists
          if(communityDoc.exists()) {
            throw new Error(`Sorry, ${communityName}  is already taken. Try another`)
          }


          await setDoc(communityDocRef, {
              //creator Id
              creatorId: user?.uid,
              createdAt: serverTimestamp(),
              numberOfMembers: 1,
              privacyType: communityType
          })
            
          } catch (error: any) {
              console.log('handleCreateCommunityeRROR', error)
              setError(error.message)
          } finally {
            SetLoading(false)
          }


    }
    
    return (
        <>
          
    
          <Modal isOpen={open} onClose={handleClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader
                display={'flex'}
                flexDirection={'column'}
                fontSize={15}
                padding={3}
              >
                Create a Community
              </ModalHeader>

              <Box px={3}>


                    <ModalCloseButton />
                    <ModalBody
                        display={'flex'}
                        flexDirection={'column'}
                        padding={'10px 0px'}
                      
                    >
                       <Text fontWeight={800} fontSize={15} >
                        Name
                       </Text>
                       <Text fontSize={11} color={'gray.500'} >
                       Community names including capitalization can not be changed. 
                       </Text>
                       <Text 
                            position={'relative'} 
                            top={'28px'} 
                            left={'10px'} 
                            width={'20px'} 
                            color={'gray.400'}
                       >r/
                       </Text>
                       <Input
                            position={'relative'}
                            value={communityName}
                            size={'sm'}
                            pl={'22px'}
                            onChange={(e)=> handleChange(e)}
                        >

                       </Input>
                       <Text fontSize={'10pt'} color={charRemaining === 0 ? 'red' : 'gray.500'}>
                      {charRemaining}  Characters remaining 
                       </Text>

                       {
                        <Text fontSize={'9pt'} color={'red'} padding={1}>{error}</Text>
                       }

                       <Box my={4}>
                            <Text fontWeight={700} fontSize={15}>Community Type</Text>
                            <Stack spacing={2}>
                                <Checkbox 
                                    name='public'
                                    isChecked={communityType === 'public'}
                                    onChange={onCommunityChangeType}
                                    >
                                        <Text fontSize={'10pt'} mr={1} display={'flex'} alignItems={'center'} gap={1}>
                                            <CgProfile/>
                                            Public
                                        </Text>
                                      
                                </Checkbox>
                                <Checkbox 
                                    name='restricted'
                                    isChecked={communityType === 'restricted'}
                                    onChange={onCommunityChangeType}
                                    
                                    >
                                        <Text fontSize={'10pt'} mr={1} display={'flex'} alignItems={'center'} gap={1}>
                                            
                                            <BsEyeFill/>
                                            Restricted
                                        </Text>
                                </Checkbox>
                                <Checkbox 
                                    name='private'
                                    isChecked={communityType === 'private'}
                                    onChange={onCommunityChangeType}
                                    >
                                        <Text fontSize={'10pt'} mr={1} display={'flex'} alignItems={'center'} gap={1}>
                                            <BiLock/>
                                            Private
                                        </Text>
                                </Checkbox>

                            </Stack>
                       </Box>

                    </ModalBody>

                
              </Box>

              
              <ModalFooter bg='gray.100' borderRadius={'0px 0px 10px 10px'}>
                <Button 
                    colorScheme='blue' 
                    mr={3} 
                    onClick={handleClose} 
                    height={'30px'} 
                    variant={'outline'}>
                  Cancel
                </Button>
                <Button 
                    height={'30px'} 
                    isLoading={loading}
                    onClick={() => handleCreateCommunity()}
                    >Create Community</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )
}
export default CreateCommunityModal;