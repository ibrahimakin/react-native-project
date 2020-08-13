import React, { useEffect } from 'react';
import { Alert, Image, Text, View, StyleSheet, FlatList, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import { getList } from '../Actions';
import { Button } from '../Components'
import { TouchableOpacity } from 'react-native-gesture-handler';


const ListPage = (props) => {

    useEffect(() => {
        props.getList();
    }, [])


    const deleteClick = (title) => {
        Alert.alert(
            title,
            "Are you sure to delete?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }


    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <TouchableOpacity style={{ zIndex: 1, }} onPress={() => { props.navigation.navigate('UpdatePage', { selected: item }) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.title}</Text>
                    <TouchableOpacity style={{ zIndex: 0 }} onPress={() => deleteClick(item.title)}>
                        <Image style={{ alignItems: 'right' }} source={require('../Image/delete.png')} style={styles.delete} />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text>{item.desc}</Text>
                    <Text>{item.dt}, {item.time}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={props.list}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                    ListEmptyComponent={() => {
                        return (
                            <View style={styles.emptyList}>
                                <Text style={{ marginBottom: 30 }}>No record</Text>
                                <Button
                                    text={'Add New'}
                                    style={{ padding: 15, }}
                                    onPress={() => {
                                        props.navigation.navigate('FormPage')
                                    }}
                                />
                            </View>
                        )
                    }} />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    itemContainer: {
        padding: 20,
        margin: 5,
        borderWidth: 1,
        borderRadius: 10,
    },
    emptyList: {
        alignItems: 'center',
        marginTop: 20,
        height: 300,
        justifyContent: 'center'
    },
    delete: { width: 17, height: 17, },
});

const mapStateToProps = (state) => {
    const { list, loading, data } = state.listResponse;
    return { list, list, loading, data };
};

export default connect(mapStateToProps, { getList })(ListPage);