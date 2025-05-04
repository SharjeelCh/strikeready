import { Route, Routes } from "react-router";
import Header from "./Header";
import Platform from "./Pages/index";
import Usecases from "./Pages/Usecases";
import Support from "./Pages/Support";
import Company from "./Pages/Company";
import Partners from "./Pages/Partners";
import Blog from "./Pages/Blog";

function App() {
 return (
  <div className="min-h-screen bg-gray-950 text-white pt-24">
   <Header />
   <Routes>
    <Route path="/" element={<Platform />} />
    <Route path="/use-cases" element={<Usecases />} />
    <Route path="/support" element={<Support />} />
    <Route path="/partners" element={<Partners />} />
    <Route path="/company" element={<Company />} />
    <Route path="/blog" element={<Blog />} />
    {/* Add more routes here */}
   </Routes>
  </div>
 );
}

export default App;
