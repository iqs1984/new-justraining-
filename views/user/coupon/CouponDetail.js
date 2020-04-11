import * as React from 'react';
import {Modal, View, Image, Platform, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'
import {CouponDetailStyle} from "./CouponDetail.style";
import theme from '../../../styles/theme.style'
import {Card, Text} from "native-base";
import {scale} from "../../../styles/scale.style";

export class CouponDetail extends React.Component {
    props: {
        visible: false,
        data: any,
        close: () => void
    }

    render() {

        const {visible, data, close} = this.props
        console.log(JSON
            .stringify(data))
        return <Modal onRequestClose={() => close()} transparent visible={visible} presentationStyle={"overFullScreen"}
                      animationType={"slide"}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 16}}>
                <View
                    style={{
                        padding: 8, backgroundColor: "white",
                        shadowColor: '#000',
                        shadowOffset: {width: 0, height: 1},
                        shadowOpacity: 0.8,
                        shadowRadius: 2,
                        elevation: 5,
                        borderRadius: 6,
                        width: "100%",
                        borderWidth: Platform.OS === "ios" ? 0 : 0.5,
                        borderColor: theme.NAVIGATION_BAR
                    }}>
                    <Icon onPress={() => close()} name={'close'} type={"FontAwesome"}
                          style={{
                              fontSize: scale(25),
                              color: theme.NAVIGATION_BAR,
                              position: "absolute",
                              top: 16,
                              left: 16,
                              zIndex: 2
                          }}/>
                    <View style={{width: 200, height: 200}}>
                        {data && data.inner_image && data.inner_image.url &&
                        <Image style={{width: "100%", height: "100%"}}
                               source={
                                   {
                                       uri: data && data.inner_image.url
                                   }
                               }/>}
                    </View>
                    <View style={{width: "100%", padding: 8}}>
                        <Text style={{
                            fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
                            fontWeight: "600",
                            fontSize: 20,
                            color: theme.PRIMARY_COLOR
                        }}>
                            {data && data.name}
                        </Text>
                        <ScrollView style={{width: "100%", height: 200}}>
                            <Text style={{
                                fontFamily: theme.FONT_FAMILY_LIGHT,
                                fontWeight: "400",
                                fontSize: 18,
                                color: theme.PRIMARY_COLOR
                            }}>
                                {data && data.long_description}
                            </Text>
                        </ScrollView>
                        <Text
                            style={{
                                fontFamily: Platform.OS === "ios" ? theme.FONT_FAMILY : theme.FONT_FAMILY_ANDROID_SEMI_BOLD,
                                color: theme.NAVIGATION_BAR,
                                fontWeight: "600",
                                fontSize: 20
                            }}>
                            {data && data.discount}
                        </Text>

                    </View>
                </View>
            </View>
        </Modal>
    }
}
