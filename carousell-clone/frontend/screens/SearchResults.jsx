import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { defaultStyles } from '../styles/styles'
import Header from '../components/Header'
import ListingsGrid from '../components/ListingsGrid'
import MyBottomNav from '../components/navigation/MyBottomNav'
import Categories from '../components/Categories'

const SearchResults = () => {
  return (
    <SafeAreaView style={defaultStyles.safecontainer}>
        <View style={defaultStyles.headercontainer}>
            <Header/>
        </View>
        <ScrollView
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[1]}
            style={{
                flex:1,
                minHeight: "80%",
                maxHeight: "80%",
            }}>
            <Categories/>
            <View>
                <ListingsGrid/>
            </View>
        </ScrollView>
        <View style={defaultStyles.bottomnavcontainer}>
          <MyBottomNav />
        </View>
    </SafeAreaView>
  )
}

export default SearchResults