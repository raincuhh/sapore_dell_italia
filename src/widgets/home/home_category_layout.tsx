export default function HomeCategoryLayout({
   children,
   innerName,
}: {
   children: React.ReactNode;
   innerName: string;
}): JSX.Element {
   return (
      <div className="mx-auto max-w-max-width px-[1rem]">
         <div className="mx-[-0.2rem]">
            <div className={`${innerName} px-[0.2rem]`}>{children}</div>
         </div>
      </div>
   );
}
