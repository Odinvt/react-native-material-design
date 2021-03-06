import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import PropTypes from 'prop-types';


export default class Body extends Component {

    static propTypes = {
        children: PropTypes.node.isRequired
    };

    render() {
        const { theme, children } = this.props;

        return (
            <View style={ styles.container }>
                {children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 16,
        paddingBottom: 16
    }
});
