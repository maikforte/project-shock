import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

class ShockLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            size,
            color,
            weight,
            numberOfLines,
            children,
        } = this.props;

        const style = {
            color: color || DEFAULTS.COLOR,
            fontSize: size || DEFAULTS.SIZE,
            fontWeight: weight || DEFAULTS.FONT_WEIGHT,
        };

        const styles = StyleSheet.create({
            style,
        });

        return (
            <Text numberOfLines={numberOfLines} style={styles.style}>{children}</Text>
        );
    }
}

ShockLabel.propTypes = () => ({
    size: PropTypes.number,
    color: PropTypes.string,
    weight: PropTypes.string,
    numberOfLines: PropTypes.number,
    children: PropTypes.string,
});

const DEFAULTS = {
    COLOR: '#000000',
    SIZE: 14,
    FONT_WEIGHT: 'normal',
};

export default ShockLabel;
