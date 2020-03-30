import * as React from 'react';
import {View, Image, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import {Card, Text, Thumbnail} from 'native-base';
import {ChatCardViewStyle} from './ChatCardView.style';
import theme from '../../styles/theme.style'
import {scale} from "../../styles/scale.style";

export const ChatCardView = (props) => {
    return <TouchableWithoutFeedback onPress={() => {
        props.navigation.navigate(props.redirect, {
            group_id: props.data.id,
            group_name: props.data.name
        });
    }}>
        <Card style={ChatCardViewStyle.container}>
            <Image style={ChatCardViewStyle.image} source={
                {
                    uri: props.data.image.url
                }
            }/>
            {props.data.messages_count > 0 && <View style={ChatCardViewStyle.countView}>
                <Text style={ChatCardViewStyle.unseenCount}>
                    {props.data.messages_count}
                </Text>
            </View>}
            <View>
                <Text style={ChatCardViewStyle.title}>
                    {props.data.name}
                </Text>
                <Text style={ChatCardViewStyle.memberCount}>
                    {props.data.players_count || props.data.members.length} Members
                    {/*{props.data.players_count} Members*/}
                </Text>
            </View>
            {/*{*/}
            {/*    props.data && <View style={{flexDirection: "row", position: "absolute", bottom: 16, right: 16}}>*/}
            {/*        {*/}
            {/*            props.data.members.slice(0, 3).map(item => <Thumbnail*/}
            {/*                key={item}*/}
            {/*                style={{*/}
            {/*                    width: 50,*/}
            {/*                    height: 50,*/}
            {/*                    marginLeft: -15,*/}
            {/*                    shadowColor: "gray"*/}
            {/*                }}*/}
            {/*                borderRadius={25}*/}
            {/*                source={{uri: item.image.url}}*/}
            {/*            />)*/}
            {/*        }*/}
            {/*        {props.data.members.length > 3 &&*/}
            {/*        <TouchableOpacity onPress={() => {*/}
            {/*        }} style={{*/}
            {/*            width: 50,*/}
            {/*            height: 50,*/}
            {/*            shadowColor: "gray",*/}
            {/*            borderRadius: 25,*/}
            {/*            backgroundColor: theme.PRIMARY_COLOR,*/}
            {/*            marginLeft: -15,*/}
            {/*            alignItems: "center",*/}
            {/*            justifyContent: "center"*/}
            {/*        }}>*/}
            {/*            <Text style={[{*/}
            {/*                color: "white",*/}
            {/*                fontWeight: "600"*/}

            {/*            }]}>+{props.data.members.length - 3}</Text>*/}
            {/*        </TouchableOpacity>*/}
            {/*        }*/}
            {/*    </View>*/}
            {/*}*/}
        </Card>
    </TouchableWithoutFeedback>;
};
