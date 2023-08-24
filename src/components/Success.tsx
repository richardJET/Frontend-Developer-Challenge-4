import { useEffect, useState } from 'react';
import app from './firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, get } from 'firebase/database';


export default function Success() {
    const [user, setUser] = useState<any>(null);
    const [userData, setUserData] = useState<any>(null);

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const db = getDatabase(app);
                const userRef = ref(db, `/${currentUser.uid}`);
                try {
                    const snapshot = await get(userRef);
                    if (snapshot.exists()) {
                        setUserData(snapshot.val());
                    } else {
                        setUserData(null);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            } else {
                setUserData(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);
 
    return (
        <section className="bg-warning pt-3 pb-5 flex-grow-1">
            {user && userData ? 
            <div className='container bg-white p-3'>
                <h2>Welcome, {userData.firstName} {userData.lastName}</h2> 
                <p>Username: {userData.username}</p>
                <p>Email: {user.email}</p>
                <p>User Type: {userData.userType}</p>
                <p>Language: {userData.language}</p>
            </div>
            : 
            <h2 className='container'>Not Logged In</h2>}
        </section>
    );
}