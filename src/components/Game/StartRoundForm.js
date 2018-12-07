import React from "react";


class StartRoundForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form>
        Amount to bet:
        <input type="textarea" value={this.state.value} onChange={this.handleChange} />
        <button onClick={(event) => this.props.handleStartRound(event, this.state.value)}>Make Bet</button>
      </form>
    );
  }
}

export default StartRoundForm;
