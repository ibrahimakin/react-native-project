import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from 'react-navigation/native';
import { createStackNavigator } from 'react-navigation/stack';
import ListPage from './Scenes/ListPage';
import FormPage from './Scenes/FormPage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createStackNavigator();

function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='ListPage'>
                <Stack.Screen
                    name="ListPage"
                    component={ListPage}
                    options={({ navigation }) => ({
                        title: 'Todo List',
                        headerRight: () => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('FormPage')}
                                style={{ marginRight: 10 }}>
                                <Text style={{ fontSize: 30 }}>+</Text>
                            </TouchableOpacity>
                        ),
                    })} />
                <Stack.Screen
                    name="FormPage"
                    component={FormPage}
                    options={{ title: 'Add Todo List' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;