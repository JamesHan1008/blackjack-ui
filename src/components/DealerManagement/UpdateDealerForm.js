import React from "react";

class UpdateDealerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dealer: this.props.dealer,
            dealer_id: 0,
        }

        this.handleText = this.handleText.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    componentDidMount() {
        this.setState({
            dealer: this.props.dealer,
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleSave(this.state.dealer);
    }

    handleText(e) {
        let current_dealer = this.state.dealer;
        current_dealer[e.target.name] = e.target.value;

        this.setState({
            dealer: current_dealer
        });
    }

    handleCheckbox(e) {
        let current_dealer = this.state.dealer;
        current_dealer[e.target.name] = e.target.checked;

        this.setState({
            dealer: current_dealer
        });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={ this.handleSubmit }>
                    <p>Name:                     <input onChange={ this.handleText }     name="name"                     type="text"     value={ this.state.dealer.name }/></p>
                    <p>Number of decks:          <input onChange={ this.handleText }     name="decks"                    type="text"     value={ this.state.dealer.decks }/></p>
                    <p>Blackjack payout:         <input onChange={ this.handleText }     name="blackjack_payout"         type="text"     value={ this.state.dealer.blackjack_payout }/></p>
                    <p>Hits on soft 17:          <input onChange={ this.handleCheckbox } name="hits_soft_17"             type="checkbox" checked={ this.state.dealer.hits_soft_17 }/></p>
                    <p>Allow insurance:          <input onChange={ this.handleCheckbox } name="allow_insurance"          type="checkbox" checked={ this.state.dealer.allow_insurance }/></p>
                    <p>Allow surrender:          <input onChange={ this.handleCheckbox } name="allow_surrender"          type="checkbox" checked={ this.state.dealer.allow_surrender }/></p>
                    <p>Maximum split hands:      <input onChange={ this.handleText }     name="max_split_hands"          type="text"     value={ this.state.dealer.max_split_hands }/></p>
                    <p>Allow resplit aces:       <input onChange={ this.handleCheckbox } name="allow_resplit_aces"       type="checkbox" checked={ this.state.dealer.allow_resplit_aces }/></p>
                    <p>Allow double after split: <input onChange={ this.handleCheckbox } name="allow_double_after_split" type="checkbox" checked={ this.state.dealer.allow_double_after_split }/></p>
                    <p>Dealer wins ties:         <input onChange={ this.handleCheckbox } name="dealer_wins_ties"         type="checkbox" checked={ this.state.dealer.dealer_wins_ties }/></p>
                    <button>Save</button>
                </form>
            </React.Fragment>
        )
    }
}

export default UpdateDealerForm;