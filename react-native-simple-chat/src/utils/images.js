const prefix ='https://firebasestorage.googleapis.com/v0/b/react-native-simple-chat-3f04c.firebasestorage.app/o/'
//복사된 주소의 쿼리스트링에서 token 부분은 제외하고 사용.
//쿼리 스트링의 token은 현재 로그인 된 사용자에게 발급 된 값
//실제 사용 할 때에는 token이 변경 될 뿐만 아니라, 
//로그인 화면애서는 로그인 한게 아니라, token이 없는 상태로 접근해야함
export const images={
  logo : `${prefix}logo.png?alt=media`,
  photo : `${prefix}photo.png?alt=media`
}