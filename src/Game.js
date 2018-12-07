import React, { Component } from "react";

import StartRoundForm from "./components/Game/StartRoundForm";
import { startGame, startRound, playerHit, playerStand, playerDouble, playerSplit, playerSurrender, playerBuyInsurance, playerNoInsurance } from "./game_api";

import Dealer from "./components/DealerManagement/Dealer";
import ListDealers from "./components/DealerManagement/ListDealers";
import { fetchDealers, fetchDealer } from "./dealer_management_api";

class Game extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dealers: [],
            dealer_id: "",
            dealer: {},

            deck: [],
            dealer_cards: [],
            player_cards: [[]],
            hole_card: "",
            current_hand: "",
            hand_finished: [],
            hand_is_doubled: [],
            is_split_valid: false,
            is_double_valid: false,
            is_surrender_valid: false,
            is_insurance_valid: false,
            did_split_aces: false,
            did_buy_insurance: false,

            total_money: 1000,
            bet_amount: 0,
            is_in_game: false,
            is_in_round: false,
            dealer_message: "",
            messages: [""],
        }

        this.handleFetchDealers = this.handleFetchDealers.bind(this);
        this.handleStartGame = this.handleStartGame.bind(this);
        this.handleStartRound = this.handleStartRound.bind(this);
        this.handlePlayerHit = this.handlePlayerHit.bind(this);
        this.handlePlayerStand = this.handlePlayerStand.bind(this);
        this.handlePlayerDouble = this.handlePlayerDouble.bind(this);
        this.handlePlayerSplit = this.handlePlayerSplit.bind(this);
        this.handlePlayerSurrender = this.handlePlayerSurrender.bind(this);
        this.handlePlayerBuyInsurance = this.handlePlayerBuyInsurance.bind(this);
        this.handlePlayerNoInsurance = this.handlePlayerNoInsurance.bind(this);
    }

    componentDidMount() {
        this.handleFetchDealers()
    }

    async handleStartGame(dealer_id) {
        console.log("Game started. Dealer selected: " + dealer_id)

        let resp = await startGame(dealer_id);

        this.setState((prevState) => {
            return {
                dealer_id: dealer_id,
                deck: resp["deck"],
                is_in_game: true,
            }
        })
    }

    async handleStartRound(event, bet_amount) {
        event.preventDefault();
        console.log("Round started. Bet amount: " + bet_amount)

        let new_state = await startRound(this.state, bet_amount);
        this.setState(new_state);
    }

    async handlePlayerHit() {
        console.log("Player hits")

        let new_state = await playerHit(this.state);
        this.setState(new_state);
    }

    async handlePlayerStand() {
        console.log("Player stands")

        let new_state = await playerStand(this.state);
        this.setState(new_state);
    }

    async handlePlayerDouble() {
        console.log("Player doubles")

        let new_state = await playerDouble(this.state);
        this.setState(new_state);
    }

    async handlePlayerSplit() {
        console.log("Player splits")

        let new_state = await playerSplit(this.state);
        this.setState(new_state);
    }

    async handlePlayerSurrender() {
        console.log("Player surrenders")

        let new_state = await playerSurrender(this.state);
        this.setState(new_state);
    }

    async handlePlayerBuyInsurance() {
        console.log("Player buys insurance")

        let new_state = await playerBuyInsurance(this.state);
        this.setState(new_state);
    }

    async handlePlayerNoInsurance() {
        console.log("Player does not buy insurance")

        let new_state = await playerNoInsurance(this.state);
        this.setState(new_state);
    }

    async handleFetchDealers() {
        console.log("Fetching dealers")

        let dealers = await fetchDealers()

        this.setState({ dealers });
    }

    async handleFetchDealer(dealer_id) {
        console.log("Dealer " + dealer_id + " is selected")

        let dealer = await fetchDealer(dealer_id);

        this.setState({ dealer_id, dealer });
    }

    render() {
        return (
            <React.Fragment>
                <p>Money Left: { this.state.total_money }</p>
                <p>Bet Amount: { this.state.bet_amount }</p>
                {
                    this.state.is_in_game ?
                    <React.Fragment>
                            <p>Number of Cards Left: { this.state.deck.length }</p>
                            {
                                this.state.is_in_round ?
                                <React.Fragment>
                                    <p>Dealer Cards: { this.state.dealer_cards.join(", ") }</p>
                                    {
                                        this.state.player_cards.map((hand, h) => {
                                            return (this.state.current_hand === h ?
                                                <p key={h}><b>Player Cards: {hand.join(", ")}</b></p>
                                                :
                                                <p key={h}>Player Cards: {hand.join(", ")}</p>
                                            );
                                        })
                                    }
                                    {
                                        this.state.is_insurance_valid ?
                                        <React.Fragment>
                                            <p>Buy insurance?</p>
                                            <button onClick={ this.handlePlayerBuyInsurance }>Yes</button>
                                            <button onClick={ this.handlePlayerNoInsurance }>No</button>
                                        </React.Fragment>
                                        :
                                        <React.Fragment>
                                            <button onClick={ this.handlePlayerHit }>Hit</button>
                                            <button onClick={ this.handlePlayerStand }>Stand</button>
                                            {
                                                this.state.is_double_valid ?
                                                <button onClick={ this.handlePlayerDouble }>Double</button>
                                                :
                                                null
                                            }
                                            {
                                                this.state.is_split_valid ?
                                                <button onClick={ this.handlePlayerSplit }>Split</button>
                                                :
                                                null
                                            }
                                            {
                                                this.state.is_surrender_valid ?
                                                <button onClick={ this.handlePlayerSurrender }>Surrender</button>
                                                :
                                                null
                                            }
                                        </React.Fragment>
                                    }
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <p>{ this.state.dealer_message }</p>
                                    { this.state.messages.map((message, h) => <p key={h}>{ message }</p>) }
                                    <StartRoundForm handleStartRound={ this.handleStartRound } />
                                </React.Fragment>
                            }
                    </React.Fragment>
                    :
                    <React.Fragment>
                    <ListDealers dealers={ this.state.dealers } handleClick={(dealer_id) => this.handleFetchDealer(dealer_id)} />
                    {
                        this.state.dealer_id === ""?
                        <p>Choose a dealer to play against</p>
                        :
                        <React.Fragment>
                            <Dealer dealer={ this.state.dealer } />
                            <button onClick={ () => this.handleStartGame(this.state.dealer_id) }>Play This Dealer</button>
                        </React.Fragment>
                    }
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default Game;
