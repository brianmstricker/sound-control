import { AiFillSound } from "react-icons/ai";
import ThemeToggle from "./components/ThemeToggle";
import Volume from "./components/Volume";
import ThemeWrapper from "./components/ThemeWrapper";

function App() {
 return (
  <ThemeWrapper>
   <div className="bg-background text-foreground antialiased w-[20rem] h-[24rem] min-w-[10vw] min-h-[10vh] border text-lg p-2">
    <div className="flex justify-between items-center">
     <div className="flex items-center gap-2">
      <AiFillSound />
      <h1 className="font-bold text-xl">Sound Control</h1>
     </div>
     <ThemeToggle />
    </div>
    <Volume />
   </div>
  </ThemeWrapper>
 );
}

export default App;
