import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    Image,
    FlatList,
} from 'react-native';
import {Text,Button} from 'react-native-elements';
import LoadingView from "../commen/LoadingView";
import * as URL from '../api/URL';
class Item extends Component{
    render() {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.itemImage} source={{uri:this.props.img}}/>
                <View style={styles.itemChildContainer}>
                    <Text style={styles.itemTitle}>{this.props.title}</Text>
                    <Text style={styles.itemContent}>导演：{this.props.director}</Text>
                    <Text style={styles.itemContent}>主演：{this.props.casts}</Text>
                    <Text style={styles.itemContent}>{this.props.wantNum}人想看</Text>
                </View>
                <View style={styles.center}>
                    <Button
                        rounded
                        title="想看"
                        color="#d81e06"
                        outline={true}
                        fontSize={12}
                        textStyle={{fontSize:12}}
                        buttonStyle={{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:0}}/>
                </View>
            </View>
        );
    }
}
export default class Becoming extends Component{
    constructor(props){
        super(props);
        this._renderItem=this._renderItem.bind(this);
        this._fetckData=this._fetckData.bind(this);
        this._onLoadMore=this._onLoadMore.bind(this);
        this.state={
            data:null,
            isLoading:true,
            start:0,
        };
    }

    getCasts(item){
        let result = '';
        for(let i=0;i<item.length;i++){
            result += item[i].name+"  ";
        }
        return result;
    }

    _renderItem(item){
        return <Item
            img={item.item.images.large}
            title={item.item.title}
            wantNum={item.item.collect_count}
            director={this.getCasts(item.item.directors)}
            casts={this.getCasts(item.item.casts)}/>
    }
    _fetckData(){
        fetch(URL.COMINGSOON,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                start:0,
            })
        })
            .then((response)=>response.json())
            .then((result)=>{
                console.log(result);
                this.setState({
                    isLoading:false,
                    data:result.subjects,
                    start:this.state.data==null ? 0 : this.state.data.length,
                });
            })
    }
    _onLoadMore(){
        fetch(URL.COMINGSOON,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify({
                start:this.state.start,
            })
        })
            .then((response)=>response.json())
            .then((result)=>{
                console.log(result);
                this.setState({
                    isLoading:false,
                    data:this.state.data.concat(result.subjects),
                    start:this.state.data.length,
                });
            })
    }

    componentDidMount(){
        this._fetckData();
    }
    render(){
        return this.state.isLoading?
            <LoadingView/>:
            <FlatList
                style={{backgroundColor:'#ddd'}}
                data={this.state.data}
                onRefresh={this._fetckData}
                refreshing={this.state.isLoading}
                onEndReached={this._onLoadMore}
                onEndReachedThreshold={5}
                renderItem={this._renderItem}/>
    }
}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:'white',
        borderRadius:5,
        padding:10,
        flexDirection:'row',
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:5,
    },
    itemImage:{
        height:120,
        width:85,
    },
    itemChildContainer:{
        marginLeft:15,
        flex:1,
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
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
    }
});