import React, {Component} from 'react';

class FooterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div>
                <footer className={"bms-footer"}>
                    <p>All Rights Reserved 2022 @jmilthedude</p>
                </footer>

            </div>
        );
    }
}

export default FooterComponent;