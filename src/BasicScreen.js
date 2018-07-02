/* @flow */
import * as React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export const BasicScreen = props => {
    const { title, navigation } = props;
    return (
        <View style={styles.container}>
            <Text>Title: {title || "Basic Screen"}</Text>
            <Text>
                Navigation State: {(navigation && navigation.state) || "none"}
            </Text>
        </View>
    );
};
