import bannerImage from "../../pages/images/banner-image.jpg";
import Image from 'next/Image'
const Banner = () => {
    return (
        <div className="">
            <Image src={bannerImage} alt="" width="1920px" height="500px" />
        </div>
    );
};

export default Banner;