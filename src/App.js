import "./App.css";
import Ellipse1 from "./component/Ellipse1.png";
import Ellipse2 from "./component/Ellipse2.png";
import Group37a from "./component/Group 37 1.png";
import Group37b from "./component/Group 37 2.png";

// import Rectangle from "./component/Rectangle 1.png";
import Group38 from "./component/Group 38.png";

function App() {
  return (
    <div className="App">
      {/* <img src={Rectangle} className="Rectangle" alt="rec" /> */}
      <div className="Apprectangle3"></div>
      <div className="Apprectangle2"></div>
      <img src={Ellipse1} className="AppEllipse1" alt="Ellipse1" />
      <img src={Ellipse2} className="AppEllipse2" alt="Ellipse2" />
      <img src={Group37a} className="AppGroup37-1" alt="Group37" />
      <img src={Group37b} className="AppGroup37-2" alt="Group372" />

      <img src={Group38} className="AppGroup38" alt="grp38" />
      <img src={Group38} className="AppGroup35" alt="grp35" />
    </div>
  );
}

export default App;
