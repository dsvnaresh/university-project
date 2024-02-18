import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

export default function UserPage() {
  return (
    <View style={styles.container}>

      <View style={styles.headerTextDiv}>
        <Text style={styles.headerText} >What's Your Gender ?</Text>
      </View>
     
    
      <View style={styles.middleContainer}>
        <ImageBackground
          source={require('../../assets/gender-logo.jpg')}
          style={styles.backgroundImage}
        >
        </ImageBackground>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.Button} >
					<Text style={styles.ButtonText}>Male</Text>
				</TouchableOpacity>

        <TouchableOpacity style={styles.Button} >
					<Text style={styles.ButtonText}>Female</Text>
				</TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerTextDiv: {
    flex: 1,
    alignItems: 'center',
		justifyContent: 'center',
  },
  headerText : {
		fontSize: 30,
  },
  middleContainer: {
    flex: 2,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 30,
    paddingLeft: 15,
    paddingRight: 15,
  },
  Button: {
		backgroundColor: 'green',
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 20,
		alignItems: 'center',
	},
	ButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
});
