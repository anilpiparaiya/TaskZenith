import { Link } from "react-router-dom";
import { useState, useCallback, useEffect, useRef } from "react";
import MemeSearch from "../components/Memes/MemeSearch";
import Temp from "../pages/memes/Temp";
import Meme from "../pages/memes/Meme";
import "../pages/memes/style.css";
import "../index.css";

export default function Home() {
  // meme
  const [temp, setTemp] = useState([]);
  const [meme, setMeme] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of memes to display per page

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemp(data.data.memes);
      });
  }, []);

  // Function to filter memes based on the search query
  const filteredMemes = temp.filter((meme) =>
    meme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the index of the last and first item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMemes = filteredMemes.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredMemes.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      <div className="App">
        {/* <Navbar setMeme={setMeme} /> */}

        {meme === null ? (
          <>
            <MemeSearch
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <Temp temp={currentMemes} setMeme={setMeme} />
            <div className="pagination flex items-center justify-center mb-100 gap-2">
              <button
                className="bg-white p-1 border border-gray-300 rounded-2 cursor-pointer"
                onClick={prevPage}
              >
                Previous
              </button>
              {Array.from(
                { length: Math.ceil(filteredMemes.length / itemsPerPage) },
                (_, i) => (
                  <button
                    className="bg-white p-1 border border-gray-300 rounded-2 cursor-pointer"
                    key={i}
                    onClick={() => paginate(i + 1)}
                  >
                    {i + 1}
                  </button>
                )
              )}
              <button
                className="bg-white p-1 border border-gray-300 rounded-2 cursor-pointer"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <>
            {/* {navigate("/meme")}; */}
            <Meme meme={meme} setMeme={setMeme} />
          </>
        )}
      </div>
    </div>
  );
}
