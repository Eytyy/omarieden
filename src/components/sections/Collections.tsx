import Image from '../Image';

export default function Collections() {
  return (
    <section className="grid lg:grid-cols-2 lg:border-b border-b-black dark:border-b-white ">
      <Card
        title="The Marni Summer Collection"
        subtitle="A celebration of the season’s most vibrant pieces, from the iconic Hammock bag to the new Puzzle bag in a limited-edition color"
        images={{
          default: 'collections/marni_gpelj1',
          hover: 'collections/marni-hover_syuxzh',
        }}
      />
      <Card
        title="The Acne Studios Summer Collection"
        subtitle="A celebration of the season’s most vibrant pieces, from the iconic Hammock bag to the new Puzzle bag in a limited-edition color"
        images={{
          default: 'collections/acni_zw9tza',
          hover: 'collections/acni-hover_d7izi8',
        }}
      />
    </section>
  );
}

function Card({
  title,
  subtitle,
  images,
}: {
  title: string;
  subtitle?: string;
  images: {
    default: string;
    hover: string;
  };
}) {
  return (
    <div className="grid grid-rows-[1fr_min-content]  bg-white border-b lg:border-b-0 lg:border-r relative dark:bg-black h-screen">
      <div className="pt-[172px] px-8 lg:px-16 relative">
        <div className="relative w-full h-full group">
          <div className="absolute top-0 w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300 [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
            <Image id={images.default} />
          </div>
          <div className="absolute top-0 w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 [&_img]:object-contain [&_img]:w-full [&_img]:h-full">
            <Image id={images.hover} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4 lg:p-8 relative">
        <CardHeader title={title} subtitle={subtitle} />
        <CardCTA title="SHOP The Collection" />
      </div>
    </div>
  );
}

function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex flex-col gap-2">
      <h2 className="text-2xl leading-[1.1] lg:text-4xl">{title}</h2>
      {subtitle && <p className="text-sm">{subtitle}</p>}
    </header>
  );
}

function CardCTA({ title }: { title: string }) {
  return (
    <a href="#" className="uppercase h-[36px] items-center flex gap-2 text-sm">
      <div className="font-display text-3xl w-5 flex justify-center">+</div>
      <div>{title}</div>
    </a>
  );
}
