import * as React from 'react';

class Register extends React.Component<IRegisterProps, IRegisterState>{
    constructor(props: IRegisterProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Please Register</h2>
                    <form className="form-group border border-dark rounded p-2">
                        <label>Username:</label>
                        <input type="text" placeholder="Required" className="form-control"/>
                        <label>Email:</label>
                        <input type="text" placeholder="Required" className="form-control"/>
                        <label>Password:</label>
                        <input type="text" placeholder="Required" className="form-control"/>
                        <label>Confirm Password:</label>
                        <input type="text" placeholder="Required" className="form-control"/>
                        <button className="btn btn-dark mt-2">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}


interface IRegisterProps {};
interface IRegisterState {};


export default Register;