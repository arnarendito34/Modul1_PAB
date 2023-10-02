// Hello
let myElement = "Hello World";

// Basic Rules
myElement = <h3>Hello React</h3>;

// Basic Rules
myElement = <img src="https://placehold.co/600x400" />;

myElement = (
    <div>
        <p>Learn Javascript</p>
        <p>Learn React</p>
    </div>
);

// Statement in JSX
let myText = "Learn React";
myElement = (
    <div>
        <h3>{myText}</h3>
    </div>
);

// Array Processing
let items = ["Table", "Handphone", "Computer"];
myElement = (
    <ul>
        {items.map((item, index) => <li>{item}</li>)}
    </ul>
);

const myApp = myElement;

ReactDOM.createRoot(document.getElementById('root')).render(myApp);

