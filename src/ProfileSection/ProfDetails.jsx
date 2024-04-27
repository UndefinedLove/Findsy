import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import { db, imgDB, app } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
<<<<<<< HEAD
import { addDoc, collection,doc} from "firebase/firestore";
=======
import { doc, setDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
>>>>>>> 2a9299a3858b28777d7a0f97d94ef67c5b6a2782


function ProfDetails() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [preferences, setPreferences] = useState('');
  const [img, setImgUrl] = useState('')
  const [uid, setUid] = useState(null);


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


  const handleClick = async () => {
    const userData = { name, age, gender, preferences, img, };

    try {
      await setDoc(doc(db, 'users', uid), userData);
      alert("User data added successfully");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add user data: " + error.message);
    }
  };


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
