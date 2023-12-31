/* eslint-disable @next/next/no-img-element */
type HealthProps = {
    src: string;
    title: string;
    description: string;
};

export default function Health({ src, title, description }: HealthProps) {
    return (
        <div className="p-6 space-y-5">
            <img src={src} alt="" width={50} height={50} />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-500">{description}</p>
        </div>
    );
}