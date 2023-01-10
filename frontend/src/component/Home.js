
import React, { useState } from 'react'
import BookForm from './BookForm'
import Books from './Books'

export default function Home() {
    // if (!localStorage.getItem("user")) window.location.href = "/login";
    const [book, setBook] = useState({});
    return (
        <div>
            <BookForm book={book} />
            <hr />
            <Books onEdit={(book) => setBook(book)} />
        </div>
    )
}
