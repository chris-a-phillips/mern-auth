import React, { useState, useContext } from 'react';
import { UserContext } from '../../utils/UserContext';
import { login } from '../../utils/UserLogic';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import {
	FormInput,
	FormLabel,
	LoginForm,
	LoginH1,
	LoginWrapper,
	LoginPageButton,
	SubmitButton,
	ErrorMessage,
} from './SCLogin';

const Login = () => {
	const { user, setUser } = useContext(UserContext);
	const [redirect, setRedirect] = useState(false);
	const [newUser, setNewUser] = useState(false);
	const [error, setError] = useState('');
	const [credentials, setCredentials] = useState({
		name: '',
		email: '',
		password: '',
		re_password: '',
	});

	const handleChange = (event) => {
		event.preventDefault();
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value,
		});
	};

	const handleClick = () => {
		setNewUser(!newUser);
	};

	const handleSubmit = (event) => {
		const signUpURL = 'http://localhost:4000/api/signup';
		const signInURL = 'http://localhost:4000/api/signin';

		if (!newUser) {
			event.preventDefault();
			axios({
				method: 'post',
				url: signInURL,
				data: credentials,
			})
				.then((res) => {
					console.log(res)
					if (res.data.token) {
						setUser({
							email: credentials.email,
							token: res.data.token,
						});
						setRedirect(true);
					} else {
						setError(res.data);
						throw new Error('There was an error signing in');
					}
					return res;
				})
				.catch(setError('There was an error signing in'));
		} else if (newUser) {
			event.preventDefault();
			axios({
				method: 'post',
				url: signUpURL,
				data: credentials,
			})
				.then(() => {
					setUser('');
					setNewUser(false);
				})
				.catch(setError('There was an error signing up'));
		}
	};

	if (redirect) {
		return <Redirect to='/dashboard' />;
	}

	return (
		<LoginWrapper>
			<h1>Login</h1>
			{/* for test login logic */}
			<button
				onClick={async () => {
					const user = await login();
					setUser(user);
					setRedirect(true);
				}}>
				Test Login
			</button>
			{!newUser ? (
				<LoginForm onSubmit={handleSubmit}>
					<LoginH1>Sign In</LoginH1>
					<FormInput
						type='email'
						name='email'
						placeholder='name@email.com'
						value={credentials.email}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='email'>Email</FormLabel>
					<FormInput
						type='password'
						name='password'
						placeholder='Enter Password'
						value={credentials.password}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='password'>Password</FormLabel>
					<SubmitButton>Log In</SubmitButton>
					<ErrorMessage>{error}</ErrorMessage>
				</LoginForm>
			) : (
				<LoginForm onSubmit={handleSubmit}>
					<LoginH1>Sign Up</LoginH1>
					<FormInput
						type='text'
						name='name'
						placeholder='Enter Name'
						value={credentials.name}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='name'>Name</FormLabel>
					<FormInput
						type='email'
						name='email'
						placeholder='name@email.com'
						value={credentials.email}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='email'>Email</FormLabel>
					<FormInput
						type='password'
						name='password'
						placeholder='Enter Password'
						value={credentials.password}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='password'>Password</FormLabel>
					<FormInput
						type='password'
						name='re_password'
						placeholder='Re-Enter Password'
						value={credentials.re_password}
						onChange={handleChange}></FormInput>
					<FormLabel htmlFor='retypePassword'>
						Retype Password
					</FormLabel>
					<SubmitButton>Register</SubmitButton>
					<ErrorMessage>{error}</ErrorMessage>
				</LoginForm>
			)}
			{!newUser ? (
				<LoginPageButton onClick={handleClick}>
					Need A New Profile?
				</LoginPageButton>
			) : (
				<LoginPageButton onClick={handleClick}>
					Already Have A Profile?
				</LoginPageButton>
			)}
			{/* test for redirect */}
			{/* <button onClick={() => setRedirect(true)}>test redirect</button> */}
		</LoginWrapper>
	);
};

export default Login;
