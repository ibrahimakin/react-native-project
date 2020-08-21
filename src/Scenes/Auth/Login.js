import React, { useState, useEffect } from 'react';
import { Alert, Text, View, ScrollView, ActivityIndicator, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Button, Input, CheckBox } from '../../Components/';
import { connect } from 'react-redux';
import { login } from "../../Actions"
import * as RootNavigation from '../../RootNavigation.js';
import { USER, LOCAL_AUTH_ID } from '../../Actions/types'
import AsyncStorage from '@react-native-community/async-storage';

const Login = (props) => {
    const [email, setEmail] = useState('deneme@test.com');
    const [password, setPassword] = useState('1234567');
    const [loading, setLoading] = useState(true);
    const [isShowPassword, setIsShowPassword] = useState(true);


    useEffect(() => {
        AsyncStorage.getItem(LOCAL_AUTH_ID).then((token) => {
            if (token) {
                USER.token = token;
                RootNavigation.replace('Home');
            }
            else { setLoading(false); }

        });
    }, [])

    const InvalidLogin = () => {
        Alert.alert("Alert", "Invalid e-mail or password!");
    };
    const ValidateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
        //alert("You have entered an invalid email address!")
    }
    const LoginClick = () => {
        if (!ValidateEmail(email)) {
            InvalidLogin();
            return;
        }
        const params = {
            email: email.toLowerCase(),//"deneme@test.com",
            password//"1234567"
        };
        props.login(params);
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>

            <ScrollView contentContainerStyle={{ flex: 1 }}>

                <View style={[styles.subContainer, { flex: 1.5 }]}>

                    <Image
                        source={require('../../Image/instagram_logo.png')}
                        style={styles.logo}
                        resizeMode='contain'
                    />


                </View>



                <View style={[styles.subContainer, { flex: 3 }]}>

                    <Input
                        placeholder={'Phone number, username or email'}
                        value={email}
                        style={{ width: '85%' }}
                        onChangeText={(username) => this.setState({ username })}

                    />

                    <Input
                        placeholder={'Password'}
                        secureTextEntry={isShowPassword}
                        keyboardType={'numeric'}
                        value={password}
                        style={{ width: '85%', margin: 25, }}
                        onChangeText={(password) => this.setState({ password })}
                    />



                    <View style={{
                        flexDirection: 'row',
                        width: '85%',
                        marginBottom: 40,
                        marginTop: 10,
                        justifyContent: 'space-between'
                    }}>

                        <CheckBox
                            text='Hide Password'
                            status={isShowPassword}
                            onPress={() => setIsShowPassword(!isShowPassword)}
                        />


                        <TouchableOpacity>
                            <Text style={[styles.blueText, { fontSize: 16, marginLeft: 15 }]}>Forgot Password</Text>
                        </TouchableOpacity>


                    </View>


                    <Button
                        text={'Login'}
                        style={{ width: '85%', height: 40 }}
                        onPress={() => {
                            const params = {
                                email: email.toLowerCase(),
                                password
                            }
                            props.login(params)

                        }}
                    />

                    <View style={{ flexDirection: 'row', marginTop: 30, alignItems: 'center' }}>
                        <View style={styles.line} />
                        <Text style={{ fontSize: 15, color: 'gray', margin: 20, }}>OR</Text>
                        <View style={styles.line} />
                    </View>

                </View>



                <View style={[styles.subContainer, { flex: 1.5, flexDirection: 'row' }]}>

                    <Image
                        source={require('../../Image/facebook.png')}
                        style={styles.facebook}
                    />
                    <Text style={[styles.blueText, { fontSize: 15, marginLeft: 15 }]}>Log In with Facebook</Text>


                </View>



                <View style={[styles.subContainer, { flex: 0.5, borderTopWidth: 0.5, borderTopColor: 'gray' }]}>

                    <Text style={styles.mainText}>
                        Don't have an account?
                        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
                            <Text style={styles.blueText}>  Sign Up</Text>
                        </TouchableOpacity>
                    </Text>
                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

const styles = {
    mainText: { color: 'gray' },
    blueText: { color: '#4495cb', fontWeight: 'bold' },
    subContainer: { alignItems: 'center', justifyContent: 'center', },
    logo: { width: 200, height: 100, marginBottom: 10, },
    facebook: { width: 20, height: 20 },
    line: { width: '35%', height: 0.5, backgroundColor: 'gray' }

}
const mapStateToProps = ({ authResponse }) => {
    const { loading, user } = authResponse;
    return { loading, user };
}

export default connect(mapStateToProps, { login })(Login);

