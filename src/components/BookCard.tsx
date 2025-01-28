import './BookCard.css' // CSS för bok-kort

// Interface för props
interface BookCardProps {
    title: string;
    author: string;
    published: number;
    read: boolean;
}

function BookCard({ title, author, published, read }: BookCardProps) {

    return (
        <section>
            <h3>{title}</h3>
            <p>av <span className="author">{author}</span></p>
            <div className='info'>
                <p><span>Utgivningsår: </span>{published}</p>
                <p><span>Läst: </span>{read ? "Ja" : "Nej"}</p>
            </div>
        </section>
    )
}

export default BookCard