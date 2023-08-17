import * as style from '.'
import { motion } from 'framer-motion'
import { useOptions } from '../../context/optionsContext'

export function NavBar() {
  const { activeIndex, setActiveIndex } = useOptions()

  const data = ['Timer', 'Todo']
 
  return (
    <> 
      <style.Navbar>
        <style.List>
          {data.map((label, index) => {
            const isActive = index === activeIndex
            return (
              <motion.li
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <style.Text>
                  {isActive && (
                    <style.Background layoutId="horizontal" />
                  )}
                  <span>{label}</span>
                </style.Text>
              </motion.li>
            )
          })}
        </style.List>
      </style.Navbar>
    </>
  )
}
