import { SafeAreaView, View, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import React from 'react'
import SimpleHeader from '../../components/SimpleHeader'

const ChangePassword = () => {

  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader title="Change Password"></SimpleHeader>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "red",
    justifyContent: "flex-start",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default ChangePassword