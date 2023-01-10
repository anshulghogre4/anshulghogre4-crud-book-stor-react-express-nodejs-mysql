
import React, { useState } from 'react'
import BookForm from './BookForm'
import Books from './Books'

export default function Home() {
   if (!localStorage.getItem("user")) window.location.href = "/login";
    const [book, setBook] = useState({});
    const [isRefresh, setIsRefresh] = useState(false);

    return (
        <div>
            <BookForm book={book}  refreshData={()=>setIsRefresh(true)} />
            <hr />
            <Books onEdit={(book) => setBook(book)} isRefresh={isRefresh} setRefresh={()=>setIsRefresh(false)} />
        </div>
    )
}
