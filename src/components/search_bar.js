import React,{ Component } from 'react';

//class based component(CBC) need a render function and JSX in it 
class SearchBar extends Component {

//stete is single JS obj, 
//Every CBC have it's own state, if state of that cbc chnage it will rerender with it's children
//defining state in constrsctor 
	constructor(props){
		super(props);
		this.state = {terms: ''};
	}

	render(){
		return (
			<div>
			<input onChange={this.onInputChange} />
			<input onChange={event => console.log(event.target.value)} />
			</div>
		); 
	}

	onInputChange(event) {
		console.log(event);

	}
}


// functional based comp.
// const SearchBar = () => {
// 	return <input /> 
// };



//export this to parent component 
export default SearchBar;