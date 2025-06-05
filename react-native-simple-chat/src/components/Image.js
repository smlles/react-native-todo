import styled from "styled-components";
import {MaterialIcons} from '@expo/vector-icons'
import Button from "./Button";
import { Platform, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker'
import { useEffect } from "react";

const Container = styled.View`
    align-self : center;
    margin-bottom : 20px;
`

const ButtonContainer = styled.Pressable`
    background-color: ${({theme}) => theme.imageButtonBackground};
    position : absolute;
    bottom : 0;
    right : 0;
    width : 30px;
    border-radius : 15px;
    justify-content : center;
    align-items : center;
`

const StyledImage = styled.Image`
    background-color : ${({theme}) => theme.ImageBackground};
    width : 100px;
    height : 100px;
    border-radius : ${({rounded}) => (rounded ? 50 : 0)}px;
`;

const ButtonIcon = styled(MaterialIcons).attrs({
    name: 'photo-camera',
    size : 22,
})`
    color : ${({theme}) => theme.imageButtonIcon};
`
//버튼 컴포넌트를 정의
const PhotoButton = ({onPress}) => {
    return(
        <ButtonContainer onPress={onPress}>
            {/* 버튼 안에 아이콘을 삽입 */}
            <ButtonIcon />
        </ButtonContainer>
    )
}

//권한을 요청하는 함수
const requestPermission = async () => {
            try {
                //플랫폼이 ios일 때만 권한 요청(Android는 별도의 권한 요청이 필요 없을 수 있다.)
                if(Platform.OS === 'ios'||Platform.OS === 'android'){
                    //미디어 라이브러리 접근 권한 요청을 비동기적으로 요청
                    const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
                    if(status !== 'granted'){
                        alert('Photo Permission', 'Please turn on the camera role permissions')
                    }
                }
            } catch (error) {
                alert('Photo Permission Error', error.message);
            }
        }

const Image = ({
        url, 
        imageStyle, 
        rounded, 
        showButton=false, 
        onChangeImage
}) => {
    useEffect(() => {
        requestPermission(); //컴포넌트 마운트시 권한을 요청
    },[]);

    //사용자가 "이미지 선택"버튼을 눌렀을 때 호출되는 함수
    const _handleEditButton = async () => {
        try {
            //이미지 라이브러리(갤러리)에서 이미지를 선택할 수 있는 인터페이스를 띄운다.
            //사용자가 이미지를 선택하면, 그 결과를 반환하고
            //취소하면 canceled : true를 반환한다.
            const result = await ImagePicker.launchImageLibraryAsync({
                //이미지 타입만 선택할 수 있도록 설정
                mediaTypes : ImagePicker.MediaTypeOptions.Images,
                allowsEditing : true,
                aspect: [1,1],
                quality : 1,
            })
             console.log('📷 ImagePicker result:', result);
            //사용자가 이미지 선택을 취소하지 않았다면
            if(!result.canceled){
                //선택된 이미지 정보가 담긴 배열의 첫번째 항목에서 URI를 추출한다.
                const imageUri = result.assets[0].uri;
                //추출한 이미지 URI를 부모 컴포넌트에 전달하여 이미지 변경을 알린다.
                onChangeImage(imageUri);
            }
        } catch (error) {
            alert('Photo Error',error.message);
        }       
    }
    return(
        <Container>
            <StyledImage 
                source={{uri : url}} 
                style={imageStyle}
                rounded={rounded}/>
            {/* showButton이 true면 버튼을 렌더링 */}
            {showButton && <PhotoButton onPress={_handleEditButton}/>}
        </Container>
    )
}

export default Image;
