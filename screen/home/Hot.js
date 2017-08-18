import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native';
import {Text,List,ListItem,Avatar} from 'react-native-elements';

class Item extends Component{
    render(){
        return(
            <View style={styles.itemContainer}>
                <Image source={{uri:'http://img7.doubanio.com/img/celebrity/small/24543.jpg'}}
                        style={styles.itemImage}/>
                <View style={styles.itemChildContainer}>
                    <Text style={styles.itemTitle}>杀破狼 贪狼</Text>
                    <Text style={styles.itemContent}>导演：</Text>
                    <Text style={styles.itemContent}>主演：</Text>
                </View>
            </View>
        );
    }
}

export default class Hot extends Component{
    constructor(props){
        super(props);
        this.state={
            data:null,
        }
    }

    render(){
        return(
            <Item/>
        );
    }
}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:'white',
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:5,
        padding:5,
        flexDirection:'row',
    },
    itemImage:{
        width:70,
        height:100,
    },
    itemChildContainer:{
        marginLeft:15,
    },
    itemTitle:{
        fontWeight:'bold',
        fontSize:16,
        color:'#333',
    },
    itemContent:{
        fontSize:13,
        color:'#666',
        marginTop:3
    }
});