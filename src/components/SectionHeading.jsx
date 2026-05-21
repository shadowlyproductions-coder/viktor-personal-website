export default function SectionHeading({ eyebrow, title, children, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto w-full max-w-3xl text-center" : "w-full max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-[1.7rem] font-semibold leading-tight text-ice sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-5 text-sm leading-7 text-steel sm:text-lg sm:leading-8">
          {children}
        </p>
      ) : null}
    </div>
  );
}
