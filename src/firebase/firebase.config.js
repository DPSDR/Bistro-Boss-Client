// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyAb7u4fPuuEo9m_ypni4ilTH18iEJMrC5w",
//     authDomain: "bistro-boss-restaurant-9f466.firebaseapp.com",
//     projectId: "bistro-boss-restaurant-9f466",
//     storageBucket: "bistro-boss-restaurant-9f466.appspot.com",
//     messagingSenderId: "249463954314",
//     appId: "1:249463954314:web:c85e6a3331cce7a2208673"
// };
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);