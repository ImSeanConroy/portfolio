import Link from 'next/link'
import SubHeading from './components/SubHeading'
import BodyText from './components/BodyText'

const NotFound = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="px-5 md:px-10 mt-12 md:mt-20 mb-16 md:mb-20">
          <SubHeading text="Page Not Found" />
          <BodyText text="The page you're looking for has either been moved or doesn't exist. Perhaps it's been refactored out of existence. While we navigate this little enigma, feel free to return to familiar territory and explore works that bring ideas to life." />
            <Link href="/">
              <p className="w-full md:w-fit text-medium sm:text-medium sm:text-lg font-light leading-7 sm:leading-8 mb-12 border-b border-gray-900">
                Return to Home
              </p>
            </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound