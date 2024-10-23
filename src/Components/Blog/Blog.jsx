import '../../../src/App.css'
const Blog = ({blogs}) => {
    const {image_url, author,published_date, read_time, title, tags, } = blogs;
    return (
        <div className='mb-20 box-shadow rounded-xl p-2'>
            {/* card img */}
            <div className='w-full h-300px'>
                <img className='w-full h-full' src={image_url} alt="banner-img" />
            </div>
            <div className='w-full flex justify-between items-center py-4'>
                <div className='w-5/12 flex justify-start items-center gap-4 px-2'>
                    <div className='w-10 rounded-full'>
                        <img src={author.profile_image_url} alt="profile-img" />
                    </div>
                    <div>
                        <h1 className='text-xl font-bold'>{author.name}</h1>
                        <p className='text-sm'>{published_date}</p>
                    </div>
                </div>
                <div className='w-5/12 flex justify-end items-center gap-4 px-4'>
                    <h2 className='text-sm'>Reaquired Time: {read_time}</h2>
                    <button><i className="fa-regular fa-bookmark"></i></button>
                </div>
            </div>
            {/* Card Tittle... */}
            <div>
                <h1 className='text-3xl font-bold'>{title}</h1>
            </div>
            <div>
                <p className='my-5'>{tags.map(tag=> <span>#{tag}</span>)}</p>
            </div>
            <h3 className='text-sm text-blue-400 hover:cursor-pointer'>Mark as read</h3>
        </div>
    );
};

export default Blog;