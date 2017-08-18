import React,{Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {Header,Text} from 'react-native-elements';
import ScrollableTabView,{ScrollableTabBar,DefaultTabBar} from 'react-native-scrollable-tab-view';
import Hot from "./Hot";
import Becoming from "./Becoming";
export default class Home extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Header
                    statusBarProps={{backgroundColor:'#d81e06'}}
                    backgroundColor='#d81e06'
                    outerContainerStyles={{height:50}}
                    innerContainerStyles={{height:50}}
                    centerComponent={<Text h4 style={{color:'white'}}>猫眼电影</Text>}/>
                <ScrollableTabView
                    renderTabBar={() => <DefaultTabBar />}
                    tabBarUnderlineStyle={{backgroundColor:'#d81e06',height:2}}
                    tabBarActiveTextColor='#d81e06'
                    style={{marginTop:50,height:40}}
                    tabBarInactiveTextColor='#707070'>
                    <Hot tabLabel="正在热映"/>
                    <Becoming tabLabel="即将上映"/>
                </ScrollableTabView>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
});

