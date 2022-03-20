import { app, auth } from "../../firebase.js";
import { getFirestore, collection as firestoreCollection, doc, getDoc } from "firebase/firestore"
import { useAuthState as getAuthState } from 'react-firebase-hooks/auth';
import { useCollection as getCollection } from 'react-firebase-hooks/firestore';

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

export const useUser = async (uid) => {
    const firestore = useFirestore()
    const docRef = doc(firestore, "users", uid)
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
        return docSnap.data()
    }
    return null
}