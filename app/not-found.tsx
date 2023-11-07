import Link from 'next/link'

const NotFound = () => {
  return (
    <>
      <div className="body-section md:mb-20">
        <p className='subtitle'>Page Not Found</p>
        <p className='paragraph'>The page you are looking for has either been moved or does not exist. Perhaps it has been refactored out of existence. While we navigate this little enigma, feel free to return to familiar territory and explore works that bring ideas to life.</p>
        <Link href="/">
          <p className="w-full md:w-fit text-medium sm:text-medium sm:text-lg font-light leading-7 sm:leading-8 mb-12 border-b border-gray-900">
            Return to Home
          </p>
        </Link>
      </div>
    </>
  )
}

export default NotFound