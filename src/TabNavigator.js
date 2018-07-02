/* @flow */
import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import { BasicScreen } from "./BasicScreen";
import { NewsNavigator } from "./NewsNavigator";
import { GamesNavigator } from "./GamesNavigator";

export const HomeTabNavigator = createBottomTabNavigator({
    News: NewsNavigator,
    Games: GamesNavigator,
    Podcasts: {
        screen: () => {
            return <BasicScreen title={"Podcasts"} />;
        }
    },
    Music: {
        screen: () => {
            return <BasicScreen title={"Music"} />;
        }
    },
    More: {
        screen: () => {
            return <BasicScreen title={"More"} />;
        }
    }
});
