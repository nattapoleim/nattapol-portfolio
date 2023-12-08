import { motion } from 'framer-motion'
import { Facebook, Github, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'

const heroContentVariants = {
   hidden: { opacity: 0, x: -200 },
   show: { opacity: 1, x: 0, transition: { duration: 1 } },
}

const heroImageVariants = {
   hidden: { opacity: 0, x: 200 },
   show: { opacity: 1, x: 0, transition: { duration: 1 } },
}

const Hero = () => {
   return (
      <section className="container mt-[80px] flex md:flex-row flex-col-reverse justify-center items-center gap-5 md:h-[600px]">
         <motion.div
            variants={heroContentVariants}
            initial={heroContentVariants.hidden}
            animate={heroContentVariants.show}
            className="flex flex-col items-center justify-between w-full h-full gap-5 px-8 py-8 text-center border-b-8 md:border-b-0 md:text-start md:gap-0 md:items-start md:border-l-8 md:py-16 md:w-7/12 border-destructive font-prompt">
            <div className="flex flex-col gap-5">
               <p className="font-mono text-lg underline underline-offset-4 text-primary">Hi, my name is</p>
               <div className="space-y-3 text-5xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                  <h1 className="text-slate-700">Nattapol Eiamsa-ard</h1>
                  <h2 className="px-2 py-1 text-white lg:text-end bg-destructive">VAAN</h2>
               </div>
               <div className="text-lg text-slate-500">
                  <p>I&apos;m a new Front-end Developer.</p>
                  <p>Now I&apos;m gaining experience from doing small projects.</p>
               </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-5 md:flex-row">
               <Button className="font-mono">
                  <a href="#contact">Contact</a>
               </Button>
               <div className="flex items-center gap-2">
                  <Button variant={'ghost'}>
                     <a
                        href="https://www.facebook.com/vaanies"
                        target="_blank">
                        <Facebook />
                     </a>
                  </Button>
                  <Button variant={'ghost'}>
                     <a
                        href="https://github.com/nattapoleim"
                        target="_blank">
                        <Github />
                     </a>
                  </Button>
                  <Button variant={'ghost'}>
                     <a
                        href="https://www.linkedin.com/in/nattapol-eiamsa-ard-385880262/"
                        target="_blank">
                        <Linkedin />
                     </a>
                  </Button>
               </div>
            </div>
         </motion.div>

         <motion.div
            variants={heroImageVariants}
            initial={heroImageVariants.hidden}
            animate={heroImageVariants.show}
            className="w-full h-full md:w-5/12">
            <Card className="h-[200px] md:h-full overflow-hidden bg-center bg-no-repeat bg-cover bg-hero-img"></Card>
         </motion.div>
      </section>
   )
}

export default Hero
