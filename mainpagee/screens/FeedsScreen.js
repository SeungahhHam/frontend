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
  BackHandler
} from 'react-native';
import Styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
//import KeywordButton from '../components/KeywordButton';
import axios from "axios";
import {BASE_URL} from '../config'
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const Container = Styled.View``;

const FeedsSCREEN = ({ navigation }) => {

  
  /*const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  
  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    // <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    //   <Text style={[styles.title, textColor]}>{item.title}</Text>
    // </TouchableOpacity>

<View style={{marginBottom:15,}}>
<Image 
  resizeMode='cover' 
  style={{width:'100%',height:300,zIndex:5}}  
  source={require('../Assets/images/user.png')}
  />
</View>

  );*/

  const [selectedId, setSelectedId] = useState(null);
  const [title, setTitle] = useState("");

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  function Handle()
  {
    
      navigation.navigate('ListPage',{ gtype:"search", keyword: title } )
    
  }



  //const { gtype } = null
/*   const gtype = route.prams.gtype;
  const keyword =  route.prams.keyword; */
  const [feedList, setData] = useState("");
  const [feedList2, setData2] = useState("");
  const isFocused = useIsFocused();

  const [userToken, setUserToken] = useState('eyJhbGciOiJIUzI1NiJ9.NjI3MWZmODI0YzQ5ODA0NzRhODkxYjhm.nR6p6n_7Xu0hRTm4BaDtr6IRVg2dXXoKFmf20k04n1s');
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {    
    async function load() {
      try {
        await AsyncStorage.getItem('userData', (err, result) => {  
          const saveduserDatas = JSON.parse(result);
          fetch(`${BASE_URL}/api/mountInfo/main`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token: saveduserDatas.token }),
          })
          .then(response => response.json())
          .then(json => setData(json))
          .catch(error => console.error(error))
          .finally(() => setLoading(false))
        });
      } catch (e) {}
    }
    load();
        
      
    },[]);


  // const url="http://3.34.32.228:5000/api/mountInfo/main";
  // console.log(url);

  // var params = {}

  // const _callApi = async () => {

  //   //setLoading(true); //추가한 부분
  //   try {     

  //     const res = await axios.post( url , params );
  //     console.log("res.data.result[0]===>" + res.data);      
  //     setData(res.data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };



   
   const ImageList= loading ? (
    <Text>Loading...</Text>
  ) : (feedList.slice(0, 5).map((list) => (
    <View style={styles.slide1}>
        <Image style={{width: '100%',height: '70%'}}
        source = {{ uri: list.mntnattchimageseq}}></Image>
        <Text style= {{paddingTop: 10, color: '#009688',fontSize: 17,fontWeight: 'bold',backgroundColor:'#fff'}}> {list.mntnnm} </Text>
    </View>              
     )));

     const isselcted = val => {
      setSelectionMode(val);};

  return (
    
    <View>
      <ScrollView style={{paddingTop: 10,flexDirection:'column',height:'100%',backgroundColor:'#ffffff'}}>
        
        <View style={{marginBottom:20,paddingHorizontal:15,justifyContent:'center'}}>
          <View style={{flexDirection:'row',borderWidth:2,borderColor:'#009688',borderRadius:10,backgroundColor:'#ffffff'}}>

            <TouchableOpacity onPress={() => Handle()}>
            <View style={{flexShrink:0,width:40,height:40,justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'#009688'}}>
              <Text style={{textAlign:'center',color:'#eee',fontSize:12,}}>검색</Text>
            </View>
            </TouchableOpacity>

            <View style={{flex:1,height:40}}>
              <TextInput
              onChangeText={(text) => setTitle(text)}
              ></TextInput>
            </View>
          </View>
        </View>

        {/* slide 컨테이너 */}
         <View
            style={{
                zIndex: 9999,
                bottom: 0,
                minHeight: 100,
                borderRadius: 30,
                backgroundColor: '#ffffff',
                width: '100%',
                paddingHorizontal: 34,
                paddingTop: 10,
                paddingBottom: 10,
                flexDirection: 'column',
                alignItems: 'center',
                
            }} > 

                {
                  <Swiper style={styles.wrapper} showsButtons={false}>
                     {ImageList}
                  </Swiper>              
                }
        </View>
 


        <View style={{paddingHorizontal:15, paddingBottom:40 }}>


          <View style={{flexDirection:'row',flexWrap:'wrap',alignItems:'center',justifyContent:'center',marginTop:30,paddingHorizontal:15,}}>
            <View style={{width:'33.33%',padding:5,}}>
            <TouchableOpacity onPress={() => navigation.navigate('ListPage',{ gtype:"keyword", keyword: "100대명산" } )}>
              <View style={{height:40,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'#009688'}}><Text style={{color:'#eee'}}>#100대 명산</Text></View>
            </TouchableOpacity>
            </View>

            <View style={{width:'33.33%',padding:5,}}>
            <TouchableOpacity onPress={() => navigation.navigate('ListPage',{ gtype:"keyword", keyword: "겨울" })}>
              <View style={{height:40,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'#009688'}}><Text style={{color:'#eee'}}>#겨울 산</Text></View>
              </TouchableOpacity>
            </View>

            <View style={{width:'33.33%',padding:5,}}>
            <TouchableOpacity onPress={() => navigation.navigate('ListPage',{ gtype:"keyword", keyword: "단풍" })}>
              <View style={{height:40,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'#009688'}}><Text style={{color:'#eee'}}>#단풍이 예쁜</Text></View>
              </TouchableOpacity>
            </View>

            <View style={{width:'33.33%',padding:5,}}>
            <TouchableOpacity onPress={() => navigation.navigate('ListPage',{ gtype:"keyword", keyword: "난이도_하" })}>
              <View style={{height:40,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'#009688'}}><Text style={{color:'#eee'}}>#난이도 하</Text></View>
              </TouchableOpacity>
            </View>

            <View style={{width:'33.33%',padding:5,}}>
            <TouchableOpacity onPress={() => navigation.navigate('ListPage',{ gtype:"keyword", keyword: "난이도_중" })}>
              <View style={{height:40,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'#009688'}}><Text style={{color:'#eee'}}>#난이도 중</Text></View>
              </TouchableOpacity>
            </View>

            <View style={{width:'33.33%',padding:5,}}>
            <TouchableOpacity onPress={() => navigation.navigate('ListPage',{ gtype:"keyword", keyword: "난이도_상" })}>
              <View style={{height:40,alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'#009688'}}><Text style={{color:'#eee'}}>#난이도 상</Text></View>
            </TouchableOpacity>
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
   
  );
};

