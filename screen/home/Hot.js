import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    FlatList,
    Image,
} from 'react-native';
import {Text,Rating} from 'react-native-elements';
import LoadingView from '../commen/LoadingView';
import * as URL from '../api/URL';

class Item extends Component{
    render(){
        return(
            <View style={styles.itemContainer}>
                <Image source={{uri:this.props.img}}
                        style={styles.itemImage}/>
                <View style={styles.itemChildContainer}>
                    <Text style={styles.itemTitle}>{this.props.title}</Text>
                    <View style={styles.itemRating}>
                        <Rating
                            showRating={false}
                            type="star"
                            fractions={1}
                            ratingCount={5}
                            imageSize={13}
                            readonly
                            startingValue={this.props.rating/2}/>
                        <Text style={styles.marginLeft5}>{this.props.rating}</Text>
                    </View>
                    <Text style={styles.itemContent}>{'导演：'+this.props.director}</Text>
                    <Text style={styles.itemContent}>{'主演：'+this.props.casts}</Text>
                </View>
            </View>
        );
    }
}

export default class Hot extends Component{
    constructor(props){
        super(props);
        this.fetchData=this.fetchData.bind(this);
        this.renderItemView=this.renderItemView.bind(this);
        this.state={
            data:null,
            isLoading:true,
        }
    }

    fetchData(){
        fetch(URL.INTHRATERS)
            .then((response)=>response.json())
            .then((result)=>{
                this.setState({
                    data:result.subjects,
                    isLoading:false,
                });
            });
    }

    componentDidMount(){
        this.fetchData();
    }

    renderItemView(item){
        return (<Item img={item.item.images.large}
                      title={item.item.title}
                      rating={item.item.rating.average}
                      director={this.getCasts(item.item.directors)}
                      casts={this.getCasts(item.item.casts)}/>);
    }

    getCasts(item){
        let result = '';
        for(let i=0;i<item.length;i++){
            result += item[i].name+"  ";
        }
        return result;
    }

    render(){
        return this.state.isLoading?
            <LoadingView/>:
            <FlatList
                style={{backgroundColor:'#ddd'}}
                data={this.state.data}
                onRefresh={this.fetchData}
                refreshing={this.state.isLoading}
                keyExtractor={this._keyExtractor}
                renderItem={this.renderItemView}/>

    }

}

const styles = StyleSheet.create({
    itemContainer:{
        backgroundColor:'white',
        marginLeft:10,
        marginRight:10,
        marginTop:5,
        marginBottom:5,
        padding:10,
        borderRadius:5,
        flexDirection:'row',
    },
    itemImage:{
        width:85,
        height:120,
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
    },
    itemRating:{
        flexDirection:'row',
        marginTop:3,
        alignItems:'center'
    },
    marginLeft5:{
        marginLeft:5,
    }

});