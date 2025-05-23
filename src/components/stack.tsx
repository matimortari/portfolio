import StackCard from "@/src/components/ui/stack-card"
import about from "@/src/json/about.json"
import stack from "@/src/json/stack.json"
import { motion } from "framer-motion"
import { useLocale } from "next-intl"
import { Merriweather } from "next/font/google"

const merriweather = Merriweather({ subsets: ["latin"], weight: "900" })

export default function Stack() {
  const locale = useLocale()

  const { stackTitle } = about

  return (
    <section id="stack" className="flex-1 text-center md:text-start">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className={`${merriweather.className} my-8`}
      >
        {stackTitle[locale]}
      </motion.h3>

      <div className="grid grid-cols-2 gap-2">
        {stack.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 * index }}
          >
            <StackCard name={item.name} icon={item.icon} link={item.link} description={item.description} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
