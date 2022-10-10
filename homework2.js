const posts= [
    {name:"post 1",post:"Post Description 1"},
    {name:"post 2",post:"Post Description 2"},
    {name:"post 3",post:"Post Description 3"},
    {name:"post 4",post:"Post Description 4"}
]
const listPost = () => {
    return new Promise((resolve,reject) => {
        if(posts != null){
            resolve("Post Listesi..")
            posts.map((post) => {
                console.log(post.name,"->",post.post)
            })
        }else{
            reject("Bir hata oluştu..")
        }
    }).then((value)=>{
        console.log(value)
    }).catch((err) =>{
        console.log(err)
    })
}
function addPost(newPost){
    return new Promise((resolve,reject) => {
        if(newPost){
            resolve("Post eklendi")
            posts.push(newPost)
        }else{
            reject("Post eklenemedi")
        }
    }).then((value)=>{
        console.log(value)
    }).catch((err) =>{
        console.log(err)
    })
}
async function addedList() {
    listPost()
    await addPost({name:"new post",post:"new post description"})
    await listPost()
}
addedList()