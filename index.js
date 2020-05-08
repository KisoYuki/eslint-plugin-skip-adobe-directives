const adobeTag = '// (adobe-directive) '
var adobeInd
module.exports.processors = {
  '.jsx': {
    preprocess: function (input) {
      const newInput = input.replace(/#(.*)/gu, adobeTag + '#$1')
      adobeInd = newInput.split('\n').reduce((ind, line, idx) => {
        if (line.indexOf(adobeTag) > -1) {
          ind.push(idx + 1)
        }
        return ind
      }, [])
      return [newInput]
    },

    postprocess: function (report) {
      const outMessages = []
      report.forEach(function (messageList) {
        messageList.forEach(function (message) {
          if (!adobeInd.includes(message.line)) {
            outMessages.push(message)
          }
        })
      })
      return outMessages
    }
  }
}
