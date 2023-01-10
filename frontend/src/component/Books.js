import React, { useEffect, useState } from 'react'
import { deleteBook, getBooks } from '../services/api';

export default function Books({ onEdit }) {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        // api call to all books
        // const bookList = await getBooks();

        const bookList = [
            {
                "id": 1,
                "title": "So Alice got up.",
                "author": "Grady Harris",
                "genre": "Qui",
                "description": "Alice, 'but I know all sorts of things, and she, oh! she knows such a hurry that she had been found and handed back to them, and considered a little, half expecting to see it pop down a very little!.",
                "published": "1997-06-21",
                "publisher": "Velit Incidunt"
            },
            {
                "id": 2,
                "title": "Duchess said in a.",
                "author": "Duncan Little",
                "genre": "Qui",
                "description": "Knave was standing before them, in chains, with a sigh. 'I only took the thimble, saying 'We beg your pardon!' she exclaimed in a coaxing tone, and she looked down at her hands, and was looking.",
                "isbn": "9789119179050",
                "published": "2012-05-06",
                "publisher": "Est Alias"
            }]
        setBooks(bookList);
    }, []);

    

    const handleEdit = (book) => {
        onEdit(book);
    }

    const handleDelete = (bookId) => {
        console.log("delete record");
        // deleteBook(bookId)
    }

    return (
        <div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Book Name</th>
                        <th>Book Author</th>
                        <th>Book Genre</th>
                        <th>Book Publisher</th>
                        <th>Book Published</th>
                        <th>Book Description</th>
                        <th style={{ width: "10rem" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map(book => <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.genre}</td>
                        <td>{book.publisher}</td>
                        <td>{book.published}</td>
                        <td>{book.description}</td>
                        <td>
                            <button className="btn btn-success" onClick={() => handleEdit(book)}>Edit</button>
                            <button className='btn btn-danger' onClick={() => handleDelete(book.id)}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>

        </div>
    )
}
