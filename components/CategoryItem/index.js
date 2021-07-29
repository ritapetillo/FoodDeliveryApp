import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './styles';

const CategoryItem = ({item, selectCategory, categorySelected}) => {
  const {id} = item;
  return (
    <TouchableOpacity
      style={styles({id, categorySelected}).container}
      onPress={() => selectCategory(item.id)}>
      <View style={styles({id, categorySelected}).iconContainer}>
        <Image
          source={item.icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
          }}
        />
      </View>

      <Text style={styles({id, categorySelected}).text}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryItem;
