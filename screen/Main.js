import React,{Component} from 'react';
import {
    Image,
    StyleSheet
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import TabNavigatorItem from "react-native-tab-navigator/TabNavigatorItem";
import Home from './home/Home';
import Find from "./find/Find";
export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedTab:'热映',
        }
    }
    render(){
        return(
            <TabNavigator>
                <TabNavigatorItem
                    selected={this.state.selectedTab === '热映'}
                    renderIcon={()=><Image style={styles.tabImage} source={require('../images/icon_movie_unselect.png')}/>}
                    renderSelectedIcon={()=><Image style={styles.tabImage} source={require('../images/icon_movie_select.png')}/>}
                    onPress={()=>this.setState({selectedTab:'热映'})}
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.tabSelectText}
                    title="热映">
                    <Home/>
                </TabNavigatorItem>
                <TabNavigatorItem
                    selected={this.state.selectedTab === '找片'}
                    renderIcon={()=><Image style={styles.tabImage} source={require('../images/icon_find_unselect.png')}/>}
                    renderSelectedIcon={()=><Image style={styles.tabImage} source={require('../images/icon_find_select.png')}/>}
                    onPress={()=>this.setState({selectedTab:'找片'})}
                    titleStyle={styles.tabText}
                    selectedTitleStyle={styles.tabSelectText}
                    title="找片">
                    <Find/>
                </TabNavigatorItem>
            </TabNavigator>
        );
    }
}

const styles = StyleSheet.create({
    tabText:{
        color:'#707070',
        fontSize:14,
    },
    tabSelectText:{
        color:'#d81e06',
        fontSize:14,
    },
    tabImage:{
        width:20,
        height:20,
    }
});