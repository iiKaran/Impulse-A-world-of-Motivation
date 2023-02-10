import "./App.css";
import Nav from "./Components/Nav";
import Card from "./Components/Card";

let data = {
  title1: "Hello",
  link: "https://www.youtube.com/embed/WdsaSSevPOs",
  headtitle: "ddjgbn",
  desc: "wgsygho",
  btn: "sgvybn",
};
function App() {
  return (
    <>
      <Nav />
      <div className="mainbg">
        <img src="\public\pb.png" alt="" />
      </div>
      {/* <div className="container1 d-flex p-2">
        <Card obj={data} />
        <Card obj={data} />
        <Card obj={data} />
        <Card obj={data} />
        <Card obj={data} />
        <Card obj={data} />
      </div> */}
    </>
  );
}

export default App;
