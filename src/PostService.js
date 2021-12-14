import axios from axios;

const url = "localhost:8800/api/posts";
const url1 = "localhost:8800/api/posts/timeline/all"

class PostService {
    //Get posts
    static getPosts(userId){
        return new Promise(async (resolve, reject) =>{
            try{
                const res = await  axios.get(url, {
                    userId
                });
                const data = res.data;
                resolve(
                    data.map(post => ({
                        ...post,
                        createdAt: new Date(post.createdAt)
                    }))
                );
            } catch(err){
                reject(err);
            }
        })
    }

    //Create post
    static createPost(text){
        return axios.post(url, {
            text
        })
    }

    //Delete post
    static deletePost(postId) {
        return axios.delete(`${url}/${postId}`);
    }
}

export default PostService;