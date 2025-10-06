import { svgs } from "@/src/publicImport";
import Image from "next/image";

export const BackgroundImageComponent = () => {
    return (
        <Image
            src={svgs.bgImage}
            alt="Background Image"
            fill
            objectFit="cover"
        />
    );
};