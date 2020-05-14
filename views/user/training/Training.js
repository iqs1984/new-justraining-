import * as React from 'react';
import {View, ScrollView, Image, TouchableWithoutFeedback, Linking, Modal} from 'react-native';
import {TrainingStyle} from './Training.style';
import {Card, Text, Button} from 'native-base';
import {ImageCardView} from '../../../components/image-card-view/ImageCardView.component';
import {CardViewStyle} from '../../../components/card-view/CardView.component.style';
import {StatusCardView} from '../../../components/status-card-view/StatusCardView.component';
import {scale} from '../../../styles/scale.style';
import {NavigationRight} from '../../../components/navigation/navigation-right/NavigationRight.component';
import {TrainingModel} from "../../../model/training-model/TrainingModel";
import {User} from "../../../model/user-model/UserModel";
import {MyTrainingStyle} from "../my-trainings/myTraining.style";
import Icon from "react-native-vector-icons/Feather";
import {NavigationEvents} from "react-navigation";
import {CardView} from "../../../components/card-view/CardView.component";
import {replaceWith} from "../../../App";
import theme from "../../../styles/theme.style";
import {BackgroundView} from "../../../components/background-view/BackgroundView.component";
import ImageViewer from 'react-native-image-zoom-viewer';

export class Training extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Training Detail',
            headerRight: <NavigationRight/>,
        };
    };


    getTraining = () => {
        const {id} = this.props.navigation.state.params
        User.getUser().then(({user}) => {
            this.setState({
                is_admin: user.admin
            }, () => {
                TrainingModel.getTraining(id).then(({training, message}) => {
                    // alert(JSON.stringify(training))
                    if (training) {
                        this.setState({
                            training
                        })
                    } else {
                        this.setState({
                            message
                        })
                    }
                })
            })
        })
    }
    state = {
        visible: false
    }

    componentDidMount(): void {
        User.getUser().then(({user}) => {
            if (!user.player.is_login) {
                User.logout().then(() => {
                    replaceWith("Login")
                })
            }
        })
    }


    render() {
        const {training, is_admin, message} = this.state
        return <BackgroundView>
            <View style={
                {
                    flex: 1,
                }
            }>
                <NavigationEvents onWillFocus={() => this.getTraining()}/>
                <ScrollView style={TrainingStyle.scrollView}>
                    {training && <Card>
                        <ImageCardView data={training}/>
                        <View style={TrainingStyle.container}>
                            <View style={TrainingStyle.subCardRow}>
                                <StatusCardView
                                    data_type={"training"}
                                    title={'Confirmed Players'} count={training.confirmed_players_count}
                                    id={training.id}
                                    navigation={this.props.navigation}
                                    type={"Confirmed Players"}
                                    type_id={1}
                                />
                                <View style={{width: 8}}/>
                                <StatusCardView
                                    data_type={"training"}
                                    title={'Unconfirmed Players'} count={training.unconfirmed_players_count}
                                    id={training.id}
                                    navigation={this.props.navigation}
                                    type={"Unconfirmed Players"}
                                    type_id={2}
                                />
                                <View style={{width: 8}}/>
                                <StatusCardView
                                    data_type={"training"}
                                    title={'Don\'t Go Players'}
                                    count={training.do_not_confirmed_players_count}
                                    id={training.id}
                                    navigation={this.props.navigation}
                                    type={'Don\'t Go Players'}
                                    type_id={3}
                                />
                            </View>
                            {/*<View style={TrainingStyle.subCardRow2}>*/}
                            {/*    <StatusCardView*/}
                            {/*        data_type={"training"}*/}
                            {/*        title={'Don\'t Go Players'}*/}
                            {/*        count={training.do_not_confirmed_players_count}*/}
                            {/*        id={training.id}*/}
                            {/*        navigation={this.props.navigation}*/}
                            {/*        type={'Don\'t Go Players'}*/}
                            {/*        type_id={3}*/}
                            {/*    />*/}
                            {/*    <View style={{flex: 1}}/>*/}
                            {/*</View>*/}

                            <Text style={TrainingStyle.description}>
                                {training.description}
                            </Text>
                            <TouchableWithoutFeedback onPress={() => {
                                Linking.openURL(training.link)
                            }}>
                                <Text style={{
                                    color: "blue",
                                    textDecorationLine: "underline",
                                    marginBottom: scale(8)
                                }}>
                                    {training.link}
                                </Text>
                            </TouchableWithoutFeedback>
                            {training.image.exists && <TouchableWithoutFeedback onPress={() => {

                                this.setState({
                                    visible: true
                                })

                            }}><Image style={TrainingStyle.image} source={{
                                uri: training.image.url
                            }}/></TouchableWithoutFeedback>}

                            {!is_admin && <View>
                                {!training.is_confirmed && training.pivot.is_confirmed !== 2 &&
                                <View style={TrainingStyle.row}>
                                    <Button style={TrainingStyle.confirmed} onPress={() => {
                                        TrainingModel.trainingStatus(training.id, null).then((data) => {
                                            // this.setState({
                                            //     'training.is_confirmed': true
                                            // })
                                            this.getTraining()
                                        })
                                    }}>
                                        <Text style={TrainingStyle.buttonText}>
                                            Read
                                        </Text>
                                    </Button>
                                    <View style={{width: scale(16)}}/>
                                    <Button style={TrainingStyle.dontGo} onPress={() => {
                                        TrainingModel.trainingStatus(training.id, "not_confirmed").then((data) => {
                                            // this.setState({
                                            //     'training.is_confirmed': true
                                            // })
                                            this.getTraining()
                                        })
                                    }}>
                                        <Text style={TrainingStyle.buttonText}>
                                            Dismiss
                                        </Text>
                                    </Button>
                                </View>}
                            </View>}
                        </View>
                    </Card>}
                </ScrollView>
                {is_admin && <Button style={TrainingStyle.bottomButton} onPress={() => {
                    this.props.navigation.navigate('CreateTraining', {
                        action: "edit",
                        training
                    });
                }}>
                    <Icon style={TrainingStyle.bottomButtonIcon} name={'edit'}/>
                </Button>}
                {
                    message &&
                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontFamily: theme.FONT_FAMILY, fontSize: scale(theme.FONT_SIZE_MEDIUM)}}>
                            {message}
                        </Text>
                    </View>
                }
            </View>
            <Modal visible={this.state.visible} transparent={true} onRequestClose={() => this.setState({
                visible: false
            })}>
                {training && training.image && <ImageViewer imageUrls={[
                    {
                        url: training.image.url
                    }
                ]}/>}
                <Button onPress={() => this.setState({
                    visible: false
                })} transparent style={{position: 'absolute', top: 50, right: 20}}>
                    <Icon style={{
                        color: "white",
                        fontSize: theme.FONT_SIZE_LARGE
                    }} name={"x"}/>
                </Button>
            </Modal>
        </BackgroundView>
    }
}
