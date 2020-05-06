import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import PeopleList from './PeopleList'
import CompanyList from './CompanyList'
import AddPerson from './AddPerson'
import Icon from 'react-native-vector-icons/EvilIcons'


const Tab = createBottomTabNavigator()

const tabOptions = {
    tabBarOptions: {
        activeTintColor: 'white',
        inactiveTintColor: '#80cbc4',
        showLabel: false,
        showIcons: true,
        style: {
            backgroundColor: '#26a69a'
        }
    }
}

const tabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                
                activeColor="red"
                style={{
                    backgroundColor: '#26a69a'
                }}
            >
                <Tab.Screen 
                    name="People" 
                    component={PeopleList} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon name={'user'} size={32} color={color} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Add Person" 
                    component={AddPerson} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon name={'plus'} size={32} color={color} />
                        )
                    }} 
                />
                <Tab.Screen 
                    name="Company" 
                    component={CompanyList} 
                    options={{
                        tabBarIcon: ({color}) => (
                            <Icon name={'archive'} size={32} color={color} />
                        )
                    }} 
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default tabs
// const TabNavigation = createBottomTabNavigator(
//     {
//         People: PeopleList,
//         AddPerson: AddPerson,
//         Company: CompanyList
//     },
//     {
//         initialRouteName: "People",
        // tabBarOptions: {
        //     activeTintColor: 'white',
        //     inactiveTintColor: '#80cbc4',
        //     showLabel: false,
        //     showIcons: true,
        //     style: {
        //         backgroundColor: '#26a69a'
        //     }
        // }
//     }
// )

// export default NavigationContainer(TabNavigation)