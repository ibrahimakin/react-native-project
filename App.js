import React, { Component } from 'react';
import {
  View, Text, Image, SafeAreaView, Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native';


import { Input, Button, CheckBox } from './src/Components'

const { width } = Dimensions.get('window')


export default class App extends Component {

  state = {
    username: '',
    password: '',
    isShowPassword: true
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true
  }


  render() {

    const {
      username,
      password,
      isShowPassword

    } = this.state
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>

        <ScrollView contentContainerStyle={{ flex: 1, padding: '7%', }}>

          {/* Logo Image */}
          <View style={{ flex: 0.7, alignItems: 'flex-start', justifyContent: 'space-between', }}>

            <Image
              source={require('./src/image/logo.png')}
              style={styles.logo}
            />
            <Text style={[{ color: 'white', marginTop: 5, fontSize: 30, fontWeight: 'bold' }]}>Sign In</Text>

          </View>



          {/* Form */}
          <View style={{ flex: 1.5, justifyContent: 'space-evenly', backgroundColor: 'black' }}>

            <Input
              placeholder={'Email or phone number'}
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}

            />

            <Input
              placeholder={'Password'}
              style={{ marginTop: -15 }}
              secureTextEntry={isShowPassword}
              value={password}
              onChangeText={(password) => this.setState({ password })}
            />


            <Button
              text={'Sign In'}

              onPress={() => {
                console.log('State Değerleri ', username, ' ', password);

              }}
            />

            <View style={{
              flexDirection: 'row',
              width: '100%',

              marginTop: -15,
              justifyContent: 'space-between'
            }}>

              <CheckBox
                text='Remember me'
                status={isShowPassword}
                onPress={() => this.setState({ isShowPassword: !isShowPassword })}
              />

              <TouchableOpacity>
                <Text style={{ fontSize: 13, marginLeft: 15, color: 'gray' }}>Need help?</Text>
              </TouchableOpacity>

            </View>
          </View>




          {/* Bottom */}
          <View style={{ marginTop: 50, flex: 0.5, alignItems: 'flex-start', justifyContent: 'flex-end' }}>

            <View style={{ flex: 0.5, flexDirection: 'row' }}>
              <Image
                source={require('./src/image/facebook.png')}
                style={styles.facebook}
              />
              <Text style={{ fontSize: 13, marginLeft: 10, color: 'gray' }}>Login with Facebook</Text>
            </View>

            <Text style={{ color: 'gray' }}>
              New to Netflix?
              <Text style={{ color: 'white', fontWeight: 'bold' }}>  Sign up now</Text>
            </Text>
          </View>
        </ScrollView>

      </SafeAreaView >
    )
  }

}

const styles = {
  logo: { width: '30%', height: width * 0.08, resizeMode: 'stretch', marginTop: '5%' },
  facebook: { width: 16, height: 16 },
}