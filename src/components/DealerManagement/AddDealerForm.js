import React from "react";

const initial_state = {
    name: "",
    decks: 2,
    blackjack_payout: 1.5,
    hits_soft_17: true,
    allow_surrender: false,
    max_split_hands: 1,
    allow_resplit_aces: false,
    allow_double_after_split: false,
    allow_insurance: false,
    dealer_wins_ties: false,
}

class AddDealerForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = initial_state

        this.handleText = this.handleText.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.handleSave(this.state);
        this.setState(initial_state)
    }

    handleText(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleCheckbox(e) {
        this.setState({
            [e.target.name]: e.target.checked
        })
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={ this.handleSubmit }>
                    <p>Name:                     <input onChange={ this.handleText }     name="name"                     type="text"     value={ this.state.name }/></p>
                    <p>Number of decks:          <input onChange={ this.handleText }     name="decks"                    type="text"     value={ this.state.decks }/></p>
                    <p>Blackjack payout:         <input onChange={ this.handleText }     name="blackjack_payout"         type="text"     value={ this.state.blackjack_payout }/></p>
                    <p>Hits on soft 17:          <input onChange={ this.handleCheckbox } name="hits_soft_17"             type="checkbox" checked={ this.state.hits_soft_17 }/></p>
                    <p>Allow insurance:          <input onChange={ this.handleCheckbox } name="allow_insurance"          type="checkbox" checked={ this.state.allow_insurance }/></p>
                    <p>Allow surrender:          <input onChange={ this.handleCheckbox } name="allow_surrender"          type="checkbox" checked={ this.state.allow_surrender }/></p>
                    <p>Maximum split hands:      <input onChange={ this.handleText }     name="max_split_hands"          type="text"     value={ this.state.max_split_hands }/></p>
                    <p>Allow resplit aces:       <input onChange={ this.handleCheckbox } name="allow_resplit_aces"       type="checkbox" checked={ this.state.allow_resplit_aces }/></p>
                    <p>Allow double after split: <input onChange={ this.handleCheckbox } name="allow_double_after_split" type="checkbox" checked={ this.state.allow_double_after_split }/></p>
                    <p>Dealer wins ties:         <input onChange={ this.handleCheckbox } name="dealer_wins_ties"         type="checkbox" checked={ this.state.dealer_wins_ties }/></p>
                    <button>Save</button>
                </form>
            </React.Fragment>
        )
    }
}

export default AddDealerForm;