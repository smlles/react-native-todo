import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import config from '../../Firebase.json'


//iniitializeApp() 
//Firebase SDK를 내 프로젝트에 연결해주는 함수
//config에 들어있는 정보로 firebase랑 연결해줘

// Initialize Firebase
const app = initializeApp(config);