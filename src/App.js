import Layout from "./components/Layout";
import GlobalStyles from "./components/GlobalStyles";
import { useSelector } from "react-redux";
function App() {
  // const killCopy = (e) => {
  //   return false;
  // };

  // const reEnable = () => {
  //   return true;
  // };
  // const defeatIE = () => {
  //   if (document.all) {
  //     return false;
  //   }
  // };
  // const defeatNS = (e) => {
  //   if (document.layers || (document.getElementById && !document.all)) {
  //     if (e.which === 2 || e.which === 3) {
  //       return false;
  //     }
  //   }
  // };
  // if (document.layers) {
  //   document.captureEvents(Event.MOUSEDOWN);
  //   document.onmousedown = defeatNS;
  // } else {
  //   document.onmouseup = defeatNS;
  //   document.oncontextmenu = defeatIE;
  // }
  // document.oncontextmenu = new Function("return false");

  // document.onselectstart = new Function("return false");

  // if (window.sidebar) {
  //   document.onmousedown = killCopy;
  //   document.onclick = reEnable;
  // }
  return (
    <GlobalStyles>
      <Layout />
    </GlobalStyles>
  );
}

export default App;
