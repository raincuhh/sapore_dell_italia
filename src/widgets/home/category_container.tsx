export function CategoryContainer({
  section
}: {section: React.ReactNode}, id_str: string) {
  return(
    <section className="category">
      <div className="container">
        <div className="cont">
          <div className="in_cont" id={id_str}>
              {section}
          </div>
        </div>
      </div>
    </section>
  )
}
