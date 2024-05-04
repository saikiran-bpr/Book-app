import {useState} from 'react';
export default function SearchBar({sorterFn, filterfn}){
    const [book, setBook] = useState({
        bookName: "",
        type: ""
    });
    return(
        <div className="searchBar">
            <input placeholder="Find a Book" onChange={(e) => {
                setBook((prev) => {
                    return {
                        ...prev,
                        bookName: e.target.value
                    }
                })
            }} value={book.bookName}></input>
            <select onChange={(e) => {
                console.log(e.target.value);
                setBook((prev) => {
                    return {
                        ...prev,
                        type: e.target.value
                    }
                })

            }}>    
                <option value="">Select a genere</option>
                <option value="Fiction">Fiction</option>
                <option value="Self-help">Self-Help</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Science and Technology">Science and Technology</option>
            </select>
            <button onClick={() => {
                filterfn(book.bookName, book.type);
                setBook((prev) => {
                    return {
                        ...prev,
                        bookName: ""
                    }
                })
            }}>Find</button>
            <h2>Sort by Pages</h2>
            <button onClick={() => {
                sorterFn('A');
            }} >Ascending</button>
            <button onClick={() => {
                sorterFn('D');
            }}>Desending</button>
        </div>
    );
}