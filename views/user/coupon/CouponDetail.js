import * as React from 'react';
import {Modal, View, Image, Text, Platform} from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import {CouponDetailStyle} from "./CouponDetail.style";
import theme from '../../../styles/theme.style'
import {Card} from "native-base";
import {scale} from "../../../styles/scale.style";

export class CouponDetail extends React.Component {
    props: {
        visible: false,
        data: any,
        close: () => void
    }

    render() {

        const {visible, data, close} = this.props
        return <Modal onRequestClose={() => close()} transparent visible={visible} presentationStyle={"overFullScreen"}
                      animationType={"slide"}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", padding: 16}}>
                <Card
                    style={CouponDetailStyle.container}>
                    <Card style={{
                        width: scale(30),
                        height: scale(30),
                        borderRadius: scale(15),
                        position: "absolute",
                        top: -10,
                        left: -10,
                        zIndex: 2,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                        <Icon onPress={() => close()} name={'x'}
                              style={CouponDetailStyle.colorIcon}/>
                    </Card>
                    <View style={{width: "100%", height: 200}}>
                        {data && data.inner_image && data.inner_image.url &&
                        <Image style={{width: "100%", height: "100%"}}
                               source={
                                   {
                                       uri: data && data.inner_image.url
                                   }
                               }/>}
                    </View>
                    <View style={{width: "100%", padding: 8}}>
                        <Text style={{fontWeight: "600", fontSize: scale(20), fontFamily: theme.FONT_FAMILY,}}>
                            {data && data.name}
                        </Text>
                        <Text style={{
                            fontWeight: "400",
                            fontFamily: theme.FONT_FAMILY,
                            fontSize: scale(15),
                            color: theme.PRIMARY_COLOR,
                        }}>
                            {data && data.long_description}
                        </Text>
                        <Text style={{
                            color: theme.NAVIGATION_BAR,
                            fontWeight: "600",
                            fontFamily: theme.FONT_FAMILY, fontSize: 18
                        }}>
                            {data && data.discount}
                        </Text>
                    </View>
                </Card>
            </View>
        </Modal>
    }
}
