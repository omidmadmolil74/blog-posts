import MatchingPost from "./MatchingPost";
import "./App.css";
import { useState } from "react";

function App() {
  const params = new URLSearchParams(window.location.search)
  const newParam = params.get('query')
  const [query, setQuery] = useState(newParam ?? '');
  const word = query.split(" ");
  const dogChecked = word.includes("dog");
  const catChecked = word.includes("cat");
  
  const caterpillarChecked = word.includes("caterpillar");
  function handleCheck(tag: string, checked: boolean) {
    const newWords = checked ? [...word, tag] : word.filter((f) => f !== tag);
    setQuery(newWords.filter(Boolean).join(" ").trim());
  }

  return (
    <>
      <form className="mb-5">
        <div className="flex flex-col items-center pt-10">
          <input
            type="search"
            name="query"
            className="border-2 border-b-amber-950"
            onChange={(event) => setQuery(event.currentTarget.value)}
            value={query}
          />
          <div className="flex gap-10 pt-5">
            <label htmlFor="dog">
              dog{" "}
              <input
                type="checkbox"
                checked={dogChecked}
                id="dog"
                onChange={(event) =>
                  handleCheck("dog", event.currentTarget.checked)
                }
              />
            </label>
            <label htmlFor="cat">
              cat{" "}
              <input
                type="checkbox"
                checked={catChecked}
                id="cat"
                onChange={(event) =>
                  handleCheck("cat", event.currentTarget.checked)
                }
              />
            </label>
            <label htmlFor="caterpillar">
              caterpilar{" "}
              <input
                type="checkbox"
                checked={caterpillarChecked}
                id="caterpillar"
                onChange={(event) =>
                  handleCheck("caterpillar", event.currentTarget.checked)
                }
              />
            </label>
          </div>
          <button
            type="submit"
            className="bg-fuchsia-800 p-2 text-white rounded-xl"
          >
            submit
          </button>
        </div>
      </form>
      <div>
        <MatchingPost query={query} />
      </div>
    </>
  );
}

export default App;
