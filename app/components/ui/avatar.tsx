import Image from "next/image";

export function AvatarRounded({ img, name }: { img: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <Image
        src={img}
        alt={name}
        width={160}
        height={160}
        className="rounded-full object-cover"
      />
      <div className="text-start flex gap-4">
        <h5 className="text-lg font-medium pb-2 border-b-2 border-red-600">
          {name}
        </h5>
      </div>
    </div>
  );
}

export function AvatarClassic({
  img,
  name,
  role,
}: {
  img: string;
  name: string;
  role: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <Image
        src={img}
        alt={name}
        width={400}
        height={300}
        className="object-cover"
      />
      <div className="text-start flex gap-4">
        <div className="w-2 bg-red-600 h-full" />
        <div>
          <h5 className="text-lg font-medium">{name}</h5>
          <p className="text-neutral-600">{role}</p>
        </div>
      </div>
    </div>
  );
}
