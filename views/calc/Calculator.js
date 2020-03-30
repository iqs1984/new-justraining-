import * as React from 'react';
import {ScrollView, View, Image} from 'react-native';
import {
    Input,
    Item,
    Left,
    List,
    ListItem,
    Right,
    Tab,
    Tabs,
    Text,
    Body, Button,
} from 'native-base';
import {NavigationRight} from '../../components/navigation/navigation-right/NavigationRight.component';
import {CalculatorStyle} from './Calculator.style';
import {BackgroundView} from "../../components/background-view/BackgroundView.component";

export class Calculator extends React.Component {


    static navigationOptions = ({navigation}) => {
        return {
            title: 'Calculator',
            headerRight: NavigationRight,
        };
    };


    state: any = {
        swimming: {
            time: {
                hr: 0,
                min: 0,
            },
            distance: 0,
            pace: {
                hr: 0,
                min: 0,
            },
        },
        cycling: {
            time: {
                hr: 0,
                min: 0,
            },
            distance: 0,
            speed: 0,
        },
        running: {
            time: {
                hr: 0,
                min: 0,
            },
            distance: 0,
            pace: {
                hr: 0,
                min: 0,
            },
        },
    };

    timeConvert(n) {
        var num = n;
        var hours = (num / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);

        return (rhours.toLocaleString().length < 2 ? '0' + rhours : rhours) + ':' + (rminutes.toLocaleString().length < 2 ? '0' + rminutes : rminutes);
    }

