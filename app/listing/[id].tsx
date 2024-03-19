import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

function Page() {
    const { id } = useLocalSearchParams<{id: string}>()

    console.log(id)
    return (
        <View>
            <Text>Page</Text>
        </View>
    )
}

export default Page