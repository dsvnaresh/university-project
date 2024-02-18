import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { router } from 'expo-router';


export default function App() {
	return (
		<ImageBackground
			source={require('../assets/landing.jpg')}
			style={styles.backgroundImage}
		>
			<View style={styles.container}>
				<View style= {styles.textContainer}> 
					<View style= {styles.textHeader}>
						<Text style={styles.textSmall}>Welcome to </Text>
						<Text style={styles.textBig}>Calorie Watch</Text>
					</View>
					
					<TouchableOpacity 
						style={styles.button}
						// onPress={() => router.push('/auth/login')} // Assuming you have navigation set up
						onPress={() => router.push('/profile/weight')}
					>
						<Text style={styles.buttonText}>Login</Text>
					</TouchableOpacity>
				</View>

				<StatusBar style="auto" />
			</View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	backgroundImage: {
		flex: 1,
		resizeMode: 'cover', // or 'stretch' or 'contain'
		justifyContent: 'center',
		alignItems: 'center',
	},
	textContainer : {
		flex: 1,
		resizeMode: 'cover', 
		justifyContent: 'space-between',
		alignItems: 'center',	
		margin: '10%'
	},
	textHeader: {
		resizeMode: 'cover', 
		justifyContent: 'center',
		alignItems: 'center',
	},
	textSmall: {
		fontSize: 20,
	},
	textBig: {
		fontSize: 30,
	},
	button: {
		backgroundColor: '#088F8F', 
		paddingVertical: 12,
		paddingHorizontal: 30,
		borderRadius: 20,
		marginBottom: 30,
	},
	buttonText: {
		color: '#fff',
		fontSize: 20,
	},
});
