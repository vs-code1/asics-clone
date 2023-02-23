import Sclupture from "./components/Sclupture";
import List from "./components/ShowDataArray";
import Nav from "./components/nav";
import Main from "./components/Main";
import ShoeInfo from "./components/ShoeInfo";
import ShoeList from "./components/ShoeList";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <div className="sec-border"></div>
      <ShoeInfo />
      <div className="sec-border"></div>
      <ShoeList />
      <div className="sec-border"></div>
      <Footer />
      <Sclupture />
      <List />
    </div>
  );
}
