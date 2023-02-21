class BookModel {
    id: number;
    title: string;
    author?: string;
    description?: string;
    copies?: number;
    copiesAvailable?: number;
    category?: string;
    img?: string;
    
    constructor(id: number, title: string, author: string, description: string,
        copies: number, copiesAvailable: number, catetgory: string, img: string) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.description = description;
            this.copies = copies;
            this.copiesAvailable = copiesAvailable;
            this.category = catetgory;
            this.img = img;
        }
} 

export default BookModel;