import { Actions } from "../../components/actions/Actions";
import { Info } from "../../components/info/Info";
import { Keyboard } from "../../components/keyboard/Keyboard";

function App() {
  return (
    <>
      <div className="container">
        <Info></Info>
        <main className="phone">
          <Keyboard></Keyboard>
          <Actions></Actions>
        </main>
      </div>
    </>
  );
}

export default App;
