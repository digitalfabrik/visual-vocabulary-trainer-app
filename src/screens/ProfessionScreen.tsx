import React, { useState } from 'react'
import Header from '../components/Header'
import MenuItem from '../components/MenuItem'
import { Text, FlatList, StyleSheet, View } from 'react-native'
import axios from '../utils/axios'
import { ENDPOINTS, ProfessionsType, ProfessionType } from '../constants/endpoints'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'
import { RouteProp, useFocusEffect } from '@react-navigation/native'
import Loading from '../components/Loading'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { COLORS } from '../constants/colors'
import { widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { RoutesParamsType } from '../navigation/NavigationTypes'
import { StackNavigationProp } from '@react-navigation/stack'

export const styles = StyleSheet.create({
  root: {
    backgroundColor: COLORS.lunesWhite,
    height: '100%'
  },
  text: {
    marginTop: 56,
    textAlign: 'center',
    fontSize: wp('4%'),
    color: COLORS.lunesGreyMedium,
    fontFamily: 'SourceSansPro-Regular'
  },
  list: {
    width: '100%'
  },
  title: {
    marginBottom: 32
  },
  clickedItemDescription: {
    fontSize: wp('4%'),
    fontWeight: 'normal',
    color: COLORS.white,
    fontFamily: 'SourceSansPro-Regular'
  },
  description: {
    fontSize: wp('4%'),
    fontWeight: 'normal',
    color: COLORS.lunesGreyMedium,
    fontFamily: 'SourceSansPro-Regular'
  }
})

interface ProfessionScreenPropsType {
  route: RouteProp<RoutesParamsType, 'Profession'>
  navigation: StackNavigationProp<RoutesParamsType, 'Profession'>
}

const ProfessionScreen = ({ navigation }: ProfessionScreenPropsType): JSX.Element => {
  const [professions, setProfessions] = useState<ProfessionsType>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useFocusEffect(
    React.useCallback(() => {
      AsyncStorage.getItem('session').then(async value => {
        if (value) {
          navigation.navigate('VocabularyTrainer', JSON.parse(value))
        }
      })

      axios.get(ENDPOINTS.professions.all).then(response => {
        setProfessions(response.data)
        setIsLoading(false)
      })
      setSelectedId(-1)
    }, [navigation])
  )

  const Title = (top: number | undefined): JSX.Element => (
    <>
      <Header top={top} />
      <Text style={styles.text}>
        Welcome to Lunes!{'\n'}
        Learn German vocabulary for your profession.
      </Text>
    </>
  )

  const Item = ({ item }: { item: ProfessionType }): JSX.Element => {
    const itemTextStyle = item.id === selectedId ? styles.clickedItemDescription : styles.description

    return (
      <MenuItem
        selected={item.id === selectedId}
        title={item.title}
        icon={item.icon}
        onPress={() => handleNavigation(item)}>
        <Text style={itemTextStyle}>
          {item.total_training_sets}
          {item.total_training_sets === 1 ? ' Bereich' : ' Bereiche'}
        </Text>
      </MenuItem>
    )
  }

  const handleNavigation = (item: ProfessionType): void => {
    setSelectedId(item.id)
    navigation.navigate('ProfessionSubcategory', {
      extraParams: {
        disciplineID: item.id,
        disciplineTitle: item.title,
        disciplineIcon: item.icon
      }
    })
  }

  return (
    <SafeAreaInsetsContext.Consumer>
      {insets => (
        <View style={styles.root}>
          <Loading isLoading={isLoading}>
            <FlatList
              data={professions}
              style={styles.list}
              ListHeaderComponent={Title(insets?.top)}
              ListHeaderComponentStyle={styles.title}
              renderItem={Item}
              keyExtractor={item => item.id.toString()}
              scrollEnabled={true}
              bounces={false}
            />
          </Loading>
        </View>
      )}
    </SafeAreaInsetsContext.Consumer>
  )
}

export default ProfessionScreen
