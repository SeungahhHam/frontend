1. 프로젝트 폴더에서 터미널 열고, 해당 명령어 입력하여 라이브러리 설치.
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
yarn add @react-navigation/bottom-tabs
yarn add react-native-screens
yarn add react-native-safe-area-context
yarn add react-native-vector-icons
>> android/app/build.gradle 디렉토리에서 최하단에 다음 코드 추가
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
project.ext.vectoricons =[
    iconFontNames:['MaterialIcons.ttf','MaterialCommunityIcons.ttf']
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 

빼놓은 라이브러리 있을수도 있으니 실행시켜보고 오류 비교해가면서 라이브러리 추가로 다운받으세요

---------추가라이브러리(4/30)-----------
yarn add uuid
yarn add react-native-get-random-values
yarn add @react-native-community/async-storage
yarn add date-fns	//날짜 포맷팅 라이브러리
yarn add react-native-swiper	//슬라이드쇼 라이브러리
yarn add react-native-progress	// 상태진행바 관련 라이브러리

-------------(5/5)----------------
yarn add react-native-multi-selectbox	//키워드 선택에 필요한 멀티선택바 라이브러리
yarn add react-native-svg	//키워드 선택에 필요한 멀티선택바 라이브러리
yarn add react-native-image-picker	//이미지 처리 관련 라이브러리
-------------(5/12)-------------------
yarn add Styled-components
yarn add react-native-webview
yarn add react-native-geolocation-service
yarn add react-native-maps
<권한설정>
1.아래경로 들어가기
android/app/src/main/AndroidMainfest.xml

2. <uses-permission android:name="android.permission.INTERNET" /> 바로 밑에 추가
---------------------------------------------------------------------------------------------
 <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />		//사진 라이브러리 접근권한
 <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />		//카메라 찍는거 접근권한
 <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
 <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />		//위치정보 받기위한 권한들
---------------------------------------------------------------------------------------------

>> android/app/build.gradle 디렉토리에서 최하단에 다음 코드 추가
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
project.ext.vectoricons =[
    iconFontNames:['MaterialIcons.ttf','MaterialCommunityIcons.ttf']
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 
