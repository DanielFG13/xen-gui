import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Xenconfiguration from "./Routes/XenConfiguration";
import VmPanelControl from "./Routes/VmPanelControl";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/xen-configuration" element={<Xenconfiguration />} />
        <Route path="/my-vm" element={<VmPanelControl />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
