const cds = require('@sap/cds')

async function ConnectBackend(req){
    const backendconnect = await cds.connect.to('Customer2')
    const tx = backendconnect.tx(req);
    return tx.run(req.query)
}

module.exports = {
    ConnectBackend
}