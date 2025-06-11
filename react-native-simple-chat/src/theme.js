//프로젝트에서 사용 할 색깔을 관리
const colors ={
  white : '#fff',
  black : '#000',
  grey_0 : '#d5d5d5',
  grey_1 : '#a6a6a6',
  red : '#e84118',
  blue: '#3679fe',
}

export const theme ={
  //배경색
  background : colors.white,
  //글자색
  text : colors.black,
  
  //이미지 관련
  imageBackground : colors.grey_0,
  imageButtonBackground: colors.grey_0,
  imageButtonIcon:colors.white,

  //Input 관련 
  label:colors.grey_1,
  inputPlaceholder : colors.grey_1,
  inputBorder:colors.grey_1,
  errorText:colors.red,
  inputDisabledBackground: colors.grey_0,

  //버튼 
  buttonBackground : colors.blue,
  buttonTitle:colors.white,
  buttonUnFilledTitle : colors.blue,
  buttonLogout : colors.red,
  sendButtonctive:colors.blue,
  sendButtonInactive:colors.grey_1,

  //헤더
  headerTintColor:colors.black,

  //Spinner
  spinnerBackground : colors.black,
  spinnerIndicator : colors.white,
  
  //Tab style
  tabActiveColor : colors.blue,
  tabInactiveColor : colors.grey_1,

  //List style
  listTime : colors.grey_1,
  listDescriptiojn : colors.grey_1,
  listIcon : colors.black,
  listBorder : colors.grey_0,

}

