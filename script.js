// script.js
function generateIPs() {
    const subnetInput = document.getElementById('subnets').value;
    const subnets = subnetInput.split('\n').map(subnet => subnet.trim()).filter(subnet => subnet);

    const results = document.getElementById('results');
    results.innerHTML = '';

    subnets.forEach(subnet => {
        const [subnetAddress, subnetMaskLength] = subnet.split('/');
        const subnetMask = -1 << (32 - parseInt(subnetMaskLength));
        
        const subnetInt = ipToInt(subnetAddress);
        const firstIp = (subnetInt & subnetMask) + 1;
        const lastIp = (subnetInt | ~subnetMask) - 1;

        results.innerHTML += `<h3>Subnet: ${subnet}</h3>`;
        results.innerHTML += `<p>IP Range: ${intToIp(firstIp)} - ${intToIp(lastIp)}</p>`;
        results.innerHTML += `<ul>${generateIpList(firstIp, lastIp).map(ip => `<li>${ip}</li>`).join('')}</ul>`;
    });
}

function generateIpList(firstIp, lastIp) {
    let ips = [];
    for
