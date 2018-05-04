module.exports = {
  assertRevert: async (promise) => {
    try {
      await promise
    } catch (error) {
      const revertFound = error.message.search('revert') >= 0
      assert(revertFound, `Expected "revert", got ${error} instead`)
      return
    }
    assert.fail('Expected revert not received')
  },

  addDaysOnEVM: async function(days) {
		const addSeconds= 60 * 60 * 24 * days
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [addSeconds], id: 0})
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_mine", params: [], id: 0})
	},

  addHoursOnEVM: async function(hours) {
		const addSeconds = 60 * 60 * hours 
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [addSeconds], id: 0})
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_mine", params: [], id: 0})
	},

  addMinutesOnEVM: async function(minutes) {
		const addSeconds = 60 * 60 * 24 * minutes
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [addSeconds], id: 0})
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_mine", params: [], id: 0})
	},

  addSecondsOnEVM: async function(seconds) {
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [seconds], id: 0})
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_mine", params: [], id: 0})
	},

  setTimestamp: async function(timestamp) {
		const currentBlockTime = web3.eth.getBlock(web3.eth.blockNumber).timestamp
		const addSeconds = timestamp - currentBlockTime
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_increaseTime", params: [addSeconds], id: 0})
		await web3.currentProvider.send({jsonrpc: "2.0", method: "evm_mine", params: [], id: 0})
  }
}

