import styled from '@emotion/styled'
import theme from '../../theme.js'


const setBgColor = ({tag}) => {

switch(tag) {
	case 'good':
		return  theme.colors.green;
	case 'neutral':
		return  theme.colors.blue;
	case 'bad' :
		return theme.colors.red;
	default:
		return theme.colors.black
}
}

export const FeedBackList = styled.ul`
display: flex;
justify-content: space-evenly;
margin-top: 50px;
`
export const FeedBackItem = styled.li`
list-style: none;

margin-right: 25px;

`

export const FeedBackButton = styled.button`
font-size: 16px;
font-weight: 700;
border: 1px solid black;
border-radius: 10%;
padding: 15px;
background-color: transparent;

transition: background-color 500ms ease-in, transform 1500ms ease-in-out;

:focus {
color: whitesmoke;
text-shadow: 1px 1px 2px pink;
background-color: ${setBgColor};
}
`