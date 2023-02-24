import "./App.css";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import Main from "./Components/Main";
import Subhead from "./Components/Subhead";
import Mark from "./Components/Mark";
import Footer from "./Components/Footer";

// import Mark from "./Components/Mark";
// let dataStore = [data,data,data,data,data]
function App() {
  const dailyDose = [{
   src : "https://www.youtube.com/embed/HgiiY9TLtX8",
   tittle : "4 Min Motivation",
   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
  },{
    src: "https://www.youtube.com/embed/Dq20BpF4STA",
    tittle:"Get Daily Dose",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
  },
  {
    src: "https://www.youtube.com/embed/d8p-5WcXoRs",
    tittle:"Stay Motivated Alltime",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
  },
  {
    src: "https://www.youtube.com/embed/tbnzAVRZ9Xc",
    tittle:"Dream Big",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
  },{
    src: "https://www.youtube.com/embed/tWzakqerPUw",
    tittle:"Game Changer Protocol !",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
  },
  {
    src: "https://www.youtube.com/embed/sP5c-sPJUu0",
    tittle:"10 Min Kick Start",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
  }
  ];
  return (
    <>
      <Nav />
      <Main />
      <Subhead head="Daily Dose" />
      <Mark />
      <div className="vid-row">{dailyDose.map((data) => {
        return (
          <div className="row-item">
             <Card obj = {data}/>
          </div>
         
        )
      })}</div>
      <Subhead head="A world of Start Up" />
      <Mark />
      <Subhead head="Life Lesson's" />
      <Mark />
      <Subhead head="Life Changing Seminar's"/>
      <Mark />

      <Footer />
    </>
  );
}

export default App;