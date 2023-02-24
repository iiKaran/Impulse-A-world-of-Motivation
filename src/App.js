import "./App.css";
import Nav from "./Components/Nav";
import Card from "./Components/Card";
import Main from "./Components/Main";
import Subhead from "./Components/Subhead";
import Mark from "./Components/Mark";
import Chartrow from "./Components/Chartrow";
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
  const startUp =[{
    src : "https://www.youtube.com/embed/gr7ZBqlsuHU",
    tittle : "Bussiness VS StartUp",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
   },{
     src: "https://www.youtube.com/embed/H9ygAJ3dcqE",
     tittle:"The First Step",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
   },
   {
     src: "https://www.youtube.com/embed/wMUStCZhinM",
     tittle:"The Secrets",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis sapiente eveniet aliquid architecto ratione voluptas, quasi tempora corp"
   },
   {
     src: "https://www.youtube.com/embed/aMJluITqm6g",
     tittle:"Talk About Bussiness",
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
      <Subhead head="Daily Dose"  />
      <Mark />
      <div className="vid-row">{dailyDose.map((data) => {
        return (
          <div className="row-item">
             <Card obj = {data}/>
          </div>
         
        )
      })}
      </div>
      <Subhead head="world of Start Up" id="startUp" />
      <Mark />
      <div className="vid-row">{startUp.map((data) => {
        return (
          <div className="row-item">
             <Card obj = {data}/>
          </div>
        )
      })}
      </div>
      <div className='chart-row'>
      <Chartrow  name ="Sandeep Maheshwari" src="https://www.ajabgjab.com/wp-content/uploads/2020/09/Sandeep-Maheshwari-53.jpg" desc= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in nisi iste ad ex dolorum recusandae molestias, minus voluptate qui sapiente libero magni, voluptatum reiciendis labore, autem dicta delectus! Ducimus"/>
      <Chartrow name ="Steve Harvey" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBgrcHX7EzUl9pTKGnDbp2s4_oYFWetaqVQ&usqp=CAU" desc= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in nisi iste ad ex dolorum recusandae molestias, minus voluptate qui sapiente libero magni, voluptatum reiciendis labore, autem dicta delectus! Ducimus" />
      <Chartrow  name ="Vivek Bindra" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EOqUra8BJC2y1pnfQQRZt4E4u8zNPplPqA&usqp=CAU" desc= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in nisi iste ad ex dolorum recusandae molestias, minus voluptate qui sapiente libero magni, voluptatum reiciendis labore, autem dicta delectus! Ducimus" />
      <Chartrow  name ="Sandeep Maheshwari" src="https://www.ajabgjab.com/wp-content/uploads/2020/09/Sandeep-Maheshwari-53.jpg" desc= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in nisi iste ad ex dolorum recusandae molestias, minus voluptate qui sapiente libero magni, voluptatum reiciendis labore, autem dicta delectus! Ducimus"/>
      <Chartrow name ="Steve Harvey" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBgrcHX7EzUl9pTKGnDbp2s4_oYFWetaqVQ&usqp=CAU" desc= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in nisi iste ad ex dolorum recusandae molestias, minus voluptate qui sapiente libero magni, voluptatum reiciendis labore, autem dicta delectus! Ducimus" />
      <Chartrow  name ="Vivek Bindra" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EOqUra8BJC2y1pnfQQRZt4E4u8zNPplPqA&usqp=CAU" desc= "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in nisi iste ad ex dolorum recusandae molestias, minus voluptate qui sapiente libero magni, voluptatum reiciendis labore, autem dicta delectus! Ducimus" />

      </div>
      <Subhead head="Life Lesson's" id="Life"/>
      <Mark />
      <div className="vid-row"  >{dailyDose.map((data) => {
        return (
          <div className="row-item">
             <Card obj = {data}/>
          </div>
         
        )
      })}
      </div>

      <Footer />
    </>
  );
}

export default App;