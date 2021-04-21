import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const argv = yargs(hideBin(process.argv))
  .option('number', {
    alias: 'n',
    description: 'Input number',
    type: 'number',
  })
  .help()
  .alias('help', 'h').argv

if (argv.n) {
  console.log('number is:', argv.n)
}

console.log(argv)
