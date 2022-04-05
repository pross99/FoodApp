
import React,  {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native'

import { FoodModel } from '../redux';
import { ButtonAddRemove } from './ButtonAddRemove';
interface FoodCardProps{
  item: FoodModel;
  onTap: Function   
}
const FoodCard: React.FC<FoodCardProps> = ({item, onTap}) => {
    return (<View style={styles.container}>

       <Image source={{ uri: `${item.images[0]}`}} style={{ width: 95, height: 100, borderRadius: 30, backgroundColor: '#EAEAEA'}} /> 
        <TouchableOpacity  onPress={() => onTap(item)} 
        style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{ display: 'flex', flex: 7, padding: 10}}>
                <Text>{item.name}</Text>
                <Text>{item.category}</Text>
            </View>
            <View style={{ display: 'flex', flex: 5, padding: 10, justifyContent:'space-around', alignItems: 'center'}}>
                <Text style={{ fontSize: 18, fontWeight: '600', color: '#7C7C7C'}}>₹{item.price}</Text>
              <ButtonAddRemove onTap={() => {}} /> 
          </View>
      </TouchableOpacity>

    </View>)}




const styles = StyleSheet.create({
container: {
    display: 'flex',
    flex: 1, 
    width: Dimensions.get('screen').width - 20,
    margin: 10,
    borderRadius: 40,
    backgroundColor: '#FFF',
    height: 100,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row'



},
navigation: { flex: 2, backgroundColor: 'red' },
body: { flex: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow' },
footer: { flex: 1, backgroundColor: 'cyan' }
})

export {FoodCard}