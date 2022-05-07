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
    iconFontNames:['MaterialIcons.ttf']
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
