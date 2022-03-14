import { app } from "../../firebase.js";
import { getAuth } from "firebase/auth"
import { getFirestore, collection as firestoreCollection, doc, getDoc } from "firebase/firestore"
import { useAuthState as getAuthState } from 'react-firebase-hooks/auth';
import { useCollection as getCollection } from 'react-firebase-hooks/firestore';

export const useAuth = () => {
    return getAuth(app)
}

export const useAuthState = () => {
    console.log("useAuthState", getAuth(app))
    return getAuthState(useAuth())
}

export const useFirestore = () => {
    return getFirestore(app)
}

export const useCollection = (collection) => {
    return getCollection(firestoreCollection(useFirestore(), collection))
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