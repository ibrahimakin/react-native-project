import React, { useEffect } from 'react';
import { Image, Text, View, FlatList, ActivityIndicator, TouchableOpacity, Alert } from 'react-native';
import { getList, removeData } from "../../Actions"
import { connect } from 'react-redux';

const Home = (props) => {

    useEffect(() => {
        props.getList();
    }, []);

    const deleteClick = (item) => {
        Alert.alert(
            item.name,
            "Are you sure to delete?",
            [
                {
                    text: "Cancel",
                    onPress: () => { },
                    style: "cancel"
                },
                { text: "OK", onPress: () => props.removeData({ id: item._id }) }
            ],
            { cancelable: false }
        );
    }

    const renderItem = ({ item }) => (
        <View style={{ margin: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
            {item.image ?
                <Image source={{ uri: item.image }} resizeMode='contain' style={{ height: 200, width: 200, }} />
                : /* defaultSource={require('../../Image/head.png')} */
                <Image source={require('../../Image/head.png')} resizeMode='contain' style={{ height: 200, width: 200, }} />
            }
            <View style={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
                <TouchableOpacity onPress={() => { deleteClick(item) }}>
                    <Image style={{ alignItems: 'right' }} source={require('../../Image/delete.png')} style={{ height: 20, width: 20 }} />
                </TouchableOpacity>
                <Text style={{ margin: 10 }}>{item.name}</Text>
                <Text style={{ margin: 10 }}>{item.status}</Text>
                <Text style={{ margin: 10 }}>{item.species}</Text>
            </View>

        </View >
    );
    return (
        <View style={{ flex: 1 }}>
            {props.loadingCharacter ? <ActivityIndicator color='black' size='large' /> :
                <FlatList
                    style={{ flex: 1 }}
                    data={props.characters}
                    renderItem={renderItem}
                    keyExtractor={item => item._id}
                    ListEmptyComponent={() => {
                        return (
                            <View style={{
                                alignItems: 'center',
                                marginTop: 20,
                                height: 300,
                                justifyContent: 'center'
                            }}>
                                <Text style={{ marginBottom: 30 }}>No record</Text>
                            </View>
                        )
                    }}
                />
            }
        </View>
    );
}

const mapStateToProps = ({ charactersReducers }) => {
    const { loadingCharacter, characters } = charactersReducers;
    return { loadingCharacter, characters };
}
export default connect(mapStateToProps, { getList, removeData })(Home);