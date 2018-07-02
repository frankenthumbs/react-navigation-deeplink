/* @flow */
import React from "react";
import { createStackNavigator } from "react-navigation";
import { BasicScreen } from "./BasicScreen";

export const NewsNavigator = createStackNavigator(
    {
        News: {
            screen: () => {
                return <BasicScreen title={"News Home"} />;
            }
        },
        Article: {
            screen: () => {
                return <BasicScreen title={"Article"} />;
            }
        }
    },
    {
        initialRouteName: "News"
    }
);
