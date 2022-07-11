import React from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  text: {
    paddingVertical: 20,
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  textS: {
    paddingVertical: 20,
    color: '#fff',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export const App = () => {

  const [now, setNow] = React.useState(new Date())

  const updateNow = () => {
    setNow(new Date())
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello Very Simple App</Text>
      <Text style={styles.textS}>{now.toTimeString()}</Text>
      <Button
        title='Push Me!'
        onPress={updateNow}
      />
    </SafeAreaView>
  )
}
