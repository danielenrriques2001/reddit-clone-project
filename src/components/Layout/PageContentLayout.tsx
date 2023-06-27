import { Flex } from '@chakra-ui/react';
import React from 'react';

type PageContentLayoutProps = {
    children: any
    
};

const PageContentLayout:React.FC<PageContentLayoutProps> = ({children}) => {
    
    return (

        <Flex 
            border={'1px solid red'}
            justify={'center'}
            p={'16px 0px'}

            >
            <Flex 
                border={'1px solid green'}
                width={'95%'}
                justify={'center'}
                maxWidth={'860px'}
                gap={{base: 0, md: 6}}
                >
                <Flex 
                    border={'1px solid blue'}
                    direction={'column'}
                    width={{base: '100%', md: '65%'}}
                    
                    >
                    {children && children[0 as keyof typeof children]}
                </Flex>

                <Flex 
                    border={'1px solid orange'}
                    display={{base: 'none', md: 'flex'}}
                    direction={'column'}
                    flexGrow={1}

                    >

                    {children && children[1 as keyof typeof children]}

                </Flex>
            </Flex>
           
        </Flex>
    )
}
export default PageContentLayout;