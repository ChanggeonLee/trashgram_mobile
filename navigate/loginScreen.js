// import React from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native'
// import { LoginButton, AccessToken } from 'react-native-fbsdk';
// import { withNavigation } from 'react-navigation'

// class LoginScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       token: null,
//       user_email: null,
//       user_name: null,
//       user_id: null,
//     };
//   }
//   givetoke(){
//     return fetch('http://117.17.158.93:3000/auth', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         token:this.state.token,
//         user_email:this.state.user_email,
//         user_name: this.state.user_name,
//         user_id: this.state.user_id
//       }),
//     }),this.props.navigation.navigate('Home');
//   }

//   initUser(token) {
//     fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
//     .then((response) => response.json())
//     .then((json) => {
//       this.setState({ 
//         user_email: json.email,
//         // user_name: json.name,
//         // user_id: json.id
//       });
//       // console.log("state : " + this.state.user_email);
//     })
//     .catch(() => {
//       reject('ERROR GETTING DATA FROM FACEBOOK')
//     })
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
//         <LoginButton 
//           onLoginFinished={
//             (error, result) => {
//               if (error) {
//                 console.log("login has error: " + result.error);
//               } else if (result.isCancelled) {
//                 console.log("login is cancelled.");
//               } else {
//                 AccessToken.getCurrentAccessToken().then(
//                   (data) => {
//                     const { accessToken } = data
//                     this.initUser(accessToken)
//                     // console.log(data.accessToken.toString())
//                     this.setState({ token: data.accessToken});
//                     this.givetoke();
//                   }
//                 )
//               }
//             }
//           }
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'normal',
//     marginBottom: 48,
//   },
// });

// export default withNavigation (LoginScreen);