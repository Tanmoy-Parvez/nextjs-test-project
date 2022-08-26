import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";

const Blog = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    const router = useRouter();
    return (
        <>
            <Head>
                <title>Next.JS Project-Blogs</title>
            </Head>
            <Navbar />
            <div className="grid grid-cols-2 gap-4">
                {
                    posts.slice(0, 10).map(post =>
                        <div className="card w-[100%] bg-base-100 shadow-xl" key="post.id" >
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{post?.title}</h2>
                                <p>{post?.body}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary" onClick={() => router.push(`/blog/${post?.id}`)}>Details</button>
                                </div>
                            </div >
                        </div >
                    )
                }
            </div >
        </>
    );
};

export default Blog;