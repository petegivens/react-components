class GroceryListItem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
    this.hoverHandler = this.hoverHandler.bind(this)
  }

  hoverHandler() {
    this.setState({hover: !this.state.hover})
  }

  render() {
    const style = this.state.hover ? {fontWeight: 'bold'} : {}
    return (
      <li style={style} onMouseEnter={this.hoverHandler} onMouseLeave={this.hoverHandler}>{this.props.item}</li>
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
