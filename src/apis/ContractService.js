import AxiosHelper from "../helpers/AxiosHelper";

const ContractService = ()=> {

    const createContract = (contract)=> {
        return AxiosHelper.post("/contract",contract);
    }

    return Object.freeze({createContract});

}

export default ContractService;