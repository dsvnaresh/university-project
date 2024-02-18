
import React , {useState} from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Login() {

	const  	[email, setEmail] = useState("");
	const 	[emailError, setEmailError] = useState('');
    const 	[password, setPassword] = useState("");
	const 	[passwordError, setPasswordError] = useState('');

	const isValidEmail = (emailVal)=> {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(emailVal);
	}

	const handleSignIn = ()=> {
		setEmailError("")
		setPasswordError("")

		if(isValidEmail(email) === false){
			setEmailError("Please enter a valid email address.")
		}else if(password.length < 8){
			setPasswordError("Password must be at least 8 characters long.");
		}
		else{
			router.push('/profile/gender')
		} 
	}

	return (
		<View style={styles.container}>
			<View style={styles.textHeader}>
				<Text style={styles.textBig}>Sign in</Text>
				<Text style={styles.textSmall}>If you have previously created CalorieWatch account, 
				you can sign in to this account using the same sign in method ( either sign in with email)</Text>
			</View>

			<View style={styles.form}>
				<TextInput
					style={styles.input}
					placeholder="Email"
					keyboardType="email-address"
					autoCapitalize="none"
					value= {email}
					onChangeText={(text) => setEmail(text)}
				/>
				{emailError ? <Text style={styles.error}>{emailError}</Text> : null}
				<TextInput
					style={styles.input}
					placeholder="Password"
					secureTextEntry
					value = {password}
					onChangeText={(text) => setPassword(text)}
				/>
				{passwordError ? <Text style={styles.error}>{passwordError}</Text> : null}
				<TouchableOpacity style={styles.signinButton} onPress={() => handleSignIn()}>
					<Text style={styles.signinButtonText}>Sign In</Text>
				</TouchableOpacity>
				<Text style={styles.forgotPasswordText}>Forgot your password?</Text>

				<TouchableOpacity style={styles.googleButton} onPress={()=>{}}>
					<Image source={require('../../assets/google_logo.jpg')} style={styles.googleLogo} />
					<Text style={styles.signinButtonText}>Sign in with Google</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: '#fff',
	},
	textHeader: {
		flex: 1,
		width: '80%',
		justifyContent: 'center',
		alignItems: 'center',
		color: '#fff',
	},
	textSmall: {
		fontSize: 18,
	},
	textBig: {
		fontSize: 30,
	},
	form: {
		flex: 2,
		width: '80%',
		padding: 20,
		borderRadius: 10,
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 5,
		paddingHorizontal: 10,
		marginBottom: 10,
	},
	error: {
		color: 'red',
		marginBottom: 20,
	},
	signinButton: {
		backgroundColor: 'green',
		paddingVertical: 12,
		borderRadius: 5,
		alignItems: 'center',
	},
	signinButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
	forgotPasswordText: {
		textAlign: 'center',
		marginTop: 10,
		color: 'blue', // You can adjust the color as needed
		marginBottom: 30,
	},

	googleButton: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#4285F4', // Google Red
		paddingVertical: 12,
		paddingHorizontal: 24,
		borderRadius: 5,
	},
	googleLogo: {
		width: 24,
		height: 24,
		marginRight: 10,
	},
	signinButtonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},

});
