import React from "react";
import "./dashboard.css";

export default class FetchRandomUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        items: [],
        DataisLoaded: false
    };
}
  componentDidMount() {
    fetch(
      "https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true
        });
      })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Loading data.... </h1> </div>;

    return (
      <div className="App">
        <h1> API DATA </h1> 
        <table style={{backgroundColor:'#fff'}} border={1}>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        
         {
          items.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
            </tr>
          ))
        }
        </table>
      </div>
    );
  }
}