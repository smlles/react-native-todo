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
  //버튼 
  buttonBackground : colors.blue,
  buttonTitle:colors.white,
  buttonUnFilledTitle : colors.blue,
  //헤더
  headerTintColor:colors.black,

  //Spinner
  spinnerBackground : colors.black,
  spinnerIndicator : colors.white,
  
}

