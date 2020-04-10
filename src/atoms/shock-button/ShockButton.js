import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet } from 'react-native';

class ShockButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            size,
            color,
            onClick,
            children,
        } = this.props;

        const style = {
            color: color || DEFAULTS.COLOR,
            fontSize: size || DEFAULTS.SIZE,
        };

        const styles = StyleSheet.create({
            style,
        });

        return (
            <Button
                style={styles.style}
                title={children}
                onPress={onClick || (() => {
                    console.log(`${children} is clicked!`);
                })}
            />
        );
    }
}

ShockButton.propTypes = () => ({
    size: PropTypes.number,
    color: PropTypes.string,
    children: PropTypes.string,
    onClick: PropTypes.func,
});

const DEFAULTS = {
    COLOR: '#000000',
    SIZE: 14,
};

export default ShockButton;
