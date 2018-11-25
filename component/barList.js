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
            searchBarText : "",
            dimContent : false,
            barlist : [],
            max: 0
        };
        this.data = [
            {
                score: 50,
                name: '김',
            },
            {
                score: 10,
                name: '조',
            },
            {
                score: 40,
                name: '최',
            },
            {
                score: 98,
                name: '이',
            },
            {
                score: 69,
                name: '문',
            },
            {
                score: 37,
                name: '남궁',
            },
            {
                score: 99,
                name: '민',
            },
            {
                score: 102,
                name: '엄',
            },
            {
                score: 284,
                name: '고',
            },
            {
                score: 70,
                name: '구',
            },
            {
                score: 70,
                name: '배',
            },

        ].sort((a,b) => b.score - a.score)
    }
    
    getBarList() {
        // data를 가져와서 for문으로 list를 만들자
        for(datum of this.data){
            if(this.state.max < datum.score){
                this.state.max = datum.score;
            }
        }

        var i = 0 
        if(this.state.searchBarText){
            console.log("search")
            for (datum of this.data){
                if(this.state.searchBarText === datum.name){
                    console.log()
                    this.state.barlist.push(
                        <Bar score={datum.score} label={datum.name} max = {this.state.max} key = {i}/>
                    )
                }
                i++;
            }
        }
        else{
            console.log("normal")
            for(datum of this.data){
                this.state.barlist.push(
                    <Bar score={datum.score} label={datum.name} max = {this.state.max} key = {i}/>
                );
                i++;
            }
        }
        
        
        return this.state.barlist;
    }

    handleChange = (searchBarText) => {
        this.setState({
            searchBarText:searchBarText, 
            barlist:[]
        })
    }
    handleCancel = () => {
        if(this.search != null)
            this.search.focus()
    }

    handleOnClearText () {
        this.setState({
            searchBarText : ""
        })
        this.search.focus()
    }

    render(){
        return (       
            <ScrollView style={styles.container}> 
                <Text style={styles.label}>개인별 랭킹!</Text>
                <SearchBar containerStyle={{backgroundColor: 'white'}}
                    round
                    platform={Platform.OS === "ios" ? "ios" : "android"}
                    cancelButtonTitle="Cancel"
                    placeholder='Search'
                    onChangeText    ={ (searchBarText) => this.handleChange(searchBarText)}
                />
                
                {this.getBarList()}
            </ScrollView>
        );
        //}
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