const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="text-4xl lg:text-5xl font-semibold tracking-wide leading-tight mb-5">
      { text }
    </h1>
  )
}

export default Heading
