export default function SocialList() {
   return (
      <div className="flex flex-row gap-[1rem]">
         <SocialItem href_="/" bxs_icon="bx bxl-instagram" />
         <SocialItem href_="/" bxs_icon="bx bxl-linkedin" />
      </div>
   );
}

type SocialItemProps = { href_: string; bxs_icon: string };

export function SocialItem({ href_, bxs_icon }: SocialItemProps) {
   return (
      <>
         <div>
            <a href={href_} target="_blank" rel="noopener noreferrer">
               <i
                  className={`${bxs_icon} text-fs-m hover:text-main transition-hover-base`}
               ></i>
            </a>
         </div>
      </>
   );
}
