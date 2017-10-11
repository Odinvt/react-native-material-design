import React, {Component} from "react";
import {View} from "react-native";
import { default as VectorIcon } from 'react-native-vector-icons/MaterialIcons';
import { getColor } from './helpers';
import PropTypes from 'prop-types';


export default class Icon extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        style: View.propTypes.style,
        size: PropTypes.number,
        color: PropTypes.string,
        allowFontScaling: PropTypes.bool
    };

    static defaultProps = {
        size: 30,
        color: '#757575',
        allowFontScaling: true
    };

    render() {
        const { name, style, size, color, allowFontScaling} = this.props;

        return (
            <VectorIcon
                name={name}
                size={size}
                color={getColor(color)}
                style={style}
                allowFontScaling={allowFontScaling}
            />
        );
    }
}
