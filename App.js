import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from 'react-native';



function App() {

  return (
    <View>
      <Text style={styles.text}>Welcome Here</Text>
      <TouchableOpacity>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.login}>Log In</Text>
          </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    marginTop: '25%',
    marginLeft: '10%',
    alignSelf: 'center',
    fontSize: 30,
  },
  signup: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '70%'
  },
  login: {
    backgroundColor: '#3A59FF',
    color: 'white',
    width: "75%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '11%',
    padding: "2%",
    fontSize:  27,
    marginTop: '10%'
  }
});

export default App;
