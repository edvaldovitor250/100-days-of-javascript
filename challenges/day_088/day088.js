class Blog {
    constructor() {
        this.posts = [];
        this.comments = [];
    }

    upadatePhone(url) {
        this.posts.push(url);
        console.log(url);
        console.log(this.posts);
    }

    removePhone(url) {
        this.posts.splice(this.posts.indexOf(url), 1);
        console.log(url);
        console.log(this.posts);
    }

    addComment(text) { 
        this.comments.push(text); 
    }
}

const myBlog = new Blog();

myBlog.upadatePhone("https://example.com/post1");
myBlog.upadatePhone("https://example.com/post2");
myBlog.upadatePhone("https://example.com/post3");

myBlog.removePhone("https://example.com/post2");

myBlog.addComment("Ótimo post! Gostei muito!");

console.log("Posts:");
console.log(myBlog.posts);
console.log("Comentários:");
console.log(myBlog.comments);
