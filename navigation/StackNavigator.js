import React from "react";
import TabNavigator from "./TabNavigator";
import PostScreen from "../screens/PostScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Drawer = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName = "Home"
            screenOptions = {{
                headerShown: false
            }}
        >
            <Stack.Screen name = "Tela Inicial" component = {TabNavigator} />
            <Stack.Screen name = "Tela de Post" component = {PostScreen} />
        </Stack.Navigator>
    );
    
};

export default StackNavigator;