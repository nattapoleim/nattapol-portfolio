import { Facebook, Github, Linkedin } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'

const Hero = () => {
   return (
      <section
         data-aos="fade-right"
         data-aos-delay="700"
         data-aos-duration="1000"
         className="container mt-[80px] flex md:flex-row flex-col-reverse justify-center items-center gap-5 md:h-[600px]">
         <div className="flex flex-col items-center justify-between w-full h-full gap-5 px-8 py-8 text-center border-b-8 md:border-b-0 md:text-start md:gap-0 md:items-start md:border-l-8 md:py-16 md:w-7/12 border-destructive font-prompt">
            <div className="flex flex-col gap-5">
               <p
                  data-aos="fade-up"
                  data-aos-delay="1200"
                  data-aos-duration="1000"
                  className="font-mono text-lg underline underline-offset-4 text-primary">
                  Hi, my name is
               </p>
               <div className="space-y-3 text-5xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                  <h1
                     data-aos="fade-up"
                     data-aos-delay="1400"
                     data-aos-duration="1000"
                     className="text-slate-700">
                     Nattapol Eiamsa-ard
                  </h1>
                  <h2
                     data-aos="fade-up"
                     data-aos-delay="1600"
                     data-aos-duration="1000"
                     className="px-2 py-1 text-white lg:text-end bg-destructive">
                     VAAN
                  </h2>
               </div>
               <div className="text-lg text-slate-500">
                  <p
                     data-aos="fade-up"
                     data-aos-delay="1800"
                     data-aos-duration="1000">
                     I&apos;m a new Front-end Developer.
                  </p>
                  <p
                     data-aos="fade-up"
                     data-aos-delay="2000"
                     data-aos-duration="1000">
                     {' '}
                     Now I&apos;m gaining experience from doing small projects.
                  </p>
               </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-5 md:flex-row">
               <Button
                  data-aos="fade-right"
                  data-aos-delay="2000"
                  data-aos-duration="1000"
                  className="font-mono">
                  <a href="#contact">Contact</a>
               </Button>
               <div className="flex items-center gap-2">
                  <Button
                     data-aos="fade-right"
                     data-aos-delay="1800"
                     data-aos-duration="1000"
                     variant={'ghost'}>
                     <a
                        href="https://www.facebook.com/vaanies"
                        target="_blank">
                        <Facebook />
                     </a>
                  </Button>
                  <Button
                     data-aos="fade-right"
                     data-aos-delay="1600"
                     data-aos-duration="1000"
                     variant={'ghost'}>
                     <a
                        href="https://github.com/nattapoleim"
                        target="_blank">
                        <Github />
                     </a>
                  </Button>
                  <Button
                     data-aos="fade-right"
                     data-aos-delay="1400"
                     data-aos-duration="1000"
                     variant={'ghost'}>
                     <a
                        href="https://www.linkedin.com/in/nattapol-eiamsa-ard-385880262/"
                        target="_blank">
                        <Linkedin />
                     </a>
                  </Button>
               </div>
            </div>
         </div>

         <Card
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1000"
            className="w-full h-[200px] md:h-full overflow-hidden bg-center bg-no-repeat bg-cover md:w-5/12 bg-hero-img"></Card>
      </section>
   )
}

export default Hero
