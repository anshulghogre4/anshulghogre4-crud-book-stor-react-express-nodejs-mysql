import axios from "axios"
import { toast } from "react-toastify";
import { BASE_URL, BOOKS, LOGIN } from "./constants"


const getBooks = async () => {
    try {
        // "http://localhost:1920/api/books"
        return await axios.get(BASE_URL + BOOKS);
    } catch (err) {
        toast.error("books fetching error!")
        return [];
    }
}

const addBook = async (book) => {
    try {
        // "http://localhost:1920/api/books"
        return await axios.post(BASE_URL + BOOKS, book)
    } catch (err) {
        toast.error("book not added. Try again!")
        return {};
    }
}

const updateBook = async (book) => {
    try {
        // "http://localhost:1920/api/books"
        return await axios.put(BASE_URL + BOOKS, book)
    } catch (err) {
        toast.error("book not update. Try again!")
        return {};
    }
}


const deleteBook = async (bookId) => {
    try {
        // "http://localhost:1920/api/books/:id"
        await axios.delete(BASE_URL + BOOKS + "/" + bookId)
    } catch (err) {
        toast.error("book not deleted. Try again!")
        { };
    }
}

const doLogin = async (loginForm) => {
    try {
        // "http://localhost:1920/api/login"
        return await axios.post(BASE_URL + LOGIN, loginForm)
    } catch (err) {
        toast.error("book not added. Try again!")
        return {};
    }
}

export { getBooks, addBook, updateBook, deleteBook, doLogin }





