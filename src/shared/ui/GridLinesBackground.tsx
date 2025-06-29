export default function GridLinesBackground() {
  return (
    <div className="grid-bg fixed grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 h-screen w-full left-0 top-0 grid">
      <div className="rtl:border-l ltr:border-r" />
      <div className="rtl:border-l ltr:border-r md:block hidden" />
      <div className="rtl:border-l ltr:border-r hidden 2xl:block" />
      <div />
    </div>
  );
}
