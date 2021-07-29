import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native';
import Categories from '../components/Categories';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {categoryData, restaurantData, initialCurrentLocation} from '../data';

const Header = ({currentLocation}) => (
  <View style={{flexDirection: 'row', height: 50}}>
    <TouchableOpacity
      style={{
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: 'center',
      }}>
      <Image
        source={icons.nearby}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          width: '70%',
          height: '100%',
          backgroundColor: COLORS.lightGray,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: SIZES.radius,
        }}>
        <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
      </View>
    </View>
    <TouchableOpacity
      style={{
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: 'center',
      }}>
      <Image
        source={icons.basket}
        resizeMode="contain"
        style={{
          width: 30,
          height: 30,
        }}
      />
    </TouchableOpacity>
  </View>
);

const Home = () => {
  //   const [categories, setCategories] = React.useState(categoryData);
  //   const [selectedCategory, setSelectedCategory] = React.useState(null);
  //   const [restaurants, setRestaurants] = React.useState(restaurantData);
  const [currentLocation, setCurrentLocation] = React.useState(
    initialCurrentLocation,
  );
  console.log(currentLocation);
  return (
    <SafeAreaView style={styles.container}>
      <Header currentLocation={currentLocation} />
      <Categories />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
  },
});
