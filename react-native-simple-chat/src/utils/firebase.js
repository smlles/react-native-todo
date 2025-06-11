import { initializeApp } from "firebase/app";
import config from '../../Firebase.json'
import { 
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile, //로그인 한 유저의 프로필 업데이트 함수
 } from "firebase/auth";
import { 
    getStorage,//firebase와 연결된 storage 객체를 불러온다.
    ref, //Storage에 있는 파일이나 경로를 참조하는 객체
    uploadBytes,// storage에 파일을 업로드하는 함수
    getDownloadURL, //Storage에 업로드된 파일의 다운로드 URL을 가져온다.
 } from "firebase/storage";
import { 
  collection,
  getFirestore,
  doc,
  setDoc,
  addDoc, 
  serverTimestamp
} from "firebase/firestore";


//iniitializeApp() 
//Firebase SDK를 내 프로젝트에 연결해주는 함수
//config에 들어있는 정보로 firebase랑 연결해줘

// Initialize Firebase

export const app = initializeApp(config);
// 인증모듈 가져오기
const auth = getAuth(app);
  //Storage 인스턴스를 생성
 const storage = getStorage(app);
 //firestore dB 모듈 가져오기
export const db = getFirestore(app);

export const login = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

export const signup = async({email,password,name,photoURL}) => {
  console.log('f_url:',photoURL);
  //이메일/비밀번호를 기반으로 firebase의 auth에 사용자 등록
  //createUserWithEmailAndPassword함수는 이메일과 비밀번호만 인자로 받는데
  //어떻게 이름과 사진을 같이 저장할 수 있을까?
  //사용자 이름은 문자열로 입력할 수 있지만, 사진을 선택해서 받은 경로는 'file://...'로 시작하는
  //값을 가지고 있어 바로 사용할 수 없다.
  //사용자에 의해 선택한 사진을 firebase의 스토리지에 업로드해서 해결할 수 있다.
  const {user} = await createUserWithEmailAndPassword(auth,email,password);

  
  //프로필 사진 URL 처리
  //https로 시작하면 그대로 사용, 아니면 Storage에 업로드 후 URL을 획득해서 사용
  const photoUrl = await uploadImage(photoURL);

  //현재 로그인한 유저의 이름과 프로필 사진을 업데이트 합니다.
  await updateProfile(auth.currentUser, {displayName : name, photoURL : photoUrl});

  return user;
}

//이미지를 업로드하는 함수
const uploadImage = async uri => {
    if(!uri){
        return null
    }
  //이미 https로 시작하는 경우 바로 반환을 해라
  if(uri.startsWith('https')){
    return uri;
  }
  //로컬 파일을 fetch해서 blob데이터로 변환
  const response = await fetch(uri);
  //blob() : binaryLargeObject의 약자
  const blob = await response.blob();

  //현재 로그인한 유저의 uid를 가져온다.
  const {uid} = auth.currentUser;

  //Storage에 저장할 파일 경로를 설정
  const storageRef = ref(storage, `/profile/${uid}/photo.png`);

  //파일을 Storage에 업로드, 타입은 image/png로 명시
  await uploadBytes(storageRef, blob, {
    contentType : 'image/png',
  })

  return await getDownloadURL(storageRef);
}

export const logout=async()=>{
  return await auth.signOut();
}

export const getCurrentUser =()=>{
  //auth.currentUser에 로그인 된 사용자 정보가 있음
  //Profile 페이지도 인증이 필요한 화면이니까 email과 uid 필요
  //이름, 프로필 사진도 가져와야함
  //위에서부터 사진,이메일,이름,로그아웃
  //email,uid,name,photoUrl을 
  //구조분해 할당으로 객체 리터럴로 받아서 반환하기
  const {uid,email,displayName,photoURL}=auth.currentUser;
  return {
    uid,
    email,
    name : displayName,
    photoUrl: photoURL
  }
}

//프로필 사진 업데이트
export const updateUserPhoto =async photoUrl =>{
  //1.현재 로그인 한 사용자 불러오기.
  const user = auth.currentUser;
  //2.인자로 받은 photoUrl이 https로 시작하면 url 그대로 사용
  //아니라면, Storage에 업로드 후 firebase Storage URL 획득
  const storageUrl = photoUrl.startsWith('https') ? photoUrl : await uploadImage(photoUrl);
  
  //firebase auth의 updateProfile로 프로필사진 주소 수정
  await updateProfile(user, {photoURL:storageUrl});
  //업데이트된 사용자 정보를 객체 형태로 반환
  
  return {
    name : user.displayName,
    email:user.email,
    photoUrl:user.photoURL,
  }
}

//문서 생성하기;
export const createChannel =async({title,description})=>{
  // 1. 'channels' 컬렉션 참조 가져오기
  // 없는 컬렉션을 참조한대도 에러는 안난다
  const ChannelCollection = collection(db,'channels');

  // 2. 새 문서에 대한 참조 생성
  const newChannelRef =doc(ChannelCollection);

  // 3. 채널에 할당 될 고유 ID
  const id = newChannelRef.id;

  //4. 새 채널에 들어갈 필드값 구성
  const newChannel = {
    id,
    title,
    description,
    createAt:Date.now(),
  }
  
  //5. setDoc로 해당 문서 경로에 데이터 쓰기
  await setDoc(newChannelRef,newChannel);

  // 컬렉션은 없지만, 문서를 저장하면서 자동으로 만든다

  //6. 생성된 문서 ID 반환
  return id;
}

export const createMessage=async({channelId,text})=>{
  console.log('Sending message to channel : ',channelId,text)

  try{
    const collectionRef=collection(db,`channels/${channelId}/messages`)
    await  addDoc(collectionRef,{
      text,
      createdAt:serverTimestamp(),
    })
    console.log('Message added successfully!');
  }catch(error){
    console.error('Message added fail',error);
  }

}