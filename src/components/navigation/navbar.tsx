import { StyledNavbar } from '.'
import { motion } from 'framer-motion'
import { useOptions } from '../../context/optionsContext'

export function NavBar() {
  const { activeIndex, setActiveIndex } = useOptions()

  const data = ['Timer', 'Todo']
 
  return (
    <> 
      <StyledNavbar>
        <motion.ul>
          {data.map((label, index) => {
            const isActive = index === activeIndex
            return (
              <motion.li
                key={index}
                onClick={() => setActiveIndex(index)}
              >
                <p>
                  {isActive ? (
                    <motion.span layoutId="wdadwadawda" className="shadow" />
                  ) : null}
                  <span>{label}</span>
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </StyledNavbar>
    </>
  )
}
