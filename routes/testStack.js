import {createStackNavigator} from "react-navigation-stack";
// import {} from "react-navigation"
import {createAppContainer} from "react-navigation";
import Home from '../src/pages/home';

import Register from '../src/pages/Register';
import Login from "../src/pages/Login";
import Info from "../src/pages/Info";
import Createpost from '../src/pages/CreatePost';
import Likepost from '../src/pages/LikePost';
import Newsfeed from '../src/pages/NewsFeed'
const screens = {
    Home:{
        screen:Home,
        navigationOptions: { headerShown:false }
    },
    Register:{
        screen : Register,
        navigationOptions: { headerShown:false },
    },
    Login:{
        screen : Login,
        navigationOptions: { headerShown:false },
    },
    Info:{
        screen:Info,
        navigationOptions: { headerShown:false },
    },
    Createpost:{
        screen:Createpost,
        navigationOptions: { headerShown:false }, 
    },
    LikePost:{
        screen:Likepost,
        navigationOptions: { 
            headerShown:false 
        },
    },
    NewsFeed:{
        screen:Newsfeed,
        navigationOptions: { 
            headerShown:false 
        },
    }
};
const Nav = createStackNavigator(screens);
export default createAppContainer(Nav);