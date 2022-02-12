import { useCallback, useMemo, useState } from "react";
import "./App.css";
import DemoList from "./components/Demo/DemoList";
import Button from "./components/UI/Button";

const App = () => {
  const [listTitle, setListTitle] = useState("My List");

  const changeListHandler = useCallback(() => setListTitle("New Title"), []);
  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeListHandler}>Change List Title</Button>
    </div>
  );
};

export default App;
