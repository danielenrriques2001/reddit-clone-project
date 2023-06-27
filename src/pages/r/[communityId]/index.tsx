import { Community } from '@/atoms/communitiesAtom';
import CommunityNotFound from '@/components/Layout/404/CommunityNotFound';
import Header from '@/components/Layout/Community/Header';
import { firestore } from '@/firebase/clientApp';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSidePropsContext } from 'next';
import React from 'react';
import safeJsonStringify from 'safe-json-stringify'
type CommunityPageProps = {
    communityData: Community
    
};

const CommunityPage:React.FC<CommunityPageProps> = ({communityData}) => {

    console.log('here is the data:', communityData)

    if(!communityData) {
            return (
                <CommunityNotFound/>
            )
    }
    
    return  (
        <>
            <Header communityData={communityData}/>
        </>
    )
}




export async function getServerSideProps(context: GetServerSidePropsContext) {

    //get the community data and pass it to our component
    try {
        const communityDocRef = doc(
            firestore, 
            'communities', 
            context.query.communityId as string
        );

        const communityDoc = await getDoc(communityDocRef)

        return { props: { 
                    communityData: communityDoc.exists() 
                    ? JSON.parse(safeJsonStringify({
                        id: communityDoc.id,
                        ...communityDoc.data()
                    })) 
                    : ''
         } }

    } catch (error) {
        //could add error page here.
        console.log('---getServerSidePropsError--', error)
    }


   
  }

  export default CommunityPage;