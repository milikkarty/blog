const Post = ({ post }) => {
    return (
        <article className="post">
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
        </article>
    )
}

export default Post;