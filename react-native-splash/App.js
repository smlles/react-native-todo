import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect,useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Entypo from '@expo/vector-icons/Entypo'

SplashScreen.preventAutoHideAsync();

// SplashScreen.setOptions({
//   duration : 1000,
//   fade : true,
// })

export default function App() {
  // 앱 준비 완료 여부
  const [isReady,setIsReady]=useState(false);

  useEffect(()=>{
    // 비동기로 초기 리소스 로딩 작업 하는 함수
    async function prepare(){
      try {
        // Entypo 폰트 미리 로딩
        await Font.loadAsync(Entypo.font);
        // 테스트용으로 지연 시키는 코드
        await new Promise(resolve=>setTimeout(resolve,2000));
      } catch (error) {
        console.warn(e);
      }finally {
        setIsReady(true);
      }
    }
    prepare();
  },[])//isReady값이 변경되면 새로 정의

  //최초 화면이 준비되면, 스플래시 화면을 숨기기 위한 함수
  const onLayoutRootView = useCallback(()=>{
    if(isReady){//앱이 준비 되었다면
      SplashScreen.hide();//스플래시 화면 종료
    }
  },[isReady])

  //앱 준비가 안되면, 아무것도 렌더링 하지않고 스플래시 유지
  if(!isReady){
    return null
  }

  return (
    <View 
    style={styles.container}
    // View가 그려진 직후 호출되는 이벤트
    onLayout={onLayoutRootView}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
