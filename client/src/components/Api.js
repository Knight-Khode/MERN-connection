import React, { Component } from 'react'


class Api extends Component {
   
    state={
        users:{
            name:'',
            email:'',
            password:''
        }
    }

    onChangeHandler=(e)=>{
        this.setState({
            users:{
                ...this.state.users,
                [e.target.name]:e.target.value
            }
        })
    }

    onSubmit=(e)=>{
        e.preventDefault()
        this.props.createUser(this.state.users)
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input type="text" name="name" placeholder="enter name" value={this.state.users.name} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="enter email" value={this.state.users.email} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="enter password" value={this.state.users.password} onChange={this.onChangeHandler}/>
                </div>
                <div className="form-group">
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Api
