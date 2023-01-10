import React, { useEffect, useState } from 'react';
import { addBook, updateBook } from '../services/api';
import "./Home.css"

export default function BookForm({ book }) {
    const [form, setForm] = useState({
        id: '',
        title: '',
        author: '',
        genre: '',
        description: '',
        published: '',
        publisher: ''
    });

    useEffect(() => {
        console.log(book)
        setForm(book)
    }, [book])


    const handleInputChange = (e) => {
        const tempForm = { ...form };
        tempForm[e.target.name] = e.target.value;
        setForm(tempForm);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // api call create new record
       /*  if (form.id) {
            const updatedBook = updateBook(form);
        } else {
            const createBook = addBook(form);
        } */
    }

    const handleReset = () => {
        setForm({
            id: '',
            title: '',
            author: '',
            genre: '',
            description: '',
            published: '',
            publisher: ''
        })
    }

    return (
        <form className='book-form' onSubmit={handleSubmit}>
            <h4>Add Book</h4>
            <div className='row'>
                <div className='form-group col-md-6 col-sm-12'>
                    <label htmlFor='title'>Book Name</label>
                    <input className='form-control' type="text" value={form.title} id='title' name='title' onChange={handleInputChange} required />
                </div>
                <div className='form-group col-md-6 col-sm-12'>
                    <label htmlFor='author'>Book Author</label>
                    <input className='form-control' type="text" value={form.author} id='author' name='author' onChange={handleInputChange} required />
                </div>
            </div>

            <div className='row'>
                <div className='form-group col-md-6 col-sm-12'>
                    <label htmlFor='published'>Published Date</label>
                    <input className='form-control' type="date" value={form.published} id='published' name='published' onChange={handleInputChange} required />
                </div>
                <div className='form-group col-md-6 col-sm-12'>
                    <label htmlFor='publisher'>Book Publisher</label>
                    <input className='form-control' type="text" value={form.publisher} id='publisher' name='publisher' onChange={handleInputChange} required />
                </div>
            </div>
            <div className='row'>
                <div className='form-group col-md-6 col-sm-12'>
                    <label htmlFor='genre'>Book Genre</label>
                    <input className='form-control' type="text" value={form.genre} id='genre' name='genre' onChange={handleInputChange} required />
                </div>
                <div className='form-group col-md-6 col-sm-12'>
                    <label htmlFor='description'>Book Description</label>
                    <textarea className='form-control' value={form.description} id='description' name='description' onChange={handleInputChange} required></textarea>
                </div>
            </div>
            <button className='btn btn-warning' style={{ marginRight: "10px" }} type='reset' onClick={handleReset}>Reset</button>
            <button className='btn btn-primary' type='submit'>Store Book</button>
        </form>
    )
}
