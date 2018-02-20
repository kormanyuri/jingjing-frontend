/**
 * Created by korman on 06.02.18.
 */
import React from 'react';

import {Page, Icon, Panel, PanelBody} from 'react-weui';

const IconBox = (props) => (
    <div className="icon-box">
        {props.icon}
        <div className="icon-box__ctn">
            <h3 className="icon-box__title">{props.title}</h3>
            <p className="icon-box__desc">{props.desc}</p>
        </div>
    </div>
);

export default class ConfirmationSelectSlot extends React.Component {

    constructor(props){
        super(props);
        const lastBuy = JSON.parse(window.localStorage.getItem('lastBuy'));

        this.state = {
            lastBuy: lastBuy
        };
    }

    render() {
        return (
            <Page>
                <Panel>

                    <PanelBody style={{ padding: '10px'}}>
                        <IconBox
                            icon={<Icon size="large" value="success"/>}
                            title="You can turn on Purifier"
                            desc={`The expire time is ` + this.state.lastBuy.timeEnd}
                            />
                    </PanelBody>
                </Panel>
            </Page>
        );
    };
}