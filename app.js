// TODO

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>{this.props.item}</li>
    )
  }
}

var groceryItems = ['ham', 'eggs', 'tofu', 'bACONE'];

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <GroceryList items={groceryItems}/>
  </div>
);


ReactDOM.render(<App />, document.getElementById("app"));
