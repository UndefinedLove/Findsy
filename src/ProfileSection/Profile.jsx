import React, { useEffect, useState } from "react";
import { db, app } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function Profile() {
  const [userData, setUserData] = useState(null);
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {

          setUserData(userDoc&&userDoc.data());
          console.log(userDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error("Error getting user data: ", error);
      }
    };

    fetchData();
  }, [uid]);


  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUid(user.uid);
      } else {
        setUid(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>User Profile</h2>
      {userData && (
        <div>
          <h3>{userData.name}</h3>
          <p>Age: {userData.age}</p>
          <p>Gender: {userData.gender}</p>
          <p>Preferences: {userData.preferences}</p>
          {/* Display other user data */}
        </div>
      )}
    </div>
  );
}

export default Profile;
