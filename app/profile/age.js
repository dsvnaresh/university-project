import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, TextInput } from 'react-native';
import { router } from 'expo-router';

export default function UserPage() {
	return (
		<View style={styles.container}>

			<View style={styles.headerTextDiv}>
				<Text style={styles.headerText} >What's Your Age ?</Text>
			</View>


			<View style={styles.middleContainer}>
				<ImageBackground
					source={require('../../assets/age-logo.png')}
					style={styles.backgroundImage}
				>
				</ImageBackground>
			</View>

			<View style={styles.buttonContainer}>
				<View style={styles.inputContainer}> 
					<TextInput
						style={styles.input}
						placeholder="Age"
						keyboardType="number-pad"
						autoCapitalize="none"
					/>
					<Text style={styles.unit}>Years</Text>
				</View>
				
				<TouchableOpacity style={styles.Button} onPress={() => router.push('/profile/target-weight')}>
					<Text style={styles.ButtonText}>Submit</Text>
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
	headerText: {
		fontSize: 30,
	},
	middleContainer: {
		flex: 1,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	backgroundImage: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain', 
		justifyContent: 'center',
		alignItems: 'center',
	},

	buttonContainer: {
		flex: 1,
		// backgroundColor: 'red',
		alignItems: 'center',
		paddingBottom: 30,
		paddingLeft: 15,
		paddingRight: 15,
	},
	inputContainer : {
		flex: 1,
		width: '100%',
		height: '30%',
		// backgroundColor: 'blue',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	input: {
		height: 40,
		width: '30%',
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	unit:{
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: 5,
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
