const slugAddress = (address) => {
  // console.log('preAddress', address)
  address = address.replace(/\s/g, '+')
  // console.log('address:', address)
  return address
}

export default slugAddress

// slugAddress('wow dicks')
