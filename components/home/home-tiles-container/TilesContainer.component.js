import * as React from 'react';
import {View} from 'react-native';
import {Tiles} from '../home-tiles/Tiles.component';
import {TilesContainerStyle} from './tilesContainer.component.style';

export const TilesContainer = (props) => {
    return <View style={TilesContainerStyle.container}>
        {
            props.menuLink.map(menuLink => {
                return <Tiles key={menuLink.id} menu={menuLink} navigation={props.navigation}/>;
            })
        }
    </View>;
};
