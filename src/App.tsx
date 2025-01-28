import Header from "./components/Header"
import Footer from "./components/Footer"
import BookCard from "./components/BookCard"

function App() {
  // Array med böcker
  const bookArr = [
    {
      title: "Virka för livet",
      author: "Moa P. Blomqvist",
      year: 2024,
      read: true
    },
    {
      title: "Samla katter",
      author: "Lorna Scobie",
      year: 2019,
      read: true
    },
    {
      title: "A study in drowning",
      author: "Ava Reid",
      year: 2023,
      read: true
    },
    {
      title: "Thinking with type",
      author: "Ellen Lupton",
      year: 2010,
      read: true
    },
    {
      title: "Sleeping beauties",
      author: "Staphen King, Owen King",
      year: 2017,
      read: false
    },
    {
      title: "Handtextat från A till Ö",
      author: "Abbey Sy",
      year: 2017,
      read: true
    },
  ]


  return (
    <>
      <Header pagetitle={"Kajsas bibliotek"} /> 

      <main>
        <h2>Böcker</h2>
        {/* Loopa igenom array med böcker & skriv ut bokkort */}
        {
          bookArr.map((book, index) => (
            <BookCard key={index} title={book.title} author={book.author} published={book.year} read={book.read} />
          ))
        }
      </main>

      <Footer />
    </>
  )
}

export default App
