import React,{Component} from 'react';
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native';
import {
    Header,
    Text,
    Button
} from 'react-native-elements';

export default class MovieDetail extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header
                    statusBarProps={{backgroundColor:'#d81e06'}}
                    backgroundColor='#d81e06'
                    outerContainerStyles={{height:50}}
                    innerContainerStyles={{height:50}}
                    centerComponent={<Text h4 style={{color:'white'}}>豆瓣电影</Text>}
                    leftComponent={<Button iconComponent={require('../../images/icon_back.png')}/>}/>
                <ScrollView>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
});