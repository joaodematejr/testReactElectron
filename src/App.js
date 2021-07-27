const { ipcRenderer } = window.require("electron");

export default function App() {
  function add() {
    ipcRenderer.send("progress-subtitles", "ping");
    ipcRenderer.on("progress-subtitles", (event, resp) => {
     alert(resp);
    });
  }

  return (
    <div>
      <button onClick={() => add()}>Com</button>
    </div>
  );
}
