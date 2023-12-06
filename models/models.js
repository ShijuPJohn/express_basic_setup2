class User {
    constructor(id, name_, email, password, profilePic, about) {
        this.id = id;
        this.name_ = name_;
        this.email = email;
        this.password = password;
        this.profilePic = profilePic;
        this.about = about;
    }
}

class Post {
    constructor(id, title, content, coverPic) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.coverPic = coverPic;
    }
}

const data = [
    new User(1, 'Shiju', 'shiju@email.com', 'secret', 'https://www.w3schools.com/howto/img_avatar.png', `'I don't know`),
    new User(2, 'Jacob', 'jacob@email.com', 'secret', 'https://www.w3schools.com/howto/img_avatar.png', `'I don't know`),
    new User(3, 'James', 'james@email.com', 'secret', 'https://www.w3schools.com/howto/img_avatar.png', `'I don't know`),
    new User(4, 'Jamie', 'jamie@email.com', 'secret', 'https://www.w3schools.com/howto/img_avatar.png', `'I don't know`),
    new User(5, 'Kate', 'kate@email.com', 'secret', 'https://www.w3schools.com/howto/img_avatar.png', `'I don't know`),
    new User(6, 'Leona', 'leona@email.com', 'secret', 'https://www.w3schools.com/howto/img_avatar.png', `'I don't know`),
    new User(7, 'Samantha', 'samantha@email.com', 'secret', 'https://www.w3schools.com/howto/img_avatar.png', `'I don't know`),
    new User(8, 'Amanda', 'amanda@email.com', 'secret', 'https://www.w3schools.com/howto/img_avatar.png', `'I don't know`),
]
module.exports = {User, Post, data}