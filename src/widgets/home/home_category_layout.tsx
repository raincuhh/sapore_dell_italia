export default function HomeCategoryLayout({
   children,
   inner,
}: {
   children: React.ReactNode;
   inner: string;
}): JSX.Element {
   return (
      <div className="mx-auto max-w-max-width px-[1rem]">
         <div className="mx-[-0.2rem]">
            <div className={`${inner} px-[0.2rem]`}>{children}</div>
         </div>
      </div>
   );
}
