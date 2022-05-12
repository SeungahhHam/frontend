import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import KeywordButton from '../components/KeywordButton';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';

const FeedsSCREEN = ({navigation}) => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const Item = ({item, onPress, backgroundColor, textColor}) => (
    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //   <Text style={[styles.title, textColor]}>{item.title}</Text>
    // </TouchableOpacity>

    <View style={{marginBottom: 15}}>
      <Image
        resizeMode="cover"
        style={{width: '100%', height: 300, zIndex: 5}}
        source={require('../Assets/images/user.png')}
      />
    </View>
  );

  const [selectedId, setSelectedId] = useState(null);
  const [title, setTitle] = useState('관악산');

  const renderItem = ({item}) => {
    const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{backgroundColor}}
        textColor={{color}}
      />
    );
  };

  function Handle() {
    navigation.navigate('ListPage', {gtype: 'search', keyword: title});
  }

  //const { gtype } = null
  /*   const gtype = route.prams.gtype;
  const keyword =  route.prams.keyword; */
  const [feedList, setData] = useState('');
  const isFocused = useIsFocused();

  var params = {
    token:
      'eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s',
  };

  const url = 'http://3.34.32.228:5000/api/mountInfo/main';
  // console.log(url);

  const _callApi = async () => {
    //setLoading(true); //추가한 부분
    try {
      const res = await axios.post(url, params);

      console.log('res.data.result[0]===>' + res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    _callApi();
  }, [isFocused]);

  return (
    <View>
      <ScrollView
        style={{
          flexDirection: 'column',
          height: '100%',
          backgroundColor: '#ffffff',
        }}>
        {/* <View style={{padding:15,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <View style={{width:30,height:30,borderRadius:24,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,color:'#FFF'}}>SOS</Text>
          </View>
          <View>
            <Text style={{fontSize:16,fontWeight:'bold',color:'#000'}}>로고</Text>
          </View>
          <View style={{width:30,height:30,borderRadius:24,backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:12,color:'#FFF'}}>My</Text>
          </View>
        </View> */}
        <View
          style={{
            marginBottom: 50,
            paddingHorizontal: 15,
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#ddd',
              borderRadius: 5,
              backgroundColor: '#ffffff',
            }}>
            <TouchableOpacity onPress={() => Handle()}>
              <View
                style={{
                  flexShrink: 0,
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#eee',
                }}>
                <Text
                  style={{textAlign: 'center', color: '#111', fontSize: 12}}>
                  돋보기
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{flex: 1, height: 40}}>
              <TextInput onChangeText={text => setTitle(text)}></TextInput>
            </View>
          </View>
        </View>

        {/* slide 컨테이너 */}
        <View
          style={{
            zIndex: 9999,
            bottom: 0,
            minHeight: 100,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: '#f2f2f2',
            width: '100%',
            paddingHorizontal: 34,
            paddingTop: 40,
            paddingBottom: 40,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          {/* <Swiper style={[styles.wrapper]} showsButtons={false} >
           {feedList.reverse().map((list) => {

              <View style={styles.slide1}>                        
<View style={[styles.myaccountBot]}>
<Image 
resizeMode='contain' 
style={{zIndex:5,width: "100%",height:250}}  
source={require('./Assets/Images/Common/san1.jpg')}
/></View></View>})}
                       
                </Swiper>
                 */}
        </View>

        <View style={{paddingHorizontal: 15}}>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 30,
              paddingHorizontal: 15,
            }}>
            <View style={{width: '33.33%', padding: 5}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListPage', {
                    gtype: 'keyword',
                    keyword: '100대명산',
                  })
                }>
                <View
                  style={{
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#eee',
                  }}>
                  <Text>#100대 명산</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width: '33.33%', padding: 5}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListPage', {
                    gtype: 'keyword',
                    keyword: '겨울',
                  })
                }>
                <View
                  style={{
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#eee',
                  }}>
                  <Text>#겨울 산</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width: '33.33%', padding: 5}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListPage', {
                    gtype: 'keyword',
                    keyword: '단풍',
                  })
                }>
                <View
                  style={{
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#eee',
                  }}>
                  <Text>#단풍이 예쁜</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width: '33.33%', padding: 5}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListPage', {
                    gtype: 'keyword',
                    keyword: '난이도_하',
                  })
                }>
                <View
                  style={{
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#eee',
                  }}>
                  <Text>#난이도 하</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width: '33.33%', padding: 5}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListPage', {
                    gtype: 'keyword',
                    keyword: '난이도_중',
                  })
                }>
                <View
                  style={{
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#eee',
                  }}>
                  <Text>#난이도 중</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{width: '33.33%', padding: 5}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ListPage', {
                    gtype: 'keyword',
                    keyword: '난이도_상',
                  })
                }>
                <View
                  style={{
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 5,
                    backgroundColor: '#eee',
                  }}>
                  <Text>#난이도 상</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  flexcolumn2: {flexDirection: 'column', marginTop: 50},
  formdl: {marginBottom: 25, flexDirection: 'column'},
  formdt: {marginBottom: 10},
  formdd: {flexDirection: 'row'},
  formTit: {paddingHorizontal: 15, lineHeight: 15, fontSize: 12, color: '#000'},
  formInput: {
    flex: 1,
    paddingHorizontal: 15,
    height: 48,
    lineHeight: 48,
    fontSize: 15,
    color: '#444',
    backgroundColor: '#f2f2f1',
    borderRadius: 10,
  },
  formTextarea: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    height: 114,
    lineHeight: 48,
    fontSize: 15,
    color: '#444',
    backgroundColor: '#f2f2f1',
    borderRadius: 10,
  },
  formSelect: {
    paddingHorizontal: 15,
    height: 48,
    lineHeight: 48,
    fontSize: 15,
    color: '#444',
    backgroundColor: '#f2f2f1',
    borderRadius: 10,
  },
  formBtn: {
    marginLeft: 12,
    flexShrink: 0,
    flexBasis: 100,
    borderWidth: 1,
    borderColor: '#ddd',
    color: '#a8a8a8',
    height: 48,
    lineHeight: 48,
    fontSize: 14,
    borderRadius: 10,
    textAlign: 'center',
  },
  formError: {
    marginTop: 8,
    paddingHorizontal: 15,
    lineHeight: 14,
    fontSize: 12,
    color: '#ff3c51',
  },
  formDrop: {position: 'absolute', top: '50%', right: 20, marginTop: -6},

  myaccountTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  myaccountTit: {
    lineHeight: 32,
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  myaccountAct: {
    flex: 0,
    flexShrink: 1,
    paddingHorizontal: 18,
    lineHeight: 32,
    fontSize: 14,
    fontWeight: '300',
    color: '#a8a8a8',
    borderRadius: 32,
    borderWidth: 1,
    borderColor: '#a8a8a8',
    backgroundColor: '#fff',
  },

  myaccountBot: {marginTop: 10, marginBottom: 10},
  myaccountdt: {
    flex: 0,
    flexShrink: 1,
    lineHeight: 20,
    paddingLeft: 15,
    fontSize: 12,
    fontWeight: '300',
    color: '#8d8d8f',
    width: 160,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  myaccountdl: {
    flexDirection: 'row',
    paddingRight: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  myaccountdd: {
    flex: 0,
    flexShrink: 1,
    lineHeight: 20,
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'right',
    width: 250,
    marginTop: 5,
    marginBottom: 5,
  },

  bgwhite: {backgroundColor: '#ffffff'},
  wrapper: {}, //height:300

  slide1: {
    flex: 1,
    justifyContent: 'center',
    lignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default FeedsSCREEN;
