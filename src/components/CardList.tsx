import { useState } from "react";
import type { IPolicy } from "../types/Policy";
import PolicyCard from "./PolicyCard";

const ITEMS_PER_PAGE = 3;

const CardList = ({ policies }: { policies: IPolicy[] }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(policies.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentPolicies = policies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    {/* Handler for pagination buttons */}
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div>
            {/* Policy cards */}
            <div className="flex flex-col gap-4">
                {currentPolicies.map((policy) => (
                    <PolicyCard key={policy.policyNumber} policy={policy} />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-8">
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 text-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label="Previous page"
                    >
                        ‹
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => goToPage(page)}
                            className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-medium border transition-colors ${
                                currentPage === page
                                    ? "bg-blue-600 text-white border-blue-600"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                            }`}
                            aria-label={`Page ${page}`}
                            aria-current={currentPage === page ? "page" : undefined}
                        >
                            {page}
                        </button>
                    ))}

                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 text-lg hover:bg-gray-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label="Next page"
                    >
                        ›
                    </button>
                </div>
            )}
        </div>
    );
};

export default CardList;
