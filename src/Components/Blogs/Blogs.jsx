import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBologs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBologs(data));
    },[])
    return (
        <div className='p-3'>
            {
                blogs.map(blog => <Blog blogs={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;