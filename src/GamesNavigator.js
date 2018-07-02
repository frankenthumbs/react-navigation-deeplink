/* @flow */
import React from "react";
import { createStackNavigator } from "react-navigation";
import { BasicScreen } from "./BasicScreen";

export const GamesNavigator = createStackNavigator(
    {
        Games: {
            screen: () => {
                return <BasicScreen title={"Games Home"} />;
            }
        },
        Football: {
            screen: () => {
                return <BasicScreen title={"Football"} />;
            }
        }
    },
    {
        initialRouteName: "Games"
    }
);
