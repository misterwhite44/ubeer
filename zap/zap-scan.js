const ZAPClient = require('zap-client');
const fs = require('fs');

const config = fs.readFileSync('zap/zap-config.yaml', 'utf8');
const zap = new ZAPClient(config);

async function runScan() {
    try {
        const target = zap.getTarget();
        const scanId = await zap.startScan(target);
        console.log(`Scan started with ID: ${scanId}`);

        let status;
        do {
            status = await zap.getScanStatus(scanId);
            console.log(`Scan status: ${status}`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        } while (status !== '100');

        const results = await zap.getScanResults(scanId);
        console.log('Scan completed. Results:', results);
    } catch (error) {
        console.error('Error during scan:', error);
    }
}

runScan();