import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCatsFetch } from "./catState"
import "./App.css"

function App() {
  const cats = useSelector((state) => state.cats.cats)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCatsFetch())
  }, [dispatch])

  console.log("cek bang ", cats)

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>images of different species of cats</p>
      <hr />

      <div className="Gallery">
        {cats.map((cat, index) => {
          return (
            <div key={cat.id} className="row">
              <div className="column column-left">
                <img
                  alt={cat.name}
                  src={cat.image.url}
                  width="200"
                  height="200"
                />
              </div>
              <div className="column column-right"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
