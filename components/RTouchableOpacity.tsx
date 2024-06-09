import {TouchableOpacity,ActivityIndicator } from 'react-native'
import React from 'react';

type Props = {
  width?: string;
  backgroundColor?: string;
  style?: any;
  children?: any;
  gap?: number;
  onPress?: any;
  disabled?: boolean;
  loading?: boolean;
}


export default function RTouchableOpacity(props: Props){
const {width, backgroundColor, style, children, gap, disabled, loading} = props

  return (


    <TouchableOpacity
    {...props}
    disabled = {disabled}
    activeOpacity={0.8}
    style={[
        {
            width: width || undefined,
            backgroundColor,
            padding: 18,
            borderRadius: 4,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: gap || 16,
            shadowColor: "#f0f0f0",
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 5,
            opacity: disabled ? 0.5 : 1,
        },
        style
    ]}
    >
     {loading? <ActivityIndicator/> : children}

    </TouchableOpacity>
  )
}

