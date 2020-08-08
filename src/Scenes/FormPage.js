import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import { Input, Button } from '../Components'

const FormPage = (props) => {

    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()

    return (
        <ScrollView>
            <View style={styles.container}>

                <Input
                    placeholder='Title'
                    value={title}
                    onChangeText={(value) => setTitle(value)}
                />

                <Input
                    placeholder='Description'
                    value={desc}
                    onChangeText={(value) => setDesc(value)}
                />

                <Button
                    text={'Add'}
                    onPress={() => {
                        let obj = {
                            title,
                            desc
                        };
                        props.navigation.navigate('List', { obj });
                    }}
                />
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default FormPage;