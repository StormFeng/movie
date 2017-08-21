import React,{Component} from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View,
} from 'react-native';
export default class LoadingView extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ActivityIndicator size='large' color='#d81e06'/>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
});