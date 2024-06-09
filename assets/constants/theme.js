import { Dimensions } from "react-native";

const {height, width} = Dimensions.get('window');

const COLORS = {
    primary: "#000",
    secondary: "#fff0f0",
    success: "#006C1E",
    danger: "#D00000",
}

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 24,
    xLarge: 24,
    xxLarge: 44,

    height,
    width,
};

const SHADOWS = {
    small: {
        shadowColor: "#000" ,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2
    },
    
    medium: {
        shadowColor: "#000" ,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5
    },

}

export { COLORS, SIZES, SHADOWS ,height,width};