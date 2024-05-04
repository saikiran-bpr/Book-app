import SearchBar from "./searchBar";
import SingleBook from "./singleBook";
import {useState} from 'react';
const bookList = [{
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Fiction",
    "id": 1,
    "totalPages": 398
}, {
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "id": 2,
    "totalPages": 474
}, {
    "title": "1984",
    "author": "George Orwell",
    "genre": "Fiction",
    "id": 3,
    "totalPages": 548
}, {
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Fiction",
    "id": 4,
    "totalPages": 256
}, {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Fiction",
    "id": 5,
    "totalPages": 292
}, {
    "title": "How to Win Friends and Influence People",
    "author": "Dale Carnegie",
    "genre": "Self-help",
    "id": 6,
    "totalPages": 267
}, {
    "title": "Think and Grow Rich",
    "author": "Napoleon Hill",
    "genre": "Self-help",
    "id": 7,
    "totalPages": 243
}, {
    "title": "The Power of Now",
    "author": "Eckhart Tolle",
    "genre": "Self-help",
    "id": 8,
    "totalPages": 491
}, {
    "title": "The 7 Habits of Highly Effective People",
    "author": "Stephen R. Covey",
    "genre": "Self-help",
    "id": 9,
    "totalPages": 322
}, {
    "title": "The Secret",
    "author": "Rhonda Byrne",
    "genre": "Self-help",
    "id": 10,
    "totalPages": 582
}, {"title": "Dune", "author": "Frank Herbert", "genre": "Sci-fi", "id": 11, "totalPages": 518}, {
    "title": "Foundation",
    "author": "Isaac Asimov",
    "genre": "Sci-fi",
    "id": 12,
    "totalPages": 521
}, {
    "title": "Neuromancer",
    "author": "William Gibson",
    "genre": "Sci-fi",
    "id": 13,
    "totalPages": 482
}, {
    "title": "Snow Crash",
    "author": "Neal Stephenson",
    "genre": "Sci-fi",
    "id": 14,
    "totalPages": 183
}, {
    "title": "The Left Hand of Darkness",
    "author": "Ursula K. Le Guin",
    "genre": "Sci-fi",
    "id": 15,
    "totalPages": 573
}, {
    "title": "A Brief History of Time",
    "author": "Stephen Hawking",
    "genre": "Science and Technology",
    "id": 16,
    "totalPages": 587
}, {
    "title": "The Innovators",
    "author": "Walter Isaacson",
    "genre": "Science and Technology",
    "id": 17,
    "totalPages": 160
}, {
    "title": "The Code Book",
    "author": "Simon Singh",
    "genre": "Science and Technology",
    "id": 18,
    "totalPages": 109
}, {
    "title": "The Man Who Knew Infinity",
    "author": "Robert Kanigel",
    "genre": "Science and Technology",
    "id": 19,
    "totalPages": 382
}, {
    "title": "Gödel, Escher, Bach",
    "author": "Douglas R. Hofstadter",
    "genre": "Science and Technology",
    "id": 20,
    "totalPages": 370
}];

export default function Books(){
    const [filteredBooks, setFilteredBooks] = useState(bookList);
    const sorterFn = (sortMode) => {
        let newFilteredArr = filteredBooks.sort((a, b) => a.totalPages - b.totalPages);
        if(sortMode === 'D')
            newFilteredArr = newFilteredArr.reverse();
        setFilteredBooks([...newFilteredArr]);
    }
    const filterfn = (bookname, genere) => {
        if(!bookname && genere){
            setFilteredBooks(bookList.filter((it) => it.genre === genere));
        } 
        else if(bookname && !genere){
            setFilteredBooks(bookList.filter(it => {
                return it.title.includes(bookname);
            }))
        } else if(bookname && genere){
            let filteredbooks = bookList.filter((it) => it.genre === genere);
            setFilteredBooks(filteredbooks.filter(it => {
                return it.title.includes(bookname);
            }));
        } else{
            setFilteredBooks(bookList);
        }
    }
    return(
        <div className="Books">
            <SearchBar sorterFn={sorterFn} filterfn={filterfn}/>
            {filteredBooks.map((it, index) => {
                return (
                    <SingleBook key={index} Title={it.title} Author={it.author} Genere={it.genre} TotalPages={it.totalPages}/>
                );
            })}
        </div>
    );
}