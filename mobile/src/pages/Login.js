import React, { Component } from 'react';
import {  TouchableOpacity , AsyncStorage,
  KeyboardAvoidingView,Text, View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Longin extends Component{
  state = {
    username: ','
  };

  async componentDidMount(){
    const username = await AsyncStorage.getItem('@omniStack:username');
    if(username){
      this.props.navigation.navigate('App');
    }
  }

  handleInputChange = (username) => {
    this.setState({ username });
  };
  handleLogin =  async () => {
    const { username } = this.state;
    
    if(!username.length) return;
    await AsyncStorage.setItem('@omniStack:username',username);

    this.props.navigation.navigate('TimeLine');
    
  }
    render(){
        return (
          <KeyboardAvoidingView behavior="height" style={styles.container}>
          <View style={styles.content}>
          <View>
          <Icon name="twitter" size={64} color="#4BB0EE"/>
          </View>
          <TextInput style={styles.input}
          placeholder="Nome de Usuario"
          value={this.state.username}
          onChangeText={this.handleInputChange}
          onSubmitEditing={this.handleLogin}
          returnKeyType="send"/>
        <TouchableOpacity onPress={this.handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
        );
    }
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
  
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 30
    },
  
    input: {
      borderWidth: 1,
      borderColor: "#DDD",
      borderRadius: 5,
      height: 44,
      paddingHorizontal: 15,
      alignSelf: "stretch",
      marginTop: 30,
    
    },
  
    button: {
      height: 44,
      alignSelf: "stretch",
      marginTop: 10,
      backgroundColor: "#4BB0EE",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    }
  });
  