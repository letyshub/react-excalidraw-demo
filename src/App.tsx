import "./App.css";
import { Excalidraw } from "@excalidraw/excalidraw";

function App() {
    return (
        <div className="App">
            <h1 style={{ textAlign: "center" }}>React Excalidraw Demo</h1>
            <div style={{ height: "500px", width: "80%", margin: "auto" }}>
                <Excalidraw />
            </div>
        </div>
    );
}

export default App;
