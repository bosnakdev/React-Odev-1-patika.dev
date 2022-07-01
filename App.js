import axios from "axios";

export default async function getData(user_id)
{
    if(isNaN(user_id) == true){
        return {error:"Only number type data can be entered."};
    }else{
        const {data: User} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
        const {data: Posts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
        User["posts"] = Posts;
        return User;
    }
}