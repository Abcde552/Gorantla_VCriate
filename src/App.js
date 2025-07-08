
import TemplateBuilder from "./TemplateBuilder";

export default function App() {
  return (
    <center>
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-xl font-medium">My Workspace / Job Application</h1>
    
      </header>
      <TemplateBuilder />
    </div>
    </center>
  );
}
