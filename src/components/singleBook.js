
export default function SingleBook({Title, Author, Genere, TotalPages}){
    return (
        <div className="Book">
            <h1>Title: {Title}</h1>
            <p>Author: {Author}</p>
            <p>Genere: {Genere}</p>
            <p>TotalPages: {TotalPages}</p>
        </div>
    );  
}