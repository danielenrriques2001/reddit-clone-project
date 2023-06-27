import { Community, communityState } from '@/atoms/communitiesAtom';
import { auth, firestore } from '@/firebase/clientApp';
import { collection, doc, getDocs, increment, writeBatch } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { CommunitySnippet } from '@/atoms/communitiesAtom';


const useCommunityData = () => {



    const [communityStateValue, setCommunityStateValue] = useRecoilState(communityState);

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [user] = useAuthState(auth)


    useEffect(() => {

        if(!user) return;
        getMySnippets();

    }, [user])
    

    const onJoinOrLeaveCommunity = (communityData: Community, isJoined: boolean) => {
        //is the user sign in?
            //if not, open the modal sign in
        
        if(isJoined) {
            leaveCommunity(communityData.id)
    
            return;
        }
        joinCommunity(communityData)




    } 

    const getMySnippets = async () => {
        setLoading(true)

        try {
            //get users snippets
            const snippetsDocs = getDocs(collection(firestore, `users/${user?.uid}/communitySnippets`));

            const snippets = (await snippetsDocs).docs.map(doc => (
                {...doc.data()}
                ))

            setCommunityStateValue(prev => ({
                ...prev,
                mySnippets: snippets as CommunitySnippet[],
            }))
            
        } catch (error) {
            console.log('Getmysnippets Error', error)
        } finally {
            setLoading(false)
        }
    }

    const joinCommunity = async (communityData: Community) => {

        //batch write

            //creating a new community Snippets for this user

            //updating the new of members on this community

        setLoading(true)


        try {
            const batch = writeBatch(firestore)
            const newSnippet:  CommunitySnippet = {
                communityId: communityData.id,
                imageURL: communityData.imageUrl || '',
            };

            //
            batch.set(
                doc(
                    firestore, 
                    `users/${user?.uid}/communitySnippets`, 
                    communityData.id
                    ), 
                    newSnippet)

            batch.update(doc(firestore, 'communities', communityData.id), {
                numberOfMembers: increment(1),
            });

            await batch.commit()

            //update recoil state - communityState.mySnippets
            setCommunityStateValue(prev =>  ({
                ...prev,
                mySnippets: [...prev.mySnippets, newSnippet]
            }))

            
        } catch (error: any) {
                console.log('JoinCommunityError---', error)
                setError(error.message)
        } finally {
            setLoading(false)
        }

        







    }
    const leaveCommunity = async (communityDataId: string) => {

        setLoading(true)

        try {
            const batch = writeBatch(firestore)
         
            //delete snippets from the user
            batch.delete(
                doc(
                    firestore, 
                    `users/${user?.uid}/communitySnippets`, 
                    communityDataId
                    ))

            batch.update(doc(firestore, 'communities', communityDataId), {
                numberOfMembers: increment(-1),
            });

            await batch.commit()

            //update recoil state - communityState.mySnippets
            setCommunityStateValue(prev =>  ({
                ...prev,
                mySnippets: prev.mySnippets.filter(item => item.communityId !== communityDataId)
            }))

            
        } catch (error: any) {
                console.log('LeaveCommunityError---', error)
                setError(error.message)
        } finally {
            setLoading(false)
        }


    }
    
    return {
        communityStateValue,
        onJoinOrLeaveCommunity,
        loading
    }
}
export default useCommunityData;