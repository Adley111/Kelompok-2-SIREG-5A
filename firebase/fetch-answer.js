import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";

const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "jawaban"));
    const answersData = querySnapshot.docs.map(doc => doc.data());
    setAnswers(answersData);
  } catch (error) {
    console.error('Error fetching answers:', error);
  }
};
