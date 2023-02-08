import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));


function RelativeList() {
    const relatives = [
        { id: 1, name: 'Uncle Bharat' },
        { id: 2, name: 'Aunt Priya' },
        { id: 3, name: 'Cousin Kish' }
    ];

    return (
        <ol>
            {relatives.map(relative => (
                <li key={relative.id}>{relative.name}</li>
            ))}
        </ol>
    );
}

export default RelativeList;
