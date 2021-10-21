import React, {Component} from "react";
import TodoItems from "./TodoItems";
import axios from "axios";

// import { useHistory } from "react-router-dom";

class TodoList extends Component {
	constructor(props){
		super(props);
		// const history = useHistory();
		if (!localStorage.getItem('user_id')) {
			this.props.history.push('/login');
		}
		this.state = {items: []};
		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	addItem(e){
		if(this._inputElement.value !== ""){
			var newItem = {
				text: this._inputElement.value, 
				key: Date.now()
			};
			axios.post('/todo', newItem)
			.then(() => {
				this.setState((prevState) => {
					return {
						items: prevState.items.concat(newItem)
					};
				});
				this._inputElement.value = "";
			});
		}
		console.log(this.state.items);
		e.preventDefault();
	}
	deleteItem(key){
		var filteredItems = this.state.items.filter(function(item) {
			return (item.key !== key);
		});

		axios.post('/todo', key)
		.then(() => {
			this.setState({
				items: filteredItems
			});
			this._inputElement.value = "";
		});
	}
	render(){
		return(
			<div className="todoListMain">
			  <div className="header">
			    <form onSubmit={this.addItem}>
			      <input ref={(a) => this._inputElement = a} placeholder="enter task">
			      </input>
			      <button type="submit">add</button>
			    </form>
			    <TodoItems entries={this.state.items} delete={this.deleteItem} />
			  </div>
		        </div>
		);
	}
}

export default TodoList; 
