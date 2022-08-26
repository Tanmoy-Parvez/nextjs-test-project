import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const PageNo = () => {
    const router = useRouter();
    const pageNumber = router.query.pageNo;

    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${pageNumber}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [pageNumber])
    return (
        <>
            <Head>
                <title>Next.JS Project-Blogs/Detail</title>
            </Head>
            <div className="card w-[100%] bg-base-100 shadow-xl mt-52">
                <div className="card-body">
                    <h2 className="card-title text-2xl">UserID: {post?.userId}</h2>
                    <h2 className="card-title text-2xl">{post?.title}</h2>
                    <p>{post?.body}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary" onClick={() => router.push('/blog')}>Back</button>
                    </div>
                </div >
            </div >
        </>
    );
};

export default PageNo; 