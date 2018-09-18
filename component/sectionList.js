import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,SectionList,Alert} from 'react-native';
import {sectionlistData} from '../data/sectionlistData';

class SectionListItem extends Component {
    render() {
        return(
            <View style = {{flex:1,flexDirection: 'column',backgroundColor: 'rgb(98,197,184)'}}>
                <Text style = {{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'rgb(173,252,250)',
                    marginLeft: 20,
                    marginRight: 10,
                }}>
                {this.props.item.name}
                </Text>
                <Text style = {{
                    fontSize: 16,
                    //fontWeight: 'bold',
                    color: 'rgb(173,252,250)',
                    marginLeft: 20,
                }}>
                {this.props.item.andress}
                </Text>
                <View style = {{backgroundColor: 'rgb(77,120,140',height: 1, margin: 4,
                    marginLeft: 20,marginRight: 10}}>

                </View>
            </View>
        );
    }
}

class SectionHeader extends Component{
    render(){
        return (
            <View style ={{
                flex:1,
                backgroundColor: 'rgb(77,120,140)',
            }}>
                <Text style = {{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>
                    {this.props.section.title}
                </Text>
            </View>
        );
    }
}

export default class sectionList extends Component {
    render(){
        return(
            <View style = {{flex: 1, marginTop: Platform.OS ==='ios'? 34:0}}>
                <SectionList 
                    renderItem = {({item,index}) => {
                        return (
                            <SectionListItem item = {item} index = {index} >
                            </SectionListItem>
                        );
                    }}
                    renderSectionHeader = {({section}) => {
                        return (<SectionHeader section = {section} />);
                    }}
                    sections = {sectionlistData}
                    keyExtractor = {(item,index) => item.name}
                >

                </SectionList>
            </View>
        );
    }
}