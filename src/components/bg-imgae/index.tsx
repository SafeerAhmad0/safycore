import Image from "next/image";

const bgImage = "/images/bg-image.svg";

export const BackgroundImageComponent = () => {
    return (
        <Image
            src={bgImage}
            alt="Background Image"
            fill
            objectFit="cover"
        />
    );
};