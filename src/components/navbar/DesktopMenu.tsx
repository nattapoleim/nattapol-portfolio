import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from '../ui/button'
import { NavItem, NavItemVariants } from './Navbar'

interface Props {
   navItemVariants: NavItemVariants
   navItem: NavItem[]
   handleOpen: () => void
   isOpen: boolean
}

const DesktopMenu = ({ navItemVariants, navItem, handleOpen, isOpen }: Props) => {
   return (
      <div className="container flex items-center justify-between">
         <motion.a
            variants={navItemVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="/"
            className="text-3xl font-bold">
            VAAN.
         </motion.a>

         {/* Desktop Menu */}
         <div className="items-center hidden text-sm text-black md:flex gap-7">
            {navItem.map((item, index) => (
               <motion.a
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  key={item.number}
                  href={item.href}
                  className="text-black transition duration-300 hover:text-primary">
                  <span className="text-primary">{item.number}</span>
                  {item.title}
               </motion.a>
            ))}
            <motion.div
               variants={navItemVariants}
               initial="hidden"
               animate="visible"
               custom={5}>
               <Button variant={'transparent'}>Resume</Button>
            </motion.div>
         </div>

         <Button
            className={cn('block md:hidden z-[9999]', isOpen && 'text-white hover:bg-primary')}
            onClick={handleOpen}
            variant={'ghost'}>
            {!isOpen ? <Menu /> : <X />}
         </Button>
      </div>
   )
}

export default DesktopMenu
