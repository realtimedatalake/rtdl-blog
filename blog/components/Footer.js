import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center space-y-6">
        <ul className="navbar mt-5 flex flex-row justify-center space-x-6 text-xl font-medium text-gray-800">
          <li>
            <Link href="https://rtdl.io">
              <a>⚡️ Home</a>
            </Link>
          </li>
          <li>
            <Link href="https://rtdl.io/docs/">
              <a>⚡️ Docs</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>⚡️ Blog</a>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/realtimedatalake/rtdl" newWindow="true">
              <a>⚡️ GitHub</a>
            </Link>
          </li>
        </ul>
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()} ${siteMetadata.title}`}</div>
        </div>
      </div>
    </footer>
  )
}
