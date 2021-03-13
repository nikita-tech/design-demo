import React, {Component} from 'react';

class PlaceYourBid extends Component {
    constructor() {
        super();
        this.state = {
            mobile: '',
            name: '',
        };
    }

    showDetailsFields(){
        var value = document.getElementById('amount').value;
        var fields = document.getElementById('form');
        if(value>0){
            document.getElementById('amount').style.width=((value.length) * 17) + 'px';
            fields.className = "form";
        }
        else {
            document.getElementById('amount').style.width= '17px';
            fields.className = "form no-display";
        }
    }

    handleMobileChange = (evt) => this.setState({ mobile: evt.target.value });
    handleNameChange = (evt) => this.setState({ name: evt.target.value });

    canBeSubmitted() {
        const { mobile, name } = this.state;
        return (
            mobile.length > 0 &&
            name.length > 0
        );
    }

    handleSubmit = (value) => {
        console.log(value)
        alert(JSON.stringify(value));
    };

    render(){
        const isEnabled = this.canBeSubmitted();
        return(
            <div className="bid">
                <h3 className="heading">Place your Bid
                    <hr />
                </h3>
                <form onSubmit={(values => this.handleSubmit(values))}>
                    <div className="inputs">
                        <label className="rupee"><img src="/assets/images/rupee.png" alt="rupee" /></label>
                        <input type="text" placeholder="0" id="amount" name="amount" size="1" maxLength="10" onChange={this.showDetailsFields} />
                    </div>
                    <div className="buttons">
                        <button type="button" value="Fixed Price">Fixed Price</button>
                        <button type="button" value="RateNegiotable">Rate Negiotable</button>
                    </div>
                    <div className="form no-display" id="form">
                        <div className="form__div">
                            <input type="text" value={this.state.mobile} onChange={this.handleMobileChange} className="form__input" placeholder=" " required />
                            <label className="form__label">Enter your mobile number*</label>
                        </div>

                        <div className="form__div">
                            <input type="text" value={this.state.name} className="form__input" placeholder=" " required onChange={this.handleNameChange} />
                            <label className="form__label">Enter your name*</label>
                        </div>
                        <div className="form__div margin-0">
                            <input type="text" className="form__input" placeholder=" " />
                            <label className="form__label">Enter Remarks (optional)</label>
                        </div>
                    </div>
                    <input type="submit" disabled={!isEnabled} className="form__button" value="Bid Now" />
                </form>
            </div>
        );
    }
}

export default PlaceYourBid;