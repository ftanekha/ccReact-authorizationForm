'use strict'
class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        password: 'swordfish',
        authorized: false
        };
        this.authorize = this.authorize.bind(this);
    }

    authorize(e) {
        const password = e.target.querySelector(
        'input[type="password"]').value;
        const auth = password == this.state.password;
        this.setState({
            authorized: auth
        });
    }

    render() {
        const login = (
            <form action='#' onSubmit={this.authorize}>
                <input type='password' and placeholder='Password' />
                <input type='submit' />
            </form>
        ),
        contactInfo = (
            <ul>
                <li>
                    client@example.com
                </li>
                <li>
                    555.555.5555
                </li>
            </ul>
        )

        return (
                <div id='authorization'>
                    <h1>{this.state.authorized && 'Contact' || 'Enter the Password'}</h1>
                    <div>{this.state.authorized && contactInfo || login}</div>
                </div>
        )
        
    }
}

ReactDOM.render(
    <Contact />, 
    document.getElementById('app')
);