const styles = StyleSheet.create({

  /*flexcolumn2: { flexDirection:'column', marginTop:50},
  formdl: { marginBottom: 25,flexDirection: 'column',  },
  formdt: {marginBottom: 10,},
  formdd: {flexDirection:'row'},
  formTit: {paddingHorizontal: 15,lineHeight: 15,fontSize: 12,color: '#000',  },
  formInput: {flex:1,paddingHorizontal: 15,height:48,lineHeight: 48,fontSize: 15,color: '#444',backgroundColor: '#f2f2f1',borderRadius: 10,  },
  formTextarea: {paddingHorizontal: 15,paddingVertical: 15,height:114,lineHeight: 48,fontSize: 15,color: '#444',backgroundColor: '#f2f2f1',borderRadius: 10,  },
  formSelect: {paddingHorizontal: 15,height:48,lineHeight: 48,fontSize: 15,color: '#444',backgroundColor: '#f2f2f1',borderRadius: 10,},
  formBtn: {marginLeft:12,flexShrink:0,flexBasis:100,borderWidth:1,borderColor:'#ddd',color:'#a8a8a8',height:48,lineHeight: 48,fontSize: 14,borderRadius: 10,textAlign:'center'},
  formError:{marginTop:8,paddingHorizontal:15,lineHeight:14,fontSize:12,color:'#ff3c51'},
  formDrop:{position:'absolute',top: '50%',right: 20,marginTop: -6,},

  myaccountTop:{flexDirection:'row',justifyContent:'space-between',marginBottom:25,},
  myaccountTit:{lineHeight:32,fontSize:18,fontWeight:'600',color:'#000'},
  myaccountAct:{flex:0,flexShrink:1,paddingHorizontal:18,lineHeight:32,fontSize:14,fontWeight:'300',color:'#a8a8a8',borderRadius:32,borderWidth:1,borderColor:'#a8a8a8',backgroundColor:'#fff'},

  myaccountBot:{marginTop:10,marginBottom:10 },
  myaccountdt:{flex:0,flexShrink:1,lineHeight:20,paddingLeft:15,fontSize:12,fontWeight:'300',color:'#8d8d8f',width:160, borderTopRightRadius:30,borderTopLeftRadius:30},
  myaccountdl:{flexDirection:'row',paddingRight:15,justifyContent:'space-between',alignItems:'center',paddingTop:15,paddingBottom:15,},    
  myaccountdd:{flex:0,flexShrink:1,lineHeight:20,fontSize:14,fontWeight:'600',color:'#000',textAlign:'right',width:250, marginTop:5 ,marginBottom: 5 },
  */
  bgwhite: { backgroundColor : "#ffffff"},
  wrapper :{ height:400 },

  slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff'
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
      fontWeight: 'bold'
  }
  
})

export default FeedsSCREEN;