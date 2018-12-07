const url = process.env.REACT_APP_DEALER_MANAGEMENT_API_URL;

export const fetchDealers = async () => {
    return fetch(url, {})
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

export const fetchDealer = (id) => {
    return fetch(`${url + id}`, {})
        .then(res => res.json())
        .then(data => {
            return data;
        });
}

export const addDealer = (dealer) => {
    fetch(url, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dealer)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Dealer added:");
        console.log(data);
    })

    return dealer;
}

export const updateDealer = (dealer, id) => {
    fetch(`${url}update/${id}/`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dealer)
    })
    .then(res => res.json())
    .then(data => {
        console.log("Dealer updated:");
        console.log(data);
    })

    return dealer;
}
