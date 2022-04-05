import React,  {useState, useEffect} from 'react'
import {StyleSheet, View, Text, Image} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FoodModel } from '../redux';
interface AddRemoveProps{
  onTap: Function;
 // isAdded: Boolean // For later use   
}
const ButtonAddRemove: React.FC<AddRemoveProps> = ({onTap}) => {
    return (
        <TouchableOpacity style={styles.btn}>
            <Text style={{fontSize: 18, color: '#FFF'}}> Add</Text>
        </TouchableOpacity>
    )}




const styles = StyleSheet.create({
    btn: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: 80, height:40, alignSelf:'center', borderRadius: 30, backgroundColor: 'red'},
})

export {ButtonAddRemove}