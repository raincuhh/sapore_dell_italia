export default function PageLayout({
   children,
}: {
   children: React.ReactNode;
}): JSX.Element {
   return (
      <div className="page">
         <div className="flex flex-col font-normal text-[1rem] overflow-x-hidden">
            <main className="bg-bg text-secondary min-h-[100dvh]">
               {children}
            </main>
         </div>
      </div>
   );
}
