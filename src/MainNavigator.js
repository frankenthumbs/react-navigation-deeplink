/* @flow */
import React from "react";
import { createStackNavigator } from "react-navigation";
import { HomeTabNavigator } from "./TabNavigator";
import { BasicScreen } from "./BasicScreen";

export const MainNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeTabNavigator
        },
        Modal: {
            screen: () => {
                return <BasicScreen title={"Modal"} />;
            }
        }
    },
    {
        headerMode: "none",
        mode: "modal"
    }
);
