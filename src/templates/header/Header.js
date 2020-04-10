import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Label, Button } from '../../atoms/Atoms';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
        } = this.props;

        const style = {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            height: DEFAULTS.HEIGHT,
        };

        const styles = StyleSheet.create({
            style,
        });

        return (
            <View style={styles.style}>
                <Label>Henlo</Label>
                <Button>Werld</Button>
            </View>
        );
    }
}

Header.propTypes = () => ({});

const DEFAULTS = {
    HEIGHT: 50,
};

export default Header;
