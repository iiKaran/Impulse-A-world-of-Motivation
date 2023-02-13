import "./App.css";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import Main from "./Components/Main";
import Subhead from "./Components/Subhead";
import Mark from "./Components/Mark";
import Footer from "./Components/Footer";
// import Mark from "./Components/Mark";
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
      <Nav/>
      <Main/>
      < div className="container1 d-flex p-2">
        <Card obj={data} />
        <Card obj={data} />
        <Card obj={data} />
        {/* <Card obj={data} />
        <Card obj={data} />
        <Card obj={data} /> */}
      </div>
      <Subhead/>
      <Mark/>
      <Footer/>
    </>
  );
}

export default App;
