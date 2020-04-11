import * as React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';
import {CouponsCardViewStyle} from './CouponsCardView.component.style';
import {Text} from 'native-base';

export const CouponView = (props) => {
    return <TouchableOpacity onPress={() => {
        props.onSelect(props.data)
    }}>
        <Card style={CouponsCardViewStyle.container}>
            <View style={CouponsCardViewStyle.container2}>
                <View>
                    <Image source={
                        {
                            uri: props.data.image.url
                        }
                    }
                           style={CouponsCardViewStyle.couponImage}/>
                </View>
                <View style={CouponsCardViewStyle.titlesContainer}>
                    <Text style={CouponsCardViewStyle.couponTitle}>
                        {props.data.name}
                    </Text>
                    <Text style={CouponsCardViewStyle.descText}>
                        {props.data.description}
                    </Text>
                    <View style={CouponsCardViewStyle.percentageContainer}>
                        <Text style={CouponsCardViewStyle.percentageText}>
                            {`${props.data.discount}`}
                        </Text>
                    </View>
                </View>
            </View>
        </Card>
    </TouchableOpacity>
};
