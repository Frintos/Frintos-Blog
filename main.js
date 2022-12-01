// get request
function fetchdata(){
    fetch('https://dummyjson.com/posts?limit=6')
    .then(response =>{ 
        return response.json();
    })
    .then(data=>{
        console.log(data.posts);
        const html= data.posts.map(post =>{
            return  `
        
            <div  id="posts">
            <div class="post">
            <img src="images/n1.png" style="width:100% ;">
            <h5> ${post.title}</h5>
            <p> ${post.body}</p> 
            <button style="background: #FFAFAF; color: #D73232; font-weight: 700;"> ${post.tags[1]} </button>
            <button style="background: #AFB7FF; color: #3256D7; font-weight: 700;"> ${post.tags[2]} </button>
            <button style="background: #AFFFB3; color: #2AB51E; font-weight: 700;"> ${post.tags[3]} </button>
          </div>
          </div>
          <div class="space"></div>
            `
        }).join("");
        document.querySelector("#posts").insertAdjacentHTML("afterbegin",html) ;
    });
}
  
fetchdata();
