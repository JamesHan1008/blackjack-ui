const url = process.env.REACT_APP_GAME_API_URL;
const headers = {
    "Accept": "application/json",
    "Content-Type": "application/json"
}

export const startGame = (dealer_id) => {
    return fetch(`${url}start_game/?dealer_id=${dealer_id}`, {})
        .then(res => res.json());
}

export const startRound = (state, bet_amount) => {
    return fetch(`${url}start_round/`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "state": state,
                "bet_amount": bet_amount,
            }),
        })
        .then(res => res.json());
}

export const playerHit = (state) => {
    return fetch(`${url}player_hit/`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "state": state,
            }),
        })
        .then(res => res.json());
}

export const playerStand = (state) => {
    return fetch(`${url}player_stand/`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "state": state,
            }),
        })
        .then(res => res.json());
}

export const playerDouble = (state) => {
    return fetch(`${url}player_double/`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "state": state,
            }),
        })
        .then(res => res.json());
}

export const playerSplit = (state) => {
    return fetch(`${url}player_split/`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "state": state,
            }),
        })
        .then(res => res.json());
}

export const playerSurrender = (state) => {
    return fetch(`${url}player_surrender/`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "state": state,
            }),
        })
        .then(res => res.json());
}

export const playerBuyInsurance = (state) => {
    return fetch(`${url}player_buy_insurance/`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "state": state,
            }),
        })
        .then(res => res.json());
}

export const playerNoInsurance = (state) => {
    return fetch(`${url}player_no_insurance/`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify({
                "state": state,
            }),
        })
        .then(res => res.json());
}
