import Image from "next/image";
import type { QuestionImage as QuestionImageData } from "@/data/days/days";

interface QuestionImageProps {
    image?: QuestionImageData;
}

export default function QuestionImage({
                                          image,
                                      }: QuestionImageProps) {
    if (!image) return null;

    return (
        <div className="relative my-2 h-64 w-full max-w-lg">
            <Image
                src={image.src}
                alt={image.alt}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 512px"
                className="rounded-lg object-contain"
            />
        </div>
    );
}