import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { DogInfoState, onRequestDog } from './actions';

type DogSagaProps = StateFromProps & DispatchFromProps;

interface StateFromProps extends DogInfoState {}

interface DispatchFromProps {
	onRequestDog: typeof onRequestDog;
}

const mapStateToProps = (state: DogInfoState): StateFromProps => {
  return {
    isFetchingImage: state.isFetchingImage,
    dogImage: state.dogImage,
    error: state.error
  }
}

const mapDispatchToProps = (dispatch: Dispatch): DispatchFromProps => ({
	...bindActionCreators({
			onRequestDog
		},
		dispatch
	)
});

class DogSaga extends Component<DogSagaProps> {
	constructor(props: DogSagaProps) {
		super(props);
	}

	public render = () => {
		const { isFetchingImage, dogImage, onRequestDog, error } = this.props;
		
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={dogImage || logo} className='App-logo' alt='logo'></img>
					<h1 className='App-title'>Welcome to Dog Saga</h1>
				</header>

				{dogImage ? 
					( <p className='App-intro'>Keep clicking for new dogs</p> ) : 
					( <p className='App-intro'>Replace the React icon with a dog!</p>  )
				}

				{isFetchingImage ?
					( <button disabled>Fetching...</button> ) :
					( <button onClick={onRequestDog}>Request a Dog</button> )
				}

				{error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}
			</div>
		);
	}
}

export default connect(
	mapStateToProps, 
	mapDispatchToProps
)(DogSaga);
