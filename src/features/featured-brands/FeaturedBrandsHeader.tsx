type Props = {
  lang: 'en' | 'ar';
  title: string;
  description?: string;
};

export default function FeaturedBrandsHeader({ title, description }: Props) {
  return (
    <header className="p-4 py-8 lg:p-8 flex flex-col md:justify-end gap-1 rtl:gap-2 md:gap-2 rtl:md:gap-4 bg-white dark:bg-black md:ltr:border-r md:rtl:border-l 2xl:rtl:border-l-0 2xl:ltr:border-r-0 2xl:bg-transparent 2xl:dark:bg-transparent ">
      <h2 className="text-2xl rtl:text-3xl leading-[1.1] lg:text-4xl rtl:lg:text-5xl uppercase">
        {title}
      </h2>
      <p className="leading-[1.3] text-sm lg:text-base rtl:lg:text-lg  ">{description}</p>
    </header>
  );
}
