import Post from "./post"

function ListadoBlogs({ blogs }) {
    return (
        <>
            <h2 className='heading'>Blog</h2>
            <div className='blog'>

                {blogs.map(blog => (
                    <Post
                        key={blog.id}
                        blog={blog}
                    />
                ))}
            </div>

        </>
    )
}

export default ListadoBlogs