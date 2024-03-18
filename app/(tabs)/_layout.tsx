import Colors from '@/constants/Colors'
import { Tabs } from 'expo-router'
import React from 'react'

function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.primary }}>
      <Tabs.Screen name='index' options={{
        tabBarLabel: 'Explore'
      }}/>
    </Tabs>
  )
}

export default Layout