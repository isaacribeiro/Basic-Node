process.stdout.write('Can I delete your entire database?')
process.stdin.on('data', (data) => {
  process.stdout.write(`Your answer was ${data.toString()}`)
  process.exit()
})
