/**
 * Created by korman on 11.02.18.
 */
import React from 'react';
// import {Page} from 'react-weui';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

import injectSheet from 'react-jss';

const styles  = {
    weuiTabbarLabelFont: {
        fontSize: '20px'
    }
};

const attachMoney = <FontIcon className="material-icons">attach_money</FontIcon>;
const deviceHub = <FontIcon className="material-icons">device_hub</FontIcon>;

@injectSheet(styles)

export default class Core extends React.Component {
    constructor(props){
        super(props);
        const location = window.location.pathname;

        this.state = {
            menuItems: {
                shoppers:   '',
                purifiers:  '',
                statement:  '',
                invoice:    ''
            }
        };

        const regForDeviceDetail = /\/shopper\/device-detail\/[0-9]+/;

        switch (location)
        {
            case '/shopper/device-list':
                    this.state.menuItems.purifiers = 'weui-bar__item_on';
                break;
            case '/shopper/statement-list':
                    this.state.menuItems.statement = 'weui-bar__item_on';
                break;
        }

        if (regForDeviceDetail.test(location)) {
            this.state.menuItems.purifiers = 'weui-bar__item_on';
        }
    }


    openPurifierList() {
        window.location = '/shopper/device-list';
    }

    openStatement() {
        window.location = '/shopper/statement-list';
    }

    render(){
        const {classes, children} = this.props;

        return(
            <Paper>
                <Paper>
                    {this.props.children}

                    <BottomNavigation selectedIndex={this.state.selectedIndex} style={{position: 'fixed', bottom: '0px'}}>
                        <BottomNavigationItem
                            label="Massages List"
                            icon={deviceHub}
                            onClick={this.openPurifierList.bind(this)}
                        />
                        <BottomNavigationItem
                            label="Statement"
                            icon={attachMoney}
                            onClick={this.openStatement.bind(this)}
                        />
                    </BottomNavigation>
                </Paper>

            </Paper>
        );
    }
}