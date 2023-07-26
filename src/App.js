import Layout from "./components/Layout";
import GlobalStyles from "./components/GlobalStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback, useEffect, useState } from "react";
import agent from "./service/agent";
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
  const [category, setCategory] = useState({});
  const getCate = useCallback(async () => {
    try {
      const cate = await agent.Category.getAllCategory();
      setCategory(cate);
    } catch (err) {
      setCategory({});
    }
  }, []);
  useEffect(() => {
    getCate();
  }, [getCate]);
  return (
    <GlobalStyles>
      <ToastContainer autoClose={2000} />
      {category.length > 0 && <Layout category={category} />}
      <div>c</div>
      <div>test</div>
    </GlobalStyles>
  );
}

export default App;
