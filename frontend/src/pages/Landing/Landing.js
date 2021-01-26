import { React, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
	LandingCaption,
	LandingHeading,
	LandingingTextBox,
	LandingSubcaption,
	LandingWrapper,
	StartButton,
} from './SCLanding';

const Landing = () => {
	const [redirect, setRedirect] = useState(false);

	const handleClick = () => {
		setRedirect(true);
	};

	if (redirect) {
		return <Redirect to='/login' />;
	}

	return (
		<LandingWrapper>
			<LandingingTextBox>
				<LandingHeading>Landing Page</LandingHeading>
				<LandingCaption>
					Caption goes here
					<br />
				</LandingCaption>
				<LandingSubcaption>Subcaption 1</LandingSubcaption>
				<LandingSubcaption>Subcaption 2</LandingSubcaption>
				<StartButton onClick={handleClick}>
					Get Started
					<br />
					(login page)
				</StartButton>
			</LandingingTextBox>
		</LandingWrapper>
	);
};

export default Landing;
