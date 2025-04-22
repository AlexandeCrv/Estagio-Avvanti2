type SearchProps = {
  gethub: (username: string) => Promise<void>;
};
import { useState, KeyboardEvent } from "react";
import "./Search.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Search = ({ gethub }: SearchProps) => {
  const [userName, setUserName] = useState("");

  const enter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      gethub(userName);
    }
  };
  return (
    <div>
      <div className="search">
        <div className="procura">
          <div className="h2ep">
            <h2>Procure por um Player:</h2>
            <p className="psearch">Conheça seus melhores projetos!!!</p>
          </div>

          <input
            onChange={(e) => setUserName(e.target.value)}
            className="inpt"
            type="text"
            onKeyDown={enter}
          />
          <div className="searchbutton">
            <p onClick={() => gethub(userName)}>
              <FaMagnifyingGlass />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
