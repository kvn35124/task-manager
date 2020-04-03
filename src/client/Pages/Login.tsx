import * as React from 'react';

class Login extends React.Component<ILoginProps, ILoginState>{
    constructor(props: ILoginProps) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (
            <h1>This is the Login page</h1>
        )
    }
}


interface ILoginProps {};
interface ILoginState {};


export default Login;