const { where } = require("sequelize");

const Book = require("../models/book").Book

exports.getAllBooks = async (req, res)=>{
      try {
        const books = await Book.findAll();
        if (books.length>0) {
              return  res.status(200).json({
                        books,
                        status:true,
                        message: "books found"
                }) 
        }else return res.status(401).json("Empty Books")
      } catch (error) {
      return res.status(400).json({      
                status:false,
                message: "No books found"
        })
      }
}

/*
        
        title: '',
        author: '',
        genre: '',
        description: '',
        published: '',
        publisher: ''
*/
exports.addABook = async (req, res)=>{
      try {
        const book = req.body;
        const newBook = await Book.create(book)
       return res.status(200).json({
                status: true,
                newBook
        })
      } catch (error) {
        console.log(error)
        return res.status(400).json({
                status: false,
                message:"book not added"
        })
      }
        
}


exports.updateABook = async (req, res)=>{
      
        try {
                const {id,title,author, genre, description,published,publisher} = req.body;
                const updatedBook = await Book.update({title,author, genre, description,published,publisher}, {where:{id}});
               
                if (updatedBook[0]>0) {
                        return res.status(200).json({
                                status: true,
                                updatedBook,
                                bookId:id,
                                message:" book updated"  
        
                        }) 
                }else {
                        return res.status(200).json({
                                message:" book found but book not updated"  
                        })         
                }

              } catch (error) {
                console.log(error)
                return res.status(400).json({
                        status: false,
                        message:"book not updated or not found"
                })
              }
}



exports.deleteABook = async (req, res)=>{
      
        try {
                
                const {id} = req.params;
               const deletedBook = await Book.destroy( {where :{id}} );
                if (deletedBook!==0) {
                        return res.status(200).json({
                                status: true,
                                message:" book deleted",
                                 
                        })
                } else return res.status(400).json({
                        status: false,
                        message:" book not deleted or book not found"  
                }) 
        } catch (error) {
                console.log(error)
                return res.status(400).json({
                        status: false,
                        message:" book not deleted or book not found"  
                }) 

        }
       
}
