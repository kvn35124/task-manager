import * as React from 'react';
import { json } from '../../server/utilities/api';
import { RouteComponentProps } from 'react-router-dom';

class Register extends React.Component<IRegisterProps, IRegisterState>{
    constructor(props: IRegisterProps) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }


    async handleSubmit() {
        event.preventDefault();
        try {
            let newUser = {
                username: this.state.username,
                password: this.state.password
            }
            let results = await json('/api/users', 'POST', newUser);
            console.log(results);
            this.props.history.push('/')
        } catch (error) {
            console.log(error);
        }
    }



    render() {
        return (
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Please Register</h2>
                    <form className="form-group border border-dark rounded p-2">
                        <label>Username:</label>
                        <input type="text" placeholder="Required" className="form-control" value={this.state.username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ username: e.target.value })} />
                        <label>Password:</label>
                        <input type="text" placeholder="Required" className="form-control" value={this.state.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({password: e.target.value})} />
                        <label>Confirm Password:</label>
                        <input type="text" placeholder="Required" className="form-control" />
                        <button className="btn btn-dark mt-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()} >Register</button>
                    </form>
                </div>
            </div>
        )
    }
}


interface IRegisterProps extends RouteComponentProps { };
interface IRegisterState {
    username: string;
    password: string;
};


export default Register;