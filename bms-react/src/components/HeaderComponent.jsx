import React, {Component} from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
                <header className={"bms-header"}>
                    <nav className={"bms-navbar"}>
                        <div><a className={"bms-navbar-name"} href="http://192.168.86.69:3000/">Budget Management System</a></div>
                    </nav>
                </header>
        );
    }
}

export default HeaderComponent;