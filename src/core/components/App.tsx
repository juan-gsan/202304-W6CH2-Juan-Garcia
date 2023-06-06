import { Actions } from "../../features/phone/components/actions/Actions";
import { Info } from "../../features/phone/components/info/Info";
import { Keyboard } from "../../features/phone/components/keyboard/Keyboard";

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
