/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function AlertItem(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="307px"
      height="289px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "AlertItem")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="7px SOLID rgba(255,255,255,0.7)"
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.25)"
        borderRadius="58px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,187,187,1)"
        {...getOverrideProps(overrides, "Box")}
      ></View>
      <Text
        fontFamily="Roboto"
        fontSize="96px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="center"
        position="absolute"
        top="33.91%"
        bottom="33.91%"
        left="16.61%"
        right="16.29%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Alert"
        {...getOverrideProps(overrides, "Alert")}
      ></Text>
    </View>
  );
}
