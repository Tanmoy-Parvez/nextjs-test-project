import { useRouter } from "next/router";
import errorPage from "./images/404-page.webp";
import Image from "next/Image"

const Error = () => {
    const router = useRouter()
    return (
        <div className="container text-center">
            <div>
                <Image src={errorPage} alt="error_page" width="500px" height="500px" />
            </div>
            <button onClick={() => router.push('/')} className="btn btn-primary">Back to Home</button>
        </div>
    );
};

export default Error;