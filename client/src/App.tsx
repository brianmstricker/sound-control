import { AiFillSound } from "react-icons/ai";
import ThemeToggle from "./components/ThemeToggle";

function App() {
 return (
  <div className="bg-background text-foreground antialiased w-[20rem] h-[24rem] min-w-[10vw] min-h-[10vh] border text-lg p-2">
   <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
     <AiFillSound />
     <h1 className="font-bold text-xl">Sound Control</h1>
    </div>
    <ThemeToggle />
   </div>
  </div>
 );
}

export default App;
