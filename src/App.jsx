const continents = [
  "Africa",
  "America",
  "Asia",
  "Australia",
  "Europe",
  "Alderan",
];
const helloContinents = Array.from(continents, (c) => `Hello ${c}!`);
const message = helloContinents.join(" ");
const element = (
  <div title="Outer Div">
    <h1>{message}</h1>
  </div>
);
ReactDOM.render(element, document.getElementById("content"));
