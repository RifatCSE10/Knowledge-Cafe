import { useEffect, useState } from "react";

const Blogs = () => {
    const [blogs, setBologs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => console.log(data));
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Blogs;