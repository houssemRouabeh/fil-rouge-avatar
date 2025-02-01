import "./App.css";
import Avatar from "./components/Avatar";

function App() {
  return (
    <>
      <Avatar
        image="https://picsum.photos/id/1/200/300"
        name="Houssem"
        status="inline"
      />
      <Avatar
        image="https://picsum.photos/id/30/200/300"
        name="Raslen"
        status="occupied"
      />
      <Avatar
        image="https://picsum.photos/id/40/200/300"
        name="Farah"
        status="offline"
      />
      <Avatar
        image="https://picsum.photos/id/50/200/300"
        name="Dalel"
        status="inline"
      />
    </>
  );
}

export default App;
