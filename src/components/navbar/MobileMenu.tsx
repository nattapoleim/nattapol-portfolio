import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import { NavItem } from './Navbar'

interface Props {
   handleOpen: () => void
   navItem: NavItem[]
}

const sideVariants = {
   closed: {
      transition: {
         staggerChildren: 0.2,
         staggerDirection: -1,
      },
   },
   open: {
      transition: {
         staggerChildren: 0.2,
         staggerDirection: 1,
      },
   },
}
const itemVariants = {
   closed: {
      opacity: 0,
   },
   open: { opacity: 1 },
}

const MobileMenu = ({ handleOpen, navItem }: Props) => {
   return (
      <div>
         <motion.aside
            initial={{ width: 0 }}
            animate={{ width: 288 }}
            exit={{
               width: 0,
               transition: { delay: 0.7, duration: 0.3 },
            }}
            className="absolute top-0 right-0 z-[100] h-screen bg-destructive">
            <motion.div
               initial="closed"
               animate="open"
               exit="closed"
               variants={sideVariants}
               className="flex flex-col items-center px-10 pt-20 text-sm text-white gap-7">
               {navItem.map((item) => (
                  <motion.a
                     key={item.number}
                     whileHover={{ scale: 1.1 }}
                     variants={itemVariants}
                     href={item.href}
                     className="duration-300 hover:text-white/70">
                     {item.number}
                     {item.title}
                  </motion.a>
               ))}

               <Button
                  variant={'secondary'}
                  className="w-full text-primary">
                  Resume
               </Button>
            </motion.div>
         </motion.aside>
         <div
            className="absolute inset-0 z-[70] h-screen bg-black/20"
            onClick={handleOpen}></div>
      </div>
   )
}

export default MobileMenu
