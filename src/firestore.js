import { getFirestore } from "firebase/firestore";
import app from "./firebase.js";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
