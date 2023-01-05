const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: " i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


function addLike(el) {
    document.getElementById(`quantity${el}`).textContent = `${posts[el].likes += 1} likes`;
   
} 

function postBuilder() {

    for (let i = 0; i < posts.length; i++){
       const data = posts[i]

    let wrapper = document.createElement('div');
    wrapper.innerHTML = `
    <div class="post">
            <div class="header">
                <img class="avatar1" src="${data.avatar}">
                <div class="author-info">
                    <div class="name1">${data.name}</div>
                    <span class="location1">${data.location}</span>
                </div>
            </div>
            
            <div class="picture">
                <img class="img1" src="${data.post}">
            </div>
            
            <div class="body">
            <div class="icons">
                <img class="heart" src="images/icon-heart.png" onclick="addLike(${i})">
                <img class="comment"  src="images/icon-comment.png">
                <img class="dm"  src="images/icon-dm.png">
            </div>
            
            <div class="comments">
            <p id="quantity${i}">${data.likes} likes</p>
            <p class="comment1"><span class="username1">${data.username}</span>${data.comment}</p>
            </div>
            <div class="border"></div>
        </div>
    `
    document.getElementById("container").append(wrapper)
    }
    
}
postBuilder()


    

