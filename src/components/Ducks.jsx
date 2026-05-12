import DuckList from "./DuckList";
import NavBar from "./NavBar";
import AppContext from "../contexts/AppContext";
import { useContext } from "react";

function Ducks() {
  const { setIsLoggedIn } = useContext(AppContext);
  return (
    <>
      <NavBar setIsLoggedIn={setIsLoggedIn} />
      <DuckList />
    </>
  );
}

export default Ducks;
