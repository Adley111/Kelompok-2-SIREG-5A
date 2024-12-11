import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase-config';

export async function saveAnswer(userID, jawaban) {
  try {
   
    const docRef = await addDoc(collection(db, "jawaban"), {
      userID: userID,
      jawaban: jawaban,
      timestamp: new Date().toISOString(),
    });
    console.log("Jawaban berhasil disimpan! ID Dokumen: ", docRef.id);
  } catch (error) {
    console.error("Error menyimpan jawaban:", error);
  }
}
