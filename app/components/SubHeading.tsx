const SubHeading = ({ text, main }: { text: string, main?: boolean }) => {
  return (
    <>
      {main ? (
        <h1 className="text-2xl sm:text-2xl md:text-3xl tracking-wide leading-tight mt-4 mb-6 md:mt-6 md:mb-6">
          {text}
        </h1>
      ) : (
        <p className="text-2xl sm:text-2xl md:text-3xl tracking-wide leading-tight mt-4 mb-6 md:mt-6 md:mb-6">
          {text}
        </p>)}
    </>
  )
}

export default SubHeading
