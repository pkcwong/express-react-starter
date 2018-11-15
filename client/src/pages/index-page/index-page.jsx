import React from 'react';
import { connect } from 'react-redux';
import { LocaleAction } from "../../redux/actions/locale-action";

class Component extends React.Component {

	render() {
		return (
			<React.Fragment>
				<h1>
					{this.props.strings['welcome']}
				</h1>
			</React.Fragment>
		)
	}

	componentDidMount() {
		this.props.dispatch(LocaleAction.set('en'));
	}

}

export const IndexPage = connect((store) => {
	return {
		strings: store['LocaleReducer']['strings']
	};
})(Component);
