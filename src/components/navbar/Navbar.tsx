import { AnimatePresence, Variants } from 'framer-motion'
import { useEffect, useState } from 'react'
import DesktopMenu from './DesktopMenu'
import MobileMenu from './MobileMenu'

export interface NavItemVariants extends Variants {
   hidden: { opacity: number; y: number }
   visible: (index: number) => { opacity: number; y: number; transition: { delay: number } }
}

export interface NavItem {
   number: string
   title: string
   href: string
}

const navItem = [
   {
      number: '01.',
      title: 'Skills',
      href: '#skills',
   },
   {
      number: '02.',
      title: 'Projects',
      href: '#projects',
   },
   {
      number: '03.',
      title: 'Contact',
      href: '#contact',
   },
]

const navItemVariants = {
   hidden: { opacity: 0, y: -75 },
   visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.25 * index },
   }),
}

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false)

   const handleOpen = () => {
      setIsOpen(!isOpen)
   }

   useEffect(() => {
      window.addEventListener('resize', () => {
         if (window.innerWidth >= 767 && isOpen === true) {
            setIsOpen(false)
         }
      })
   }, [isOpen])

   return (
      <nav className="fixed top-0 z-10 w-full py-5 bg-white text-primary">
         {/* Destop Menu */}
         <DesktopMenu
            navItemVariants={navItemVariants}
            navItem={navItem}
            isOpen={isOpen}
            handleOpen={handleOpen}
         />

         {/* Mobile Menu */}
         <AnimatePresence>
            {isOpen && (
               <MobileMenu
                  navItem={navItem}
                  handleOpen={handleOpen}
               />
            )}
         </AnimatePresence>
      </nav>
   )
}

export default Navbar
