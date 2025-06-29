type Props = {
  lang: 'en' | 'ar';
};

export default function Newsletter({ lang }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full lg:w-auto p-4 lg:p-0 border-t lg:border-t-0 rtl:text-lg">
      <h3 className="ltr:font-display rtl:font-display-ar">
        {lang == 'en' ? 'Updates' : 'التحديثات'}
      </h3>
      <p className="max-w-[40ch]">
        {lang == 'en'
          ? 'Give us your email in exchange for sneak peeks of new drops, invites to Omerieden happenings and more.'
          : 'أعطنا بريدك الإلكتروني مقابل لمحات حصرية من الإصدارات الجديدة، ودعوات لفعاليات أوماريدن والمزيد.'}
      </p>
      <form className="flex flex-col gap-2">
        <input
          type="email"
          placeholder={lang == 'en' ? 'Enter your email' : 'أدخل بريدك الإلكتروني'}
          className="border border-gray-300 rounded p-2 w["
        />
        <button
          type="submit"
          className="bg-black text-white dark:bg-white dark:text-black rounded p-2 hover:bg-gray-800 transition-colors"
        >
          {lang == 'en' ? 'Subscribe' : 'اشترك'}
        </button>
      </form>
    </div>
  );
}
