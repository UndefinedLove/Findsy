// StoreImageTextFirebase.jsx

import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { db, imgDB,auth } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addDoc,getDoc, collection,doc} from "firebase/firestore";


function ProfDetails() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [preferences, setPreferences] = useState('');
  // const [data, setData] = useState([])
  const [img, setImgUrl] = useState('')
  // Add state variables for other fields

  const handleUpload = (e) => {
    const imgRef = ref(imgDB, `images/${v4()}`);
    uploadBytes(imgRef, e.target.files[0]).then((snapshot) => {
      console.log('Uploaded a blob or file!', snapshot);
      getDownloadURL(imgRef).then((url) => {
        console.log('File available at', url);
        setImgUrl(url);
      });
    });
  };
// const handleUpload = (e) =>{
//     console.log(e.target.files[0])
//     const imgs = ref(imgDB,`Imgs/${v4()}`)
//     uploadBytes(imgs,e.target.files[0]).then(data=>{
//         console.log(data,"imgs")
//         getDownloadURL(data.ref).then(val=>{
//             setImg(val)
//         })
//     })

  const handleClick = async () => {
    const userData = {
      name,
      age,
      gender,
      preferences,
      img,
      // Add other fields as needed
    };

  //   try {
  //     const userRef = collection(db, 'users');
  //     await addDoc(userRef, userData); 
  //     // await addDoc(valRef,{txtVal:txt,imgUrl:img})
  //     alert("User data added successfully");
  //   } catch (error) {
  //     console.error("Error adding document: ", error);
  //   }
  // };
  try {
    const userRef = doc(db, 'users', auth.currentUser.uid); // Use auth.currentUser.uid to get the current user's ID
    await addDoc(collection(userRef, 'profile'), userData); // Add user data to a 'profile' subcollection
    alert("User data added successfully");
  } catch (error) {
    console.error("Error adding document: ", error);
    alert("failed to add user data "+ error.message)
  }
};

  // const getData = async () => {
  //   const userRef = collection(db, 'users', auth.currentUser.uid);
  //   const querySnapshot = await getDocs(userRef);
  //   const userData = [];
  //   querySnapshot.forEach((doc) => {
  //     userData.push(doc.data());
  //   });
  //   setData(userData);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br />
      <input type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br />
      <input type="text" placeholder="Gender" value={gender} onChange={(e) => setGender(e.target.value)} /><br />
      <input type="text" placeholder="Preferences" value={preferences} onChange={(e) => setPreferences(e.target.value)} /><br />
      {/* Add input fields for other user data */}
      <input type="file" onChange={handleUpload} /><br /><br />
      <button onClick={handleClick}>Add User</button>
    </div>
  );
}

export default ProfDetails;
