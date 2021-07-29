import React, {useState, useEffect} from 'react';
import {FlatList, Text, View, Image} from 'react-native';
import {FONTS, SIZES} from '../../constants';
import {categoryData, restaurantData} from '../../data';
import CategoryItem from '../CategoryItem';
import RestaurantItem from '../RestaurantItem';
import {styles} from './styles';

const Categories = () => {
  const [category, setCategory] = useState();
  const [restaurants, setRestaurants] = useState(restaurantData);
  useEffect(() => {
    setRestaurants(
      restaurantData.filter(res => res.categories.includes(category)),
    );
  }, [category]);
  const selectCategory = id => {
    setCategory(id);
    console.log(category);
  };

  return (
    <View style={styles.container}>
      <Text style={{...FONTS.h1}}>Main</Text>
      <Text style={{...FONTS.h1}}>Categories</Text>
      <FlatList
        data={categoryData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({id}) => id}
        renderItem={({item}) => (
          <CategoryItem
            item={item}
            selectCategory={selectCategory}
            categorySelected={category}
          />
        )}
      />
      <FlatList
        data={restaurants}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={({id}) => id}
        renderItem={({item}) => <RestaurantItem item={item} />}
      />
    </View>
  );
};

export default Categories;
