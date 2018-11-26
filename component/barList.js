import React from 'react'
import {
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  Keyboard
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import Bar from './bar'

export default class Lattice extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            barlist : null,
            userListWithJson: null,
            max: 0,
            index: 0,
            dimContent : false,
        };
    }
    
    componentDidMount() {
        this.getBarList();
    }

    getBarList = async() => {
        // data를 가져와서 for문으로 list를 만들자
        this.setState({
            barlist: null
        });
        let response = await fetch('http://117.17.158.93:3000/auth/list');
        let responseJson = await response.json();
        console.log(responseJson);

        this.setState({
            userListWithJson: responseJson
        })

        var userList = [];
        for(datum of responseJson){
            if(this.state.max < datum.score){
                this.state.max = datum.score;
            }
        }
        
        
        for(datum of responseJson){
            userList.push(
                <Bar score={datum.score} label={datum.name} max = {this.state.max} key = {this.state.index}/>
            );
            this.setState({index: this.state.index + 1})
        }
        
        
        this.setState({
            barlist: userList
        })
    }

    handleChange = (searchBarText) => {
        var userList = [];
        this.setState({
            barlist: null
        });
        if(searchBarText){
            for (datum of this.state.userListWithJson){
                if(datum.name.match(searchBarText)){
                    userList.push(
                        <Bar score={datum.score} label={datum.name} max = {this.state.max} key = {this.state.index}/>
                    )
                    this.setState({index: this.state.index + 1})
                }
            }
        }

        this.setState({
            barlist: userList
        });
    }

    handleSearchClear = () => {
        this.getBarList()
    }

    render(){
        return (       
            <ScrollView style={styles.container}> 
                <Text style={styles.label}>개인별 랭킹!</Text>
                <SearchBar containerStyle={{backgroundColor: 'white'}}
                    round
                    platform={Platform.OS === "ios" ? "ios" : "android"}
                    cancelButtonTitle= "Cancel"
                    placeholder     = 'Search'
                    onClear={this.handleSearchClear}
                    onChangeText    = { (searchBarText) => this.handleChange(searchBarText)}
                />
                
                {this.state.barlist}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff'
    },
    label: {
        
        fontSize: 40,
        fontWeight: '500',
        textAlign: "center",
        marginBottom: 10,
        marginTop: 10,
      },
})