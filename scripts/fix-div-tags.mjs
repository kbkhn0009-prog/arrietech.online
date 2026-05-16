import fs from 'fs'

const p = process.argv[2] || 'e:/Business/ARRIE-NEXTJS/components/screenshot-showcase.tsx'
let c = fs.readFileSync(p, 'utf8')
const motionOpen = '<' + 'motion.div'
const motionClose = '</' + 'motion.div>'
const divOpen = '<' + 'div'
const divClose = '</' + 'div>'
c = c.replaceAll(motionOpen, divOpen)
c = c.replaceAll(motionClose, divClose)
fs.writeFileSync(p, c)
console.log('fixed')
