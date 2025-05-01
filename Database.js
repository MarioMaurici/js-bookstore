module.exports = class Database {
    #storage = {
        authors: [],
        books: [],
        posters: [],
        orders: [],
        users: []
    }

    find(key) {
        return this.#storage[key]
    }

    //tratamento para livros
    findBookByName(bookname){
        return this.#storage.books.find(b => b.name === bookname)
    }

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    saveBook(book) {
        const bookExists = this.findBookByName(book.name)
        if (!bookExists){
            this.#storage.books.push(book)
        }
    }

    addBooksToStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.addToStock(quantity)
    }

    removeBooksFromStock(bookName, quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity) 
    }

    //tratamento para poster
    findPosterByName(posterName){
        return this.#storage.books.find(b => b.name === posterName)
    }

    savePoster(poster) {
        const posterExists = this.findPosterByName(poster.name)
        if (!posterExists){
            this.#storage.posters.push(poster)
        }
    }

    addPostersToStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addToStock(quantity)
    }

    removePosterFromStock(posterName, quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity) 
    }

    //tratamento para usuarios
    saveUser(user){
        const userExists = this.#storage.users.find(u => email === user.email)
        if (!userExists){
            this.#storage.users.push(user)
        }
    }

    //tratamento para pedidos
    saveOrder(order){
        this.#storage.orders.push(order)
    }

    //mostrar informações
    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))

    }
}