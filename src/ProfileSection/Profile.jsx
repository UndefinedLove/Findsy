// Profile.jsx

import React, { useEffect, useState } from "react";
import { db ,auth ,app } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";

function Profile() {
  const [userData, setUserData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userRef = doc(db, 'users', auth.currentUser.uid);
  //       const querySnapshot = await getDoc(userRef);
  //       const userDataArray = [];
  //       querySnapshot ;
  //       setUserData(userDataArray);
  //     } catch (error) {
  //       console.error("Error getting user data: ", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRef = doc(db, 'users', auth.currentUser.uid); // Use auth.currentUser.uid to get the current user's ID
        const userDoc = await getDoc(userRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error("Error getting user data: ", error);
      }
    };

    fetchData();
  }, []);

  console.log(getAuth(app).currentUser.uid);

  return (
    // <div>
    //   <h2>User Profiles</h2>
    //   {userData((user, index) => (
    //     <div key={index}>
    //       <h3>{user.name}</h3>
    //       <p>Age: {user.age}</p>
    //       <p>Gender: {user.gender}</p>
    //       <p>Preferences: {user.preferences}</p>
    //       {/* Display other user data */}
    //     </div>
    //   ))}
    // </div>

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
