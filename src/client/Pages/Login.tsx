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
                <div className="col-4">
                    <div className="card shadow">
                        <div className="card-header">
                            To Do
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Test</li>
                            <li className="list-group-item">Test</li>
                            <li className="list-group-item">Test</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}


interface ILoginProps {};
interface ILoginState {};


export default Login;