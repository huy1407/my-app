import { auth, firestore } from "firebase";

/**
 *
 * @param user
 * @param callback
 * @returns {() => void}
 */
export function getProfiledata(callback) {
    const user = auth.currentUser
    const profileRef = firestore.collection('users').doc(user.email);
    const unsub = profileRef.onSnapshot(docSnapshot => {
        if (docSnapshot.exists) {
            const doc = docSnapshot.data()
            if (callback) {
                callback(null, doc, docSnapshot)
            }
        }
    }, err => {
        console.log(`getProfiledata error: ${err}`);
        callback(err, null)
    });
    return unsub

}

export async function setProfiledata(data) {
    const user = auth.currentUser
    try {
        return await firestore.collection('users').doc(user.email).set(data)
    } catch (e) {
        console.log('setProfiledata error ', e)
        return e
    }
}

export function storagePhotoURLPath() {
    const now = new Date().toJSON()
    return `users/${auth.currentUser.email}/photoURLs/${now}`
}
