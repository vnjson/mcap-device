export default function stringToData(reply) {
    let _newReply = reply
    const variables = reply.match(/{{.+?}}/g)
    if(!variables) return  _newReply
    variables.forEach( (varItem) => {
        const dataKey = varItem.replaceAll('{{', '').replaceAll('}}', '').trim()
        _newReply = _newReply.replaceAll(varItem, vnjs.state.data[dataKey]||'')
    })
    return _newReply
}