// Headerkomponent
import './Header.css' // importera CSS för header

// pagetitle (string) skickas som prop och skrivs ut i h1:a
function Header({pagetitle}:{pagetitle:string}) {
   
    return (
        <header>
            <div>
            <h1>{pagetitle}</h1>
            </div>
        </header>
    )
}

export default Header