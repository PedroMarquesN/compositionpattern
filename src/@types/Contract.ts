export interface Contract {
    cnpj: string;
    technology: string;
}



export interface ContractCardProps {
    contracts: Contract[];
}


export interface UserContract {
    id: number;
    quantity: string;
    status: string;
}