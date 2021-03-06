import React, { Component } from 'react';
import {
    Button,
    Container,
    Header,
    Icon,
    Table
} from 'semantic-ui-react';

export default class AddressTableFooter extends Component {

    render() {
        const { networkReady, isComfirmed, onGenerateAddress, onCheckBalances, checkingBalances, addressListLoading, checkingBalancesError, addressListError } = this.props

        return (
            <Container textAlign='center'>
                <Button basic size='big' key='1' style={{ marginTop: '1em' }} disabled={!isComfirmed} onClick={onGenerateAddress} loading={addressListLoading}>
                    <Icon name='plus'  />
                    Add address
                </Button>
                <Button basic size='big' key='2' style={{ marginTop: '1em' }} disabled={!networkReady}  onClick={onCheckBalances} loading={checkingBalances}>
                    <Icon name='redo alternate' />
                    Check balances
                </Button>
                <div>{addressListError}</div>
                <div>{checkingBalancesError}</div>
            </Container>
        );
    };
}
