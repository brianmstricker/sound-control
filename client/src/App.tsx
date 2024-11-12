import ThemeToggle from "./components/ThemeToggle";

function App() {
 return (
  <div
   className="bg-background text-foreground antialiased"
   // className={cn("font-sans", mainFont.variable, headerFont.variable)}
  >
   test
   <ThemeToggle />
  </div>
 );
}

export default App;
