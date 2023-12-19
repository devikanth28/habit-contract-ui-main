import React from "react";
import ContractService from "../../apis/ContractService";
import useChange from "../../hooks/useChange";

const CreateContract = () => {

    const [contract, onContractchange] = useChange();

    const onContractCreate = () => {
        const { data } = ContractService().createContract(contract);
    }

    console.log(contract);

    return (
    <React.Fragment>
        <div className="m-5">
            <h4>Create Contract</h4>
            <div class="form-floating mb-3">
                <input name="title" onChange={(e => { onContractchange(e) })} type="text" class="form-control" id="title" />
                <label for="title">Title</label>
            </div>
            <div class="form-floating mb-3">
                <textarea onChange={(e => { onContractchange(e) })} class="form-control" name="description" placeholder="Writer about yourself" id="floatingTextarea" />
                <label for="floatingTextarea">Description</label>
            </div>
            <div class="form-floating mb-3">
                <input name="entryFees" onChange={(e => { onContractchange(e) })} type="number" class="form-control" id="entryFees" />
                <label for="entryFees">Entry Fees</label>
            </div>
            <div class="form-floating mb-3">
                <input name="punishmentAmount" onChange={(e => { onContractchange(e) })} type="number" class="form-control" id="punishmentAmount" />
                <label for="punishmentAmount">Punishment Amount {JSON.stringify(contract.privateContract == true)}</label>
            </div>
            <div class="form-check form-switch mb-3">
                <input class="form-check-input" onChange={(e => { onContractchange(e) })} name="privateContract" value={true} checked={contract?.privateContract || false} type="checkbox" id="privateContract" />
                <label class="form-check-label" for="privateContract">Check To Make This Private Contract</label>
            </div>
            {contract.privateContract && <div class="form-floating mb-3">
                <input name="recieverUniqueId" onChange={(e => { onContractchange(e) })} type="text" class="form-control" id="recieverUniqueId" />
                <label for="recieverUniqueId">Reciever Unique Id</label>
            </div>}
            <button onClick={(e) => onContractCreate(e)} type="button" class="btn my-3 btn-dark btn-lg float-end">Create</button>
        </div>
    </React.Fragment>)
}

export default CreateContract;