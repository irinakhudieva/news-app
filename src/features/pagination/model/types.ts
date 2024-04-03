export interface IPaginationProps {
    totalPages: number;
    currentPage: number; 
    handleClickPage: (page: number) => void; 
    handleNextPage: () => void;
    handlePeviousPage: () => void;
}