import React from "react";

const Dealer = ({ dealer }) => (
    <React.Fragment>
        <h2>Dealer #{ dealer.id }: { dealer.name }</h2>
        <p>Number of decks: { dealer.decks }</p>
        <p>Blackjack payout: { dealer.blackjack_payout }</p>
        <p>Hits on soft 17: { dealer.hits_soft_17 ? "Yes" : "No" }</p>
        <p>Allow insurance: { dealer.allow_insurance ? "Yes" : "No" }</p>
        <p>Allow surrender: { dealer.allow_surrender ? "Yes" : "No" }</p>
        <p>Maximum split hands: { dealer.max_split_hands }</p>
        <p>Allow resplit aces: { dealer.allow_resplit_aces ? "Yes" : "No" }</p>
        <p>Allow double after split: { dealer.allow_double_after_split ? "Yes" : "No" }</p>
        <p>Dealer wins ties: { dealer.dealer_wins_ties ? "Yes" : "No" }</p>
    </React.Fragment>
)

export default Dealer;
