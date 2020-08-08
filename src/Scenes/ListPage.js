import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../Components'

const ListPage = (props) => {

    const [data, setData] = useState([])
    useEffect(() => {
        if (props.route.params?.obj) {
            let arr = data.slice()
            arr.push(props.route.params?.obj)
            setData(arr)
        }
    }, [props.route.params?.obj])

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.title}
                    ListEmptyComponent={() => {
                        return (
                            <View style={styles.emptyList}>
                                <Button
                                    text={'Add New'}
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
    }
});

export default ListPage;