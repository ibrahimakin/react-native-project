import React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const Input = (props) => (
    <TextInput
        placeholder={props.placeholder}
        placeholderTextColor="#BBB"
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        value={props.value}
        onChangeText={(value) => props.onChangeText(value)}
        style={[{
            width: '100%',//width * 0.9,
            height: height * 0.074,
            backgroundColor: '#424242',
            borderWidth: 0.5,
            borderColor: '#2A2A2A',
            borderRadius: 3,
            paddingLeft: 10,
            //marginBottom: height * 0.001,
            fontSize: 14
        }, props.style]}
    />
);

export { Input };