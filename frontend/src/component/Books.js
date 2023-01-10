import React, { useEffect, useState } from 'react'
import { deleteBook, getBooks } from '../services/api';

export default function Books({ onEdit, isRefresh,setRefresh }) {

    const [books, setBooks] = useState([]);

         const getAllBooks = async ()=>{
            const Booklist = await getBooks();
            setBooks(Booklist);
         }

    useEffect(() => {
      
        getAllBooks();
    }, []);

    useEffect(() => {
      if (isRefresh) {
        getAllBooks();
        setRefresh();
      }
        
    }, [isRefresh]);

    
    

    const handleEdit = (book) => {
        onEdit(book);
    }

    const handleDelete = async(bookId) => {
        const result = window.confirm("Are you sure you want to delete this book?");
        if (result) {
            deleteBook(bookId).then(res => {
                if (res) getAllBooks();
            });
        }
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
