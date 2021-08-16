import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native'
import { connect } from 'react-redux';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Modal
                transparent={true}
                
                visible={this.props.showLoader}
                style={styles.modalBackground}
                onRequestClose={() => { }}>
                <View >
                    <View style={styles.activityIndicatorWrapper}>
                        <ActivityIndicator color="#173756" animating size="large" />
                    </View>
                </View>
            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#rgba(0, 0, 0, 0.5)',
     
    },
    activityIndicatorWrapper: {
        height: 100,
        width: 100,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    }
});
const mapStateToProps = (state) => ({
    showLoader: state.login.showLoader,
});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);