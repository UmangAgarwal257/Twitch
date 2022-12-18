import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <div className="bg-[#f7f7f8]">
      {/* Navbar */}
      <Navbar />
      <div className="flex pb-4">
        {/* Sidebar */}
        <Sidebar />
        {/* Main */}
        <Main />
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
