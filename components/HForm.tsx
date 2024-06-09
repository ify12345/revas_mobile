import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import React, { forwardRef, useState, FC, ReactElement, useRef } from "react";
import {
  EyeIcon,
  EyeSlashIcon,
  CheckIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "react-native-heroicons/solid";
import { Icon } from "react-native-elements";
import HText from "./RText";
import { RFValue } from "react-native-responsive-fontsize";
import HTouchableOpacity from "./RTouchableOpacity";
// import RadioGreen from "../assets/icons/Radio";

interface _iProps {
  placeholder?: string;
  value?: string;
  onChangeText?: any;
  label?: string;
  type?: 2;
  icon?: 2;
  error?: any;
  textType?: any;
  autoCorrection?: boolean;
  disabled?: boolean;
  onFocus?: any;
  onPressIn?: any;
  onBlur?: any;
  ref?: any;
  width: number | string;
}
interface _checkbox {
  checked?: boolean;
  setChecked?: any;
}













const HSearchInput = forwardRef((props: _iProps, ref) => {
  const { placeholder, icon } = props;
  return (
    <View
      style={[
        styles.inputContainer,
        {
          backgroundColor: props.type === 2 ? "#f0f0f0" : "#ffffff",
        },
      ]}
    >
      {icon === 2 ? (
        <RadioGreen />
      ) : (
        <MagnifyingGlassIcon color="#667185" width={20} />
      )}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </View>
  );
});

const HInput = (props: _iProps) => {
  const {
    placeholder,
    label,
    type,
    error,
    textType,
    autoCorrection,
    disabled,
    width
  } = props;

  const [secureEntry, setSecureEntry] = useState(true);

  return (
    <View  style={{ width: width }}>
      {label && (
        <HText fontSize="10" fontWeight="semibold" textStyle={styles.label}>
          {label}
        </HText>
      )}
      <View style={styles.inputRow}>
        <TextInput
          style={type === 2 ? styles.textInput2 : styles.textInput}
          placeholder={placeholder}
          textContentType={textType ? textType : "none"}
          autoCorrect={autoCorrection}
          secureTextEntry={textType !== "password" ? false : secureEntry}
          {...props}
        />

        {textType === "password" && (
          <HTouchableOpacity
            style={styles.iconContainer}
            onPress={() => setSecureEntry(!secureEntry)}
          >
            {!secureEntry ? (
              <EyeIcon color="#ccc" size={22} />
            ) : (
              <EyeSlashIcon color="#ccc" size={22} />
            )}
          </HTouchableOpacity>
        )}
      </View>
      {error && (
        <HText color="#667185" textStyle={{ marginTop: 8 }}>
          {error}
        </HText>
      )}
    </View>
  );
};

const HCheckbox = (props: _checkbox) => {
  const { checked, setChecked } = props;
  return (
    <Pressable
      style={[
        styles.checkbox,
        { backgroundColor: checked ? "black" : "#ffffff" },
      ]}
      onPress={() => setChecked(checked)}
    >
      {checked && (
        <CheckIcon color="#fff" fontWeight="900" width={18} height={18} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
 
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#D0D5DD",
    height: 48,
    borderRadius: 16,
    alignItems: "center",
    paddingLeft: 10,
    marginBottom: 14,
    backgroundColor: "#fff",
    shadowColor: "#f0f0f0",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 5,
    zIndex:0,
  },
  input: {
    height: 48,
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingBottom: 6,
    fontSize: RFValue(14),
    lineHeight: RFValue(20.03),
    zIndex:0,
  },
  textInput: {
    height: 50,
    flexGrow: 1,
    padding: 16,
    fontSize: RFValue(10),
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#F0F0F0",
    shadowColor: "#f0f0f0",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 5,
    zIndex:0,
  },
  textInput2: {
    backgroundColor: "#F0F0F0",
    height: 50,
    flexGrow: 1,
    padding: 16,
    fontSize: RFValue(10),
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#D0D5DD",
    shadowColor: "#f0f0f0",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 5,
    zIndex:0,
  },
  label: {
    lineHeight: 20,
    marginBottom: 5,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderColor: "#777777",
    borderRadius: 2,
    borderWidth:1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    width: 20,
    height: 20,
    position: "absolute",
    right: 14,
    zIndex: 1,
  },
  placeholer: {
    fontSize: 10,
  },
});

export { HSearchInput, HInput, HCheckbox, };
