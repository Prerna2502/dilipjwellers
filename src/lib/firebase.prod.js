import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD_2f8yV_p8xqKx4nkjcJqZlPy3DaHm2yk",
    authDomain: "dilipjwellers-349d0.firebaseapp.com",
    projectId: "dilipjwellers-349d0",
    storageBucket: "dilipjwellers-349d0.appspot.com",
    messagingSenderId: "461761585248",
    appId: "1:461761585248:web:b77bd8ae6bc4a3a568e305",
    measurementId: "G-KG5H50FN29"
  };

const Firebase = initializeApp(firebaseConfig);
export {Firebase};