import React, { Component } from "react";

import ListDealers from "./components/DealerManagement/ListDealers";
import AddDealerForm from "./components/DealerManagement/AddDealerForm";
import UpdateDealerForm from "./components/DealerManagement/UpdateDealerForm";
import { fetchDealers, fetchDealer, addDealer, updateDealer } from "./dealer_management_api";

class DealerManagement extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dealers: [],
            dealer: {},
            current_dealer_id: 0,
            is_creating: false,
            is_editing: false,
        }

        this.handleClick = this.handleClick.bind(this);
        this.handleCreateDealer = this.handleCreateDealer.bind(this);
        this.getData = this.getData.bind(this);
        this.handleAddDealer = this.handleAddDealer.bind(this);
        this.handleUpdateDealer = this.handleUpdateDealer.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleChangeCheckbox = this.handleChangeCheckbox.bind(this);
    }

    componentDidMount() {
        this.getData()
    }

    async getData() {
        let data = await fetchDealers();

        this.setState({
            dealers: data
        });
    }

    async handleClick(id) {
        let selected_dealer = await fetchDealer(id);

        this.setState((prevState) => {
            return {
                current_dealer_id: id,
                is_creating: false,
                is_editing: true,
                dealer: selected_dealer,
            }
        })
    }

    handleCreateDealer() {
        this.setState((prevState) => {
            return {
                is_creating: true,
                is_editing: false,
            }
        })
    }

    async handleAddDealer(dealer) {
        await addDealer(dealer);
        await this.getData();
    }

    async handleUpdateDealer(dealer) {
        await updateDealer(dealer, dealer.id);
        await this.getData();
    }

    handleData(data) {
        let result = JSON.parse(data);

        let current_dealer = this.state.dealer;
        if(current_dealer.id === result.id) {
            this.setState({ dealer: result });
        }
    }

    handleChangeText(e) {
        let current_dealer = this.state.dealer;
        current_dealer[e.target.name] = e.target.value;

        this.setState({
            dealer: current_dealer
        });
    }

    handleChangeCheckbox(e) {
        let current_dealer = this.state.dealer;
        current_dealer[e.target.name] = e.target.checked;

        this.setState({
            dealer: current_dealer
        });
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={ this.handleCreateDealer }>Create Dealer</button>
                <ListDealers dealers={ this.state.dealers } handleClick={(id) => this.handleClick(id)}/>
                {
                    this.state.is_creating ?
                    <AddDealerForm handleSave={ this.handleAddDealer }/>
                    :
                    null
                }
                {
                    this.state.is_editing ?
                    <React.Fragment>
                        <p>Hello {this.state.dealer.id}</p>
                        <UpdateDealerForm handleSave={ this.handleUpdateDealer } dealer={ this.state.dealer }/>
                    </React.Fragment>
                    :
                    null
                }
            </React.Fragment>
        );
    }
}

export default DealerManagement;
