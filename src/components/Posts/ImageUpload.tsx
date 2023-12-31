import { Button, Flex, Input, Image, Stack } from '@chakra-ui/react';
import React, { useRef } from 'react';

type ImageUploadProps = {
    selectedFile?: string;
    onSelectImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setSelectedTab: (value: string) => void;
    setSelectedFile: (value: string) => void;
    
};

const ImageUpload:React.FC<ImageUploadProps> = ({selectedFile, onSelectImage, setSelectedTab, setSelectedFile}) => {

    const selectedFileRef = useRef<HTMLInputElement>(null);
    
    return (
        <Flex justify={'center'} align={'center'} width={'100%'}>

            <Flex 
                justify={'center'} 
                align={'center'} 
                p={20}
                border={'1px solid'}
                borderColor={'gray.200'}
                width={'100%'}
                borderRadius={4}
            >
            { !selectedFile ?    
                (
                <>
                <Button 
                    variant={'outline'}
                    height={'28px'}
                    onClick={() => selectedFileRef.current?.click()}
                    >Upload
                </Button>
                <input 
                    ref={selectedFileRef} 
                    type='file' 
                    hidden
                    onChange={onSelectImage}
                    />
                    
                    </> 
                    ) : (
                    <Flex
                        justify={'center'}
                        align={'center'}
                        direction={'column'}
                        gap={5}

                    >
                        <Image 
                            maxWidth={'400px'} 
                            maxHeight={'400px'} 
                            src={selectedFile} 
                            alt='this is post image'/>

                        <Stack direction={'row'}>
                            <Button
                                onClick={() => setSelectedTab('Post') }
                            >Back to Post
                            </Button>
                            <Button
                                onClick={() => setSelectedFile('')}
                            >Remove
                            </Button>
                        </Stack>
                    
                    </Flex>
                    )
                     

               
                    
                }

            </Flex>

        </Flex>

    )
}
export default ImageUpload;