import { useState } from "react";
import UserInput from "./components/user-input/UserInput"
import { calculateInvestmentResults } from "./util/investment";
import Result from "./components/result/Result";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0
    });

    const handleChange = (key: string, value: number) => {
        setUserInput((prev) => {
            return {
                ...prev,
                [key]: value
            }
        });
    }


    const calculatedResult = calculateInvestmentResults(userInput);

    return (
        <>
            <UserInput input={userInput} onInputChange={handleChange}/>
            <Result result={calculatedResult} />
        </>
    )
}

export default App
