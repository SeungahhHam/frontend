import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import * as Progress from 'react-native-progress';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

function ProgressBar() {
    //화면 가로 면적
    const layout = useWindowDimensions();
    //유저 레벨, 진행률 값 받아오기 위한 변수
    // const [list, setLists] = useState([]);
    // const isFocused = useIsFocused();
  
    // useEffect(() => {
    //   fetch(`${BASE_URL}/api/user/auth`,{
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({token: 'eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s' }),
    //   })
    //     .then(response => response.json())
    //     .then(json => setLists(json))
    //     .catch(error => console.error(error))
    // },[isFocused] );

    return(
        //진행바(뱃지 달성률)
        <View>
            <View style={styles.progress}>
                {/*유저 레벨(임시값)*/}
                <Text style={styles.level}>Level 1</Text>
                <Progress.Bar 
                    progress={0.3} //진행률(임시값)
                    width={(layout.width)*4/5} //진행바 길이
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    level: {
        marginTop: 10,
        marginBottom: 5,
    },
    progress: {
        alignItems: 'center',
        marginBottom: 10,
    }
})

export default ProgressBar;