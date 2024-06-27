export interface Contract {
    cnpj: string;
    technology: string;
}

export interface ContractCardProps {
    contracts: Contract[];
}