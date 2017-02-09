import React,{ Component } from 'react';

//class based component(CBC) need a render function and JSX in it 
class SearchBar extends Component {

//state is single JS obj, 
//Every CBC have it's own state, if state of that cbc chnage it will rerender with it's children
//defining state in constrsctor 
	constructor(props){
		super(props);
		this.state = {term: ''};
	}

	render(){
		return (
			<div>
				<input 
				value ={this.state.term}
				onChange={event => this.onInputChange(event.target.value)} /> 
				{/*			
				<input onChange={this.onInputChange} />
				<input onChange={event => console.log(event.target.value)} />
				

				Value of state of terms  = {this.state.terms} 
				*/}

			</div>
		); 
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}


// functional based comp.
// const SearchBar = () => {
// 	return <input /> 
// };



//export this to parent component 
export default SearchBar;