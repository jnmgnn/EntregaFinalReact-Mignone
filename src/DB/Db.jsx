import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, getDoc, addDoc, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA-2WAuCeVFrItp3WxfQMKS89Q61GJ4MwQ",
  authDomain: "workshopproyecto.firebaseapp.com",
  projectId: "workshopproyecto",
  storageBucket: "workshopproyecto.appspot.com",
  messagingSenderId: "304079774786",
  appId: "1:304079774786:web:496389cd66fd95d1d139db"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const orderCollections = collection(db, "orders")
export const productsCollections = collection(db, 'products')
export const getProductList = async () => {
  const querySnapshot = await getDocs(collection(db, "Items"));
  return querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } })
}
export const getProductData = async (id) => {
  const docRef = doc(db, "Items", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() }
  }
}

export const generateOrder = async (formData) => {
  const docRef = await addDoc(collection(db, "Orders"),formData);
  return docRef.id
}