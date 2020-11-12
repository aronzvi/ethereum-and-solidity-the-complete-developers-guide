import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x1f916d648EBb8157ed832ef722e5240259C0Caa9'
);

export default instance;