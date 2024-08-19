import { cn } from "@/app/utils/cn";
import Image from "next/image";

export function CardClassic({
  title,
  content,
  containerClassname = "",
  titleClassname = "",
  contentClassname = "",
}: {
  title: string;
  content: string;
  containerClassname?: string;
  titleClassname?: string;
  contentClassname?: string;
}) {
  return (
    <div className="h-full flex flex-col gap-4 group cursor-pointer">
      <div className="h-full text-start flex">
        <div className="w-2 bg-red-600 h-full" />
        <div
          className={cn(
            "p-4 py-2 bg-neutral-50 group-hover:bg-neutral-100 w-full",
            containerClassname
          )}
        >
          <p className={cn("text-neutral-600", titleClassname)}>{title}</p>
          <h5 className={cn("text-lg font-medium", contentClassname)}>
            {content}
          </h5>
        </div>
      </div>
    </div>
  );
}

export function CardBadge({
  img,
  alt = "",
  txt,
}: {
  img: string;
  alt?: string;
  txt?: string;
}) {
  return (
    <div className="hover:bg-neutral-50 flex flex-col items-center justify-between border rounded-md overflow-hidden">
      <div className="p-4 h-full flex justify-center items-center">
        <Image
          src={img}
          alt={alt}
          width={250}
          height={250}
          className="w-20 object-contain"
        />
      </div>
      {txt && (
        <span className="w-full text-white bg-red-500 text-center font-medium text-sm">
          {txt}
        </span>
      )}
    </div>
  );
}
