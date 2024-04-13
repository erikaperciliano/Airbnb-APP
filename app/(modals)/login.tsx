import { defaultStyles } from '@/constants/Styles';
import { useWarmUpBrowser } from '@/hooks/useWarmUpBrowser'
import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

function Page() {
  useWarmUpBrowser();

  return (
    <View style={styles.container}>
      <TextInput autoCapitalize='none' placeholder='Email' style={defaultStyles.inputField}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fdffff',
    padding: 26
  }
})

export default Page