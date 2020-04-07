import * as React from 'react';

class Login extends React.Component<ILoginProps, ILoginState>{
    constructor(props: ILoginProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <div className="row">
                <div className="col">
                    <h2 className="text-center">Please Login</h2>
                    <form className="form-group border border-dark rounded p-2">
                        <label>Username:</label>
                        <input type="text" placeholder="Required" className="form-control"/>
                        <label>Password:</label>
                        <input type="text" placeholder="Required" className="form-control"/>
                        <button className="btn btn-dark mt-2">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}


interface ILoginProps {};
interface ILoginState {};


export default Login;