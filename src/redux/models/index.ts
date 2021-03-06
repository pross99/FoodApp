//location
import {Address} from 'expo-location'


//category

export interface Category {
    title: String,
    icon: String,
    id: string
}

// food template

export interface FoodModel {
    _id: string;
    name: string;
    description: string;
    category: string;
    price: number;
    readyTime: number;
    images: [string]

}

// Restaurant template

export  interface Restaurant {
    _id: string;
    name: string;
    foodType: string;
    address: string;
    phone: string;
    images: string;
    foods: [FoodModel]

}

export interface FoodAvailability {
    categories: [Category];
    restaurants: [Restaurant];
    foods: [FoodModel]
}

// todo: modify later
// user model
export interface UserModel {
    firstName: string;
    lastName: String;
    contactNumber: String;
    token: string
}

export interface UserState{
    user: UserModel;
    location: Address;
    error: string | undefined
}

export interface ShoppingState {
    availability: FoodAvailability,
    availableFoods: [FoodModel]

    //other models?
}


