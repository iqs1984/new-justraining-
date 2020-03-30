import * as React from 'react';
import {View, ScrollView, Image} from 'react-native';
import {CreateTrainingStyle} from './CreateTraining.style';
import {CreateMessageStyle} from '../create-message/CreateMessage.style';
import MultiSelect from 'react-native-multiple-select';
import {Button, Card, Input, Item, Text} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {AdminHomeStyle} from '../adminHome.style';
import {NavigationRight} from '../../../../components/navigation/navigation-right/NavigationRight.component';
import {User} from "../../../../model/user-model/UserModel";
import {scale} from "../../../../styles/scale.style";
import {PickImage} from "../../../../model/PickImage-model/PickImage";
import {TrainingModel} from "../../../../model/training-model/TrainingModel";
import {BackgroundView} from "../../../../components/background-view/BackgroundView.component";

export class CreateTraining extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: navigation.getParam("action") === "edit" ? "Update Training" : 'Create Training',
            headerRight: NavigationRight,
        };
    };
    state = {
        selectedItems: [],
        selectedSports: [],
        isDatePickerVisible: false,
        checked: false,
        selectedDate: new Date(),
        link: "",
        title: "",
        description: "",
        id: ""
    };

    componentDidMount(): void {
        if (this.props.navigation.getParam("action") === "edit") {
            const {training} = this.props.navigation.state.params
            this.setState({
                id: training.id,
                title: training.title,
                link: training.link,
                description: training.description,
                selectedDate: training.date_time,
                selectedItems: training.groups.map(group => group.id),
                selectedSports: training.sports.map(sport => sport.id),
                checked: training.confirmed,
                image: {
                    uri: training.image.url
                },
                header_image: {
                    uri: training.header_image.url
                }
            })

        }
        User.getGroups().then(({groups}) => {
            this.setState({
                groups
            })
        })
        User.getSports().then(({sports}) => {
            this.setState({
                sports
            })
        })
    }

    isChecked() {
        if (this.state.checked) {
            this.setState({checked: false})
        } else {
            this.setState({checked: true})
        }
    }


    render() {
        const {id, selectedItems, isDatePickerVisible, selectedDate, groups, sports, selectedSports, description, title, link, checked, header_image, image} = this.state;
        console.log(moment(new Date()).format('DD MMM, YYYY hh:MM a'));
        return <BackgroundView>
            <View style={CreateTrainingStyle.container}>
                <ScrollView style={CreateTrainingStyle.scrollview}>
                    <Card style={CreateTrainingStyle.inputCard}>
                        <Item style={CreateTrainingStyle.inputItem}>
                            <Input defaultValue={title} placeholder={'Title'} style={CreateTrainingStyle.inputText}
                                   onChangeText={title => this.setState({
                                       title
                                   })}/>
                        </Item>
                    </Card>
                    <Card style={CreateTrainingStyle.inputCard}>
                        <Item style={CreateTrainingStyle.inputItem}>
                            <Input defaultValue={description} multiline placeholder={'Description'}
                                   style={CreateTrainingStyle.inputText}
                                   onChangeText={description => this.setState({
                                       description
                                   })}/>
                        </Item>
                    </Card>
                    <Card style={CreateTrainingStyle.inputCard}>
                        <Item style={CreateTrainingStyle.inputItem}>
                            <Input defaultValue={link} placeholder={'Link'} style={CreateTrainingStyle.inputText}
                                   onChangeText={link => this.setState({
                                       link
                                   })}/>
                        </Item>
                    </Card>
                    <Card style={CreateTrainingStyle.inputCard}>
                        <Button transparent onPress={() => {
                            this.setState({
                                isDatePickerVisible: true,
                            });
                        }}>
                            <Text style={CreateTrainingStyle.dateTime}>
                                {moment(selectedDate).format('DD MMM, YYYY hh:mm a')}
                                {/*01 Feb, 20 at 04:30 PM*/}
                            </Text>
                        </Button>
                    </Card>
                    <Card style={CreateTrainingStyle.inputCard}>
                        <MultiSelect
                            styleMainWrapper={CreateTrainingStyle.multiSelectMainWrapper}
                            styleTextDropdown={CreateTrainingStyle.selectText}
                            styleDropdownMenuSubsection={CreateTrainingStyle.styleDropdownMenuSubsection}
                            // hideTags
                            items={groups}
                            uniqueKey="id"
                            ref={(component) => {
                                this.multiSelect = component;
                            }}
                            onSelectedItemsChange={(selectedItems) => {
                                this.setState({
                                    selectedItems,
                                });
                            }}
                            selectedItems={selectedItems}
                            selectText="Select Group"
                            searchInputPlaceholderText="Search Items..."
                            onChangeInput={(text) => console.log(text)}
                            // altFontFamily="ProximaNova-Light"
                            tagRemoveIconColor="#CCC"
                            tagBorderColor="#CCC"
                            tagTextColor="#CCC"
                            selectedItemTextColor="#CCC"
                            selectedItemIconColor="#CCC"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{color: '#CCC'}}
                            submitButtonColor="#CCC"
                            submitButtonText="Submit"
                        />
                    </Card>
                    <Card style={CreateTrainingStyle.inputCard}>
                        <MultiSelect
                            styleMainWrapper={CreateTrainingStyle.multiSelectMainWrapper}
                            styleTextDropdown={CreateTrainingStyle.selectText}
                            styleDropdownMenuSubsection={CreateTrainingStyle.styleDropdownMenuSubsection}
                            // hideTags
                            items={sports}
                            uniqueKey="id"
                            ref={(component) => {
                                this.multiSelect = component;
                            }}
                            onSelectedItemsChange={(selectedSports) => {
                                this.setState({
                                    selectedSports
                                });
                            }}
                            selectedItems={selectedSports}
                            selectText="Select Sport"
                            searchInputPlaceholderText="Search Items..."
                            onChangeInput={(text) => console.log(text)}
                            // altFontFamily="ProximaNova-Light"
                            tagRemoveIconColor="#CCC"
                            tagBorderColor="#CCC"
                            tagTextColor="#CCC"
                            selectedItemTextColor="#CCC"
                            selectedItemIconColor="#CCC"
                            itemTextColor="#000"
                            displayKey="name"
                            searchInputStyle={{color: '#CCC'}}
                            submitButtonColor="#CCC"
                            submitButtonText="Submit"
                        />
                    </Card>
                    {
                        header_image && <Card>
                            <Image style={{width: "100%", height: scale(200)}}
                                   source={
                                       {
                                           uri: header_image.uri
                                       }
                                   }/>
                        </Card>
                    }
                    <Card style={CreateTrainingStyle.inputCard}>
                        <Button style={CreateTrainingStyle.addImageButton} onPress={() => {
                            PickImage.get().then((image) => {
                                this.setState({
                                    header_image: {
                                        uri: image.uri,
                                        name: 'image.jpg',
                                        type: 'image/jpeg',
                                        url: image.uri,
                                    },
                                })
                            })
                        }}>
                            <Icon name={'image'} style={CreateTrainingStyle.addImageButtonImage}/>
                            <View style={CreateTrainingStyle.freeSpace}/>
                            <Text style={CreateTrainingStyle.addImageButtonText}>
                                {header_image ? "Update Header Image" : "Add Header Image"}
                            </Text>
                            <View style={CreateTrainingStyle.freeSpace}/>
                        </Button>
                    </Card>
                    {
                        image && <Card>
                            <Image style={{width: "100%", height: scale(200)}}
                                   source={
                                       {
                                           uri: image.uri
                                       }
                                   }/>
                        </Card>
                    }
                    <Card style={CreateTrainingStyle.inputCard}>
                        <Button style={CreateTrainingStyle.addImageButton} onPress={() => {
                            PickImage.get().then((image) => {
                                this.setState({
                                    image: {
                                        uri: image.uri,
                                        name: 'image.jpg',
                                        type: 'image/jpeg',
                                        url: image.uri,
                                    },
                                })
                            })
                        }}>
                            <Icon name={'image'} style={CreateTrainingStyle.addImageButtonImage}/>
                            <View style={CreateTrainingStyle.freeSpace}/>
                            <Text style={CreateTrainingStyle.addImageButtonText}>
                                {image ? "Update Training Image" : "Add Training Image"}
                            </Text>
                            <View style={CreateTrainingStyle.freeSpace}/>
                        </Button>
                    </Card>
                    <View style={CreateTrainingStyle.preConfirmContainer}>
                        <Button transparent style={CreateTrainingStyle.preConfirmButton} onPress={() => {
                            this.isChecked()
                        }}>
                            <Icon style={CreateTrainingStyle.preConfirmButtonIcon} name={checked && 'check'}/>
                        </Button>
                        <Text style={CreateTrainingStyle.preConfirmLabel}>
                            Training Pre Confirm
                        </Text>
                    </View>
                    <Button style={CreateTrainingStyle.createLinkButton} onPress={() => {
                        // title, description, link, date_time, group_ids, sport_ids, header_image, image, training_confirm
                        id ? TrainingModel.updateTraining(id, title, description, link, moment(selectedDate).format("YYYY-MM-DD HH:mm"), selectedItems, selectedSports, header_image, image, checked).then(() => {
                                this.props.navigation.goBack()
                            })
                            :
                            TrainingModel.createTraining(title, description, link, moment(selectedDate).format("YYYY-MM-DD HH:mm"), selectedItems, selectedSports, header_image, image, checked).then(() => {
                                this.props.navigation.goBack()
                            })
                    }}>
                        <Icon name={'link'} style={CreateTrainingStyle.createLinkButtonIcon}/>
                        <View style={CreateTrainingStyle.freeSpace}/>
                        <Text style={CreateTrainingStyle.createLinkButtonText}>
                            CREATE LINK
                        </Text>
                        <View style={CreateTrainingStyle.freeSpace}/>
                    </Button>
                    <View style={{height: scale(100)}}/>
                </ScrollView>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode={"datetime"}
                    onConfirm={date => {
                        this.setState({
                            selectedDate: date,
                            isDatePickerVisible: false,
                        });
                    }}
                    onCancel={() => {
                        this.setState({
                            isDatePickerVisible: false,
                        });
                    }}
                />
            </View>
        </BackgroundView>
    }
}
