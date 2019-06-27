function hasParam(param) {
  return process.argv.includes(param)
}

if (hasParam('--critical')) {
  console.log('Critical Process!');
} else {
  console.log('Non-critical Process!');
}
