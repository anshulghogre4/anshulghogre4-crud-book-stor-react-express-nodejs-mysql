import axios from "axios"
import { toast } from "react-toastify";
import { ADDBOOKS, BASE_URL, BOOKS, DELETEBOOK, LOGIN, UPDATEBOOK } from "./constants"


const getBooks = async () => {
    try {
          const resp = await axios.get(BASE_URL + BOOKS);
          
          return resp.data.books;
    } catch (err) {
        toast.error("books fetching error!")
        return [];
    }
}

const addBook = async (book) => {
    try {
        // "http://localhost:1920/api/books"
        return await axios.post(BASE_URL + ADDBOOKS, book)
    } catch (err) {
        toast.error("book not added. Try again!")
        return {};
    }
}

const updateBook = async (book) => {
    try {
        // "http://localhost:1920/api/books"
        return await axios.put(BASE_URL + UPDATEBOOK, book)
    } catch (err) {
        toast.error("book not update. Try again!")
        return {};
    }
}


const deleteBook = async (bookId) => {
    try {
        // "http://localhost:1920/api/books/:id"
      const resp =  await axios.delete(BASE_URL + DELETEBOOK + "/" + bookId)

      if (resp.data) {
        toast.success("Deleted successfully!")
        return true;
      }
    } catch (err) {
        toast.error("book not deleted. Try again!")
        return false;
    }
}

const doLogin = async (loginForm) => {
    try {
        // "http://localhost:1920/api/login"
        return await axios.post(BASE_URL + LOGIN, loginForm)
    } catch (err) {
            toast.error("invalid Credentials!")
        return {};
    }
}

export { getBooks, addBook, updateBook, deleteBook, doLogin }





