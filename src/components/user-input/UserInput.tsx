import React from 'react';
// import user input styles
import './userInput.css';

export default function UserInput({ input, onInputChange }:
    {
        input: { initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number },
        onInputChange: (key: string, value: number) => void
    }) {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onInputChange(e.target.id, parseInt(e.target.value));
    }
    return (
        <div id="user-input" >
            <div className="input-group">
                <div>
                    <label htmlFor="initialInvestment">Initial Investment</label>
                    <input type="number" id="initialInvestment" value={input.initialInvestment} onChange={handleInputChange} />
                </div>
                <div >
                    <label htmlFor="annualInvestment">Annual Investment</label>
                    <input type="number" id="annualInvestment" value={input.annualInvestment} onChange={handleInputChange}/>
                </div>
            </div>

            <div className="input-group">
                <div>
                    <label htmlFor="expectedReturn">Expected Return</label>
                    <input type="number" id="expectedReturn" value={input.expectedReturn} onChange={handleInputChange}/>
                </div>

                <div>
                    <label htmlFor="duration">Duration</label>
                    <input type="number" id="duration" value={input.duration} onChange={handleInputChange}/>
                </div>
            </div>

        </div>
    );
}