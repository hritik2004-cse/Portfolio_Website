import React from 'react'
import NavLinks from './NavLinks'
import Logo from './Logo'
import { MdFileDownload } from 'react-icons/md'
import Link from 'next/link'

const MainNav = () => {
  return (
    <nav className="w-full pt-16" aria-label="Main navigation">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <NavLinks containerStyles="flex flex-col gap-6 p-6" />
        <Link href="/Hritik_sharma_web_developer_resume.pdf" download aria-label="Download Hritik Sharma's CV">
          <button className="btn btn-lg btn-tertiary mb-16">
            <div className="flex items-center gap-3">
              <span>Download CV</span>
              <MdFileDownload className="text-xl" aria-hidden="true" />
            </div>
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default MainNav