    render() {
        const {swimming, cycling, running} = this.state;
        const swimmingPaceTime = parseFloat(swimming.pace.hr) * 60 + parseFloat(swimming.pace.min);
        const swimmingDis = parseFloat(swimming.distance) / 100;
        const swimmingResult = (swimmingPaceTime * swimmingDis) / 60;

        const runningPaceTime = parseFloat(running.pace.hr) * 60 + parseFloat(running.pace.min);
        const runningDis = parseFloat(running.distance);
        const runningResult = (runningPaceTime * runningDis) / 60;

        const cyclingSpeedTime = parseFloat(cycling.speed);
        const cyclingDis = parseFloat(cycling.distance);
        const cyclingResult = (cyclingDis / cyclingSpeedTime) * 60;


        const swimg = swimmingResult ? swimmingResult : 0;
        const cycle = cyclingResult ? cyclingResult : 0;
        const running1 = runningResult ? runningResult : 0;
        const total = Math.round(swimg) + Math.round(cycle) + Math.round(running1);
        console.log('sss');
        console.log(JSON.stringify(total));
        return <BackgroundView>
            <View style={CalculatorStyle.container}>
                <ScrollView style={CalculatorStyle.container}>
                    <View>
                        <Tabs tabBarUnderlineStyle={CalculatorStyle.tabBarUnderlineStyle}
                              onChangeTab={({i}) => {
                              }}
                        >
                            <Tab tabStyle={CalculatorStyle.tabStyle} textStyle={CalculatorStyle.tabTextStyle}
                                 activeTextStyle={CalculatorStyle.activeTextStyle}
                                 activeTabStyle={CalculatorStyle.activeTabStyle}
                                 heading={'SWIMMING'}>
                                <ScrollView style={CalculatorStyle.scrollview}>
                                    <Text style={CalculatorStyle.labelText}>
                                        Distance
                                    </Text>
                                    <View
                                        style={{padding: 8, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                        <Item style={{flex: 1, marginRight: 16}}>
                                            <Input keyboardType={'number-pad'} placeholder={'Distance in meter'}
                                                   defaultValue={swimming.distance}
                                                   onChangeText={dis => {
                                                       this.setState(prevState => ({
                                                           swimming: {
                                                               // @ts-ignore
                                                               ...prevState.swimming,
                                                               distance: dis,
                                                           },
                                                       }));
                                                   }}
                                            />
                                        </Item>
                                        <Text>
                                            Meter
                                        </Text>
                                    </View>
                                    <Text style={CalculatorStyle.labelText}>
                                        Pace
                                    </Text>
                                    <View
                                        style={{padding: 8, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                        <Item style={{flex: 1}}>
                                            <Input keyboardType={'number-pad'} placeholder={'mm'}
                                                   defaultValue={swimming.pace.hr}
                                                   onChangeText={hr => {
                                                       this.setState(prevState => ({
                                                           swimming: {
                                                               // @ts-ignore
                                                               ...prevState.swimming,
                                                               pace: {
                                                                   // @ts-ignore
                                                                   ...prevState.swimming.pace,
                                                                   hr: hr,
                                                               },
                                                           },
                                                       }));
                                                   }}
                                            />
                                        </Item>
                                        <Text>
                                            :
                                        </Text>
                                        <Item style={{flex: 1}}>
                                            <Input keyboardType={'number-pad'} placeholder={'ss'}
                                                   defaultValue={swimming.pace.min}
                                                   onChangeText={min => {
                                                       this.setState(prevState => ({
                                                           swimming: {
                                                               // @ts-ignore
                                                               ...prevState.swimming,
                                                               pace: {
                                                                   // @ts-ignore
                                                                   ...prevState.swimming.pace,
                                                                   min: min,
                                                               },
                                                           },
                                                       }));
                                                   }}
                                            />
                                        </Item>
                                        <Text>
                                            Min/Sec
                                        </Text>
                                    </View>
                                </ScrollView>
                            </Tab>

                            {/*Cycle*/}
                            <Tab tabStyle={{
                                backgroundColor: 'white',
                            }} textStyle={{
                                color: 'black',
                            }} activeTextStyle={{color: 'black'}}
                                 activeTabStyle={{backgroundColor: 'white'}}
                                 heading={'CYCLING'}>
                                <ScrollView style={{flex: 1, padding: 16}}>
                                    <Text style={CalculatorStyle.labelText}>
                                        Distance
                                    </Text>
                                    <View
                                        style={{padding: 8, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                        <Item style={{flex: 1, marginRight: 16}}>
                                            <Input keyboardType={'number-pad'} placeholder={'Distance in km'}
                                                   defaultValue={cycling.distance}
                                                   onChangeText={dis => {
                                                       this.setState(prevState => ({
                                                           cycling: {
                                                               // @ts-ignore
                                                               ...prevState.cycling,
                                                               distance: dis,
                                                           },
                                                       }));
                                                   }}/>
                                        </Item>
                                        <Text>
                                            KM
                                        </Text>
                                    </View>
                                    <Text style={CalculatorStyle.labelText}>
                                        Speed
                                    </Text>
                                    <View
                                        style={{padding: 8, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                        <Item style={{flex: 1}}>
                                            <Input keyboardType={'number-pad'} placeholder={'Speed in km/h'}
                                                   defaultValue={cycling.speed}
                                                   onChangeText={spd => {
                                                       this.setState(prevState => ({
                                                           cycling: {
                                                               ...prevState.cycling,
                                                               speed: spd,
                                                           },
                                                       }));
                                                   }}
                                            />
                                        </Item>
                                        <Text>
                                            KM/H
                                        </Text>
                                    </View>
                                </ScrollView>
                            </Tab>

                            {/*Running*/}
                            <Tab tabStyle={{
                                backgroundColor: 'white',
                            }} textStyle={{
                                color: 'black',
                            }} activeTextStyle={{color: 'black'}}
                                 activeTabStyle={{backgroundColor: 'white'}}
                                 heading={'RUNNING'}>
                                <ScrollView style={{flex: 1, padding: 16}}>
                                    <Text style={CalculatorStyle.labelText}>
                                        Distance
                                    </Text>
                                    <View
                                        style={{padding: 8, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                        <Item style={{flex: 1, marginRight: 16}}>
                                            <Input keyboardType={'number-pad'} placeholder={'Distance in km'}
                                                   defaultValue={running.distance}
                                                   onChangeText={dis => {
                                                       this.setState(prevState => ({
                                                           running: {
                                                               ...prevState.running,
                                                               distance: dis,
                                                           },
                                                       }));
                                                   }}
                                            />
                                        </Item>
                                        <Text>
                                            KM
                                        </Text>
                                    </View>
                                    <Text style={CalculatorStyle.labelText}>
                                        Pace
                                    </Text>
                                    <View
                                        style={{padding: 8, width: '100%', flexDirection: 'row', alignItems: 'center'}}>
                                        <Item style={{flex: 1}}>
                                            <Input keyboardType={'number-pad'} placeholder={'mm'}
                                                   defaultValue={running.pace.hr}
                                                   onChangeText={hr => {
                                                       this.setState(prevState => ({
                                                           running: {
                                                               // @ts-ignore
                                                               ...prevState.running,
                                                               pace: {
                                                                   // @ts-ignore
                                                                   ...prevState.running.pace,
                                                                   hr: hr,
                                                               },
                                                           },
                                                       }));
                                                   }}
                                            />
                                        </Item>
                                        <Text>
                                            :
                                        </Text>
                                        <Item style={{flex: 1}}>
                                            <Input keyboardType={'number-pad'} placeholder={'ss'}
                                                   defaultValue={running.pace.min}
                                                   onChangeText={min => {
                                                       this.setState(prevState => ({
                                                           running: {
                                                               // @ts-ignore
                                                               ...prevState.running,
                                                               pace: {
                                                                   // @ts-ignore
                                                                   ...prevState.running.pace,
                                                                   min: min,
                                                               },
                                                           },
                                                       }));
                                                   }}
                                            />
                                        </Item>
                                        <Text>
                                            Min/Sec
                                        </Text>
                                    </View>
                                </ScrollView>
                            </Tab>
                        </Tabs>
                    </View>
                    <View style={CalculatorStyle.calculationContainer}>
                        <View style={CalculatorStyle.calculationSubContainer}>
                            <Text style={CalculatorStyle.calculationHeaderText}>
                                Calculate your times
                            </Text>
                            <List>
                                <ListItem>
                                    <Left style={{flex: 1}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={CalculatorStyle.calImage}
                                                   source={require('../../assets/Calc/swim.png')}/>
                                            <Text style={CalculatorStyle.calculationLabelText}>
                                                {swimming.distance ? swimming.distance : 0} M
                                            </Text>
                                        </View>
                                    </Left>
                                    <Body style={{flex: 1}}>
                                        <Text style={CalculatorStyle.calculationLabelText}>
                                            {swimming.pace.hr ? swimming.pace.hr : 0}:{swimming.pace.min ? swimming.pace.min : 0} Min/Sec
                                        </Text>
                                    </Body>
                                    <Right style={{flex: 1}}>
                                        <Text style={CalculatorStyle.calculationLabelText}>
                                            {swimmingResult ? this.timeConvert(swimmingResult) : 0}
                                        </Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left style={{flex: 1}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={CalculatorStyle.calImage}
                                                   source={require('../../assets/Calc/cycle.png')}/>
                                            <Text style={CalculatorStyle.calculationLabelText}>
                                                {cycling.distance ? cycling.distance : 0} KM
                                            </Text>
                                        </View>
                                    </Left>
                                    <Body style={{flex: 1}}>
                                        <Text style={CalculatorStyle.calculationLabelText}>
                                            {cycling.speed ? cycling.speed : 0} KM/H
                                        </Text>
                                    </Body>
                                    <Right style={{flex: 1}}>
                                        <Text style={CalculatorStyle.calculationLabelText}>
                                            {cyclingResult ? this.timeConvert(cyclingResult) : 0}
                                        </Text>
                                    </Right>
                                </ListItem>
                                <ListItem>
                                    <Left style={{flex: 1}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                            <Image style={CalculatorStyle.calImage}
                                                   source={require('../../assets/Calc/run.png')}/>
                                            <Text style={CalculatorStyle.calculationLabelText}>
                                                {running.distance ? running.distance : 0} KM
                                            </Text>
                                        </View>
                                    </Left>
                                    <Body style={{flex: 1}}>
                                        <Text style={CalculatorStyle.calculationLabelText}>
                                            {running.pace.hr ? running.pace.hr : 0}:{running.pace.min ? running.pace.min : 0} Min/Sec
                                        </Text>
                                    </Body>
                                    <Right style={{flex: 1}}>
                                        <Text style={CalculatorStyle.calculationLabelText}>
                                            {runningResult ? this.timeConvert(runningResult) : 0}
                                        </Text>
                                    </Right>
                                </ListItem>
                            </List>
                        </View>
                        <View style={CalculatorStyle.footer}>
                            <View>
                                <Button style={CalculatorStyle.resetButton} small onPress={() => {
                                    this.setState({
                                        swimming: {
                                            time: {
                                                hr: 0,
                                                min: 0,
                                            },
                                            distance: 0,
                                            pace: {
                                                hr: 0,
                                                min: 0,
                                            },
                                        },
                                        cycling: {
                                            time: {
                                                hr: 0,
                                                min: 0,
                                            },
                                            distance: 0,
                                            speed: 0,
                                        },
                                        running: {
                                            time: {
                                                hr: 0,
                                                min: 0,
                                            },
                                            distance: 0,
                                            pace: {
                                                hr: 0,
                                                min: 0,
                                            },
                                        },
                                    });
                                }}>
                                    <Text style={{color: 'white'}}>
                                        RESET
                                    </Text>
                                </Button>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text>
                                    TOTAL
                                </Text>
                                <Text style={{fontWeight: 'bold', marginLeft: 16}}>
                                    {this.timeConvert(total) + ' ' + 'Hr/Min'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </BackgroundView>
    }
}
