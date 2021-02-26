
import React, { useState ,useEffect} from 'react';
import {
  StyleSheet
  , Text,
  View,
  FlatList,
  TextInput, TouchableOpacity, Dimensions
} from 'react-native';
import { log } from 'react-native-reanimated';

import { connect } from 'react-redux';

const renderitem=({item})=>{
  return (
    <View>
      <Text
        style={{fontSize:20,
        marginTop:20
        
        }}
      >{item.Orginaltext}</Text>
      <TouchableOpacity onPress={()=>{
        let form = new FormData();
        form.append("server_key", "5bda6652fe66a3e69331fb4d655db3ba");
        form.append("post_id",item.post_id);
        form.append("action","like");
        fetch("https://notifyx.site/hivedin6/api/post-actions?access_token=913cd54c47ad6793e28261d41dfe3833c97b54b262320ea66cab4283ef5a7cf84b578cd91367565015d496c747570c7e50bdcd422bee5576",{
          method:"POST",
          body:form,
        })
        .then(response=>response.json())
        .then(data=>console.log(data));
      }}>
        <Text
        
          style ={{fontSize:15,marginTop:20}}
        >Like</Text>
      </TouchableOpacity>
    </View>
  )
}
function Info(props) {

  const [data,setData] = useState([]);
  // useEffect(ok);
  async function ok(){
    let fdata = new FormData();
    fdata.append("server_key", "5bda6652fe66a3e69331fb4d655db3ba");
    fdata.append("type", "get_news_feed");
    fdata.append("limit", 10);
    let res = await fetch("https://notifyx.site/hivedin6/api/posts?access_token=913cd54c47ad6793e28261d41dfe3833c97b54b262320ea66cab4283ef5a7cf84b578cd91367565015d496c747570c7e50bdcd422bee5576", {
      method: "POST",
      body: fdata,
    })
    let ans = await res.json()
    setData(ans.data)
    // .then(response => response.json())
    // .then(data => {
    //   setData(data)
    // })

  }
  ok();
  // console.log(data);
  return (
    <View style={{flex:1}}>
      <View style={styles.info}>
        <Text
          style={styles.infotext}
        >
          Hello   {props.name}
        </Text>


        <TouchableOpacity style={styles.createpost}
          onPress={() => {
            props.changeIt({})
            props.navigation.navigate("Createpost")
          }}
        >
          <Text
            style={styles.logouttext}
          >
            Create
            </Text>
        </TouchableOpacity>
      </View>

        <FlatList
          data={data}
          renderItem={renderitem}
        />
      {/* Logout */}
      <TouchableOpacity style={styles.logout}
        onPress={() => {
          props.changeIt({})
          props.navigation.navigate("Register")
        }}
      >
        <Text
          style={styles.logouttext}
        >
          Logout
            </Text>
      </TouchableOpacity>
    </View>
  );
}
const {width} = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    // alignItems:'center'
  },
  info: {
    // flex: 1,
    marginLeft: 30,
    marginTop: 40,
    flexDirection: "row",
    width: width,
    height:60,
    borderBottomColor:"black",
    borderBottomWidth:5
  },
  infotext: {
    marginBottom: 20,
    color: "red",
    fontSize: 20,
    marginRight: 50,
  },
  logout: {
    backgroundColor: "grey",
    width: 150,
    height: 50,
    borderRadius: 30,
    alignItems: 'center'
  },
  logouttext: {
    marginTop: 10,
    fontSize: 20,
    color: 'green'
  },
  createpost: {
    backgroundColor: "grey",
    width: 100,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    marginLeft: 50,
  },
  inputsbox: {
    marginTop:38
    // flexDirection: 'row'
  }
});

const mapSateToProps = (state) => {
  return state
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeIt: (name) => {
      dispatch({ type: "CHANGE_IT", payload: name })
    }
  }
}
export default connect(mapSateToProps, mapDispatchToProps)(Info);