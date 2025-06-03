import ProductImagePlaceholder from '../ProductImagePlaceholder';

export default function GridTypeB() {
  return (
    <section className="grid lg:grid-cols-2 border-b border-b-black dark:border-b-white ">
      <Card
        title="The Marni Summer Collection"
        subtitle="A celebration of the season’s most vibrant pieces, from the iconic Hammock bag to the new Puzzle bag in a limited-edition color"
      />
      <Card
        title="The Acne Studios Summer Collection"
        subtitle="A celebration of the season’s most vibrant pieces, from the iconic Hammock bag to the new Puzzle bag in a limited-edition color"
      />
    </section>
  );
}

function Card({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="flex flex-col p-8 bg-white border-b lg:border-b-0 lg:border-r relative dark:bg-black h-full">
      <div className="aspect-square flex justify-center items-center">
        <ProductImagePlaceholder />
      </div>
      <div className="flex flex-col gap-2">
        <Header title={title} subtitle={subtitle} />
        <CTA title="SHOP The Collection" />
      </div>
    </div>
  );
}

function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <header className="flex flex-col gap-2">
      <h2 className="text-4xl">{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

function CTA({ title }: { title: string }) {
  return (
    <a href="#" className="uppercase h-[36px] items-center flex gap-2">
      <div className="font-display text-3xl w-5 flex justify-center">+</div>
      <div>{title}</div>
    </a>
  );
}
