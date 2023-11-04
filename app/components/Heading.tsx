const Heading = ({ text }: { text: string }) => {
  return (
    <p className="text-4xl lg:text-5xl font-semibold tracking-wide leading-tight mb-5">
      { text }
    </p>
  )
}

export default Heading
