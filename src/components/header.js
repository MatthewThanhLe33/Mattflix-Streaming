import React, { Component } from 'react';
import logo from '../assets/svg/logo.svg';
import { NavLink, Link } from 'react-router-dom';
import StyledComponents from 'styled-components';
import Icon from 'react-icons-kit';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';


class Header extends Component {
	render () {
		return (
			<HeaderComponent className="header-container">
				<div className="header-top">
					<Logo src={logo} />
					<NavLink to="/" className="sign-in-btn">Sign In</NavLink>
				</div>
				{/* Header Content */}
				<div className="header-content">
					<Title>See what's next</Title>
					<SubTitle>WATCH ANYWHERE. CANCEL ANYTIME.</SubTitle>
					<Link className="try-now-btn">
						try it now
						<Icon className="icon" icon={ic_keyboard_arrow_right} size={37} />
					</Link>
				</div>
			</HeaderComponent>
		);
	}
}

export default Header;

// Logo
const Logo = StyledComponents.img
`
	width: 10rem;
	height: 3.5rem;
	position: absolute;
	top: 25%;
	left: 45%;
	translate: transform(-50%, -50%);
`;

// Header Container
const HeaderComponent = StyledComponents.div
`
	// Header Top
	.header-top {
		position: relative;
		height: 10rem;
		z-index: 1;
    }

	// Header Content
	.header-content {
		width: 65%;
		position: relative;
		margin: 4.5rem auto 0;
		display: flex;
		justify-content: center;
		align-content: center;
		text-align: center;
		flex-direction: column;
		z-index: 1;
    }

	// Buttons
	.sign-in-btn {
		background: var(--main-red);
		color: var(--main-white);
		cursor: pointer;

		border-radius: 0.1875;
		font-size: 1rem;
		font-weight: 400;
		line-height: normal;

		margin: 1.125rem 3% 0;
		padding: 0.4375rem 1.0625rem;
		position: absolute;
		right: 0;
		top: 0;
		translate: transform(-50%, -50%);
		transition: background 0.2s ease-in;

		&:hover {
			background: var(--main-red-hover);
        }
    }

	.try-now-btn {
		// @TODO: fix centering and fit to content
		display: inline-block;
		background: var(--main-red);
		text-transform: uppercase;
		border: none;
		outline: none;
		margin: 0 33%;
		padding: 1.5rem;
		border-radius: 0.1875rem;
		font-size: 2rem;
		text-align: center;
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.5);
		transition: background 0.2s ease-in;
		cursor: pointer;
		color: var(--main-white);
		//width: 297px;

		&:hover {
			background: var(--main-red-hover);
        }
    }

	// Icon
	.icon svg {
		vertial-align: bottom;
		margin-left: 1.5rem;
    }
`;

// Main Title
const Title = StyledComponents.h1
`
	margin: 0 0 1.2rem;
	font-size: 5rem;
	font-weight: 700;
	line-height: 1.1em;
`;

const SubTitle = StyledComponents.h2
`
	font-weight: 400;
	font-size: 1.875rem;
	line-height: 1.25em;
	margin: 0 0 1.875rem;
	text-transform: uppercase;
`;