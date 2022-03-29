import { app, auth } from "../../firebase.js";
import { getFirestore, collection as firestoreCollection, doc, onSnapshot } from "firebase/firestore"
import { useAuthState as getAuthState } from 'react-firebase-hooks/auth';
import { useCollection as getCollection } from 'react-firebase-hooks/firestore';
import { useEffect, useState } from "react";

export const useAuthState = () => {
    if (!auth) {
        return [null, null, null]
    }
    return getAuthState(auth)
}

export const useFirestore = () => {
    if (!app) {
        return null;
    }
    return getFirestore(app)
}

export const useCollection = (collection) => {
    const firestore = useFirestore()
    if (!firestore) {
        return null;
    }
    return getCollection(firestoreCollection(firestore, collection))
}

export const _useCollection = (collection) => {
    const firestore = useFirestore();
    const [state, setState] = useState({ data: null, error: null });

    useEffect(() => {
        const colRef = firestoreCollection(firestore, collection);
        return onSnapshot(colRef, (snapshot) => {
            setState({ data: snapshot.docs.map(x => x.data()), error: null });
        }, (error) => {
            setState({ data: null, error })
        })
    })

    return state;
}

export const useUser = (uid) => {
    const firestore = useFirestore()
    const [userData, setUserData] = useState({ data: null, error: null });

    useEffect(() => {
        if (!uid) return;
        const docRef = doc(firestore, "users", uid)
        return onSnapshot(docRef, (docSnap) => {
            console.log(docSnap);
            setUserData({ data: docSnap.data(), error: null })
        }, (error) => {
            setUserData({ data: null, error })
        });
    }, [uid, firestore])

    return userData;
}