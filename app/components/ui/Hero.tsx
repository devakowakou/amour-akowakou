"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Bot from "../bot/Bot"
import { useRouter } from "next/navigation"


export default function Hero() {

       const router =  useRouter()

    return (
        <div  className=" flex h-full w-full bg-transparent pt-20 lg:pt-0 text-foreground">
            <div className=" flex gap-10 h-full flex-col-reverse md:flex-row items-center  w-full px-10 md:px-5 justify-around">
                <div className='max-w-md '>
                    <h1 className='text-4xl mb-5  font-extrabold mx-auto md:text-5xl'>
                        Bienvenue<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-900'> sur Le site de  Amour Dev</span>
                    </h1>
                    <p className='mb-5'>
                        Bienvenue sur mon univers digital !  
                        Je suis Amour Akowakou, développeur passionné par le web, le backend et la création de solutions innovantes.  
                        Explore mes projets, mes compétences et mes réalisations.
                        Prêt à collaborer ? Contacte-moi pour donner vie à tes idées ! 
                    </p>
                    <Button className=" bg-blue-500 text-white">Contacter nous maintenant</Button>
                </div>

                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mockup-browser bg-background  border h-80 lg:w-5/12 ">
                    <div className="mockup-browser-toolbar bg-background">
                        <div className="input border text-white  ">Last project</div>
                    </div>
                    <div className="flex justify-center px-4 py-16 border-t bg-no-repeat bg-cover h-full" >
                        <div className=" flex flex-col w-full gap-5">
                            <div className=" flex gap-5 items-center w-full">
                                <div className="skeleton w-52 h-32"></div>
                                <div className=" w-full flex flex-col items-center gap-5">
                                    <div className="skeleton w-full h-10"></div>
                                    <div className="skeleton w-full h-10"></div>
                                </div>
                            </div>
                            <div className="skeleton w-80 h-80"></div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Bot isActive onCancel={() => { }} onSubmit={() => {
                router.push("/portfolio")
             }}>
                Bienvenue sur le site de mon leader, si vous voulez je peux vous aidez à explorer cette platforme
                voulez vous que je vous aides à explorer ?
            </Bot>
        </div>

    )
}

