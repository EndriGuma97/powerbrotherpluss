
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, deleteUser} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, query, getDocs, updateDoc} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyA2713XbuQjOs2PLjD8dPJdHIq30ZAZAtc",
    authDomain: "powerbrother-ca056.firebaseapp.com",
    projectId: "powerbrother-ca056",
    storageBucket: "powerbrother-ca056.appspot.com",
    messagingSenderId: "106080820557",
    appId: "1:106080820557:web:98f227b236ee582dbbeb04",
    measurementId: "G-CG61331Y3K"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
 prompt: "select_account"
});

export const auth = getAuth();

export const db = getFirestore();



export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    //if user data does not exist 
    if(!userSnapshot.exists()) {
        const { email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                email, createdAt,
                ...additionalInformation,
            })
        } catch (error) {
            console.log('error creating the user'. error.message)
        }
    }

    return userDocRef;
    //if user data exists

    

    //return userDocRef
}


export const getCategoriesAndDocument = async () => {
    const collectionRef = collection(db, 'users');
    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.map((docSnapshot) => {
        const { activityLevel, age, gender, goal, height, weight, email, createdAt, meals } = docSnapshot.data();
   return { age: age, activityLevel: activityLevel, gender: gender, goal: goal, height: height, weight: weight, email: email, createdAt: createdAt, meals: meals}
      }, {});
    
      return categoryMap;
}


  


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
export const deleteCurrentUser = async () => await deleteUser(auth.currentUser);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const updateDocMeal = async (userUID, updatedItem) => {
    const userRef = doc(db, 'users', userUID);
    await updateDoc(userRef, {
       meals: updatedItem,
    })
};

export const updateDocUser = async (userUID, updatedWeight, updatedHeight, updatedAge, updatedActivityLevel, updatedGoal) => {
    const userRef = doc(db, 'users', userUID);
    await updateDoc(userRef, {
        weight: updatedWeight,
        height: updatedHeight,
        age: updatedAge,
        activityLevel: updatedActivityLevel,
        goal: updatedGoal

    })
}

