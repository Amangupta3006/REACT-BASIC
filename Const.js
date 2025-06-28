const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export function App() {
  return (
    <div style={person.theme}>

      <h1>{person.name}, Hello</h1>

    </div>
  );
}

export default function App_2() {
  return (
    <div style={person.theme}>

      <h1>{person.name}, Hello_2</h1>

    </div>
  );
}