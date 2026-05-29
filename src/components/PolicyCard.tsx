import type { IPolicy } from "../types/Policy";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import formatDate from "../utils/formatDate";

const PolicyCard = ({ policy }: { policy: IPolicy }) => {
    const isAnnual = policy.type === "Annual";

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 py-6 md:px-8 md:py-7">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-6">

                {/* Policy info */}
                <div className="flex-1">
                    {/* Header: stacked on mobile, inline on desktop */}
                    <h2 className="mb-5">
                        <span className="block text-blue-600 font-bold text-lg md:inline">
                            Policy number:
                        </span>{" "}
                        <span className="block text-gray-900 text-xl font-normal md:inline md:text-lg">
                            {policy.policyNumber}
                        </span>
                    </h2>

                    {/* Details: single column on mobile, two-column with divider on desktop */}
                    <div className="flex flex-col md:flex-row md:gap-0">
                        {/* Left column */}
                        <div className="space-y-1.5 md:pr-8 md:min-w-[260px]">
                            <p className="text-sm text-gray-800">
                                <span className="font-bold">Destination:</span>{" "}
                                {policy.destinations.map((d) => d.name).join(", ")}
                            </p>
                            {isAnnual ? (
                                <>
                                    <p className="text-sm text-gray-800">
                                        <span className="font-bold">Policy start date:</span>{" "}
                                        {formatDate(policy.policyStart)}
                                    </p>
                                    <p className="text-sm text-gray-800">
                                        <span className="font-bold">Maximum trip duration:</span>{" "}
                                        Up to {policy.maxTripDuration} days
                                    </p>
                                </>
                            ) : (
                                <p className="text-sm text-gray-800">
                                    <span className="font-bold">Travel date:</span>{" "}
                                    {formatDate(policy.policyStart)} -{" "}
                                    {formatDate(policy.policyEnd)}
                                </p>
                            )}
                        </div>

                        {/* Vertical divider — desktop only */}
                        <div className="hidden md:block w-px bg-gray-200 self-stretch mx-2" />

                        {/* Right column */}
                        <div className="space-y-1.5 mt-1.5 md:mt-0 md:pl-8">
                            <p className="text-sm text-gray-800">
                                <span className="font-bold">Plan:</span> {policy.planName}
                            </p>
                            <p className="text-sm text-gray-800">
                                <span className="font-bold">Excess:</span> ${policy.excess}
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 mt-6">
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="text-sm text-gray-700 underline flex items-center gap-1.5 hover:text-gray-900"
                        >
                            <ExternalLinkIcon />
                            View PDS
                        </a>
                        <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="text-[0.8125rem] md:text-sm text-gray-700 underline flex items-center gap-1.5 hover:text-gray-900"
                        >
                            <ExternalLinkIcon />
                            Certificate of Insurance
                        </a>
                    </div>
                </div>

                {/* Action buttons: full-width stacked on mobile, fixed-width on desktop */}
                <div className="flex flex-col gap-3 mt-6 md:mt-0 md:flex-shrink-0">
                    <button
                        type="button"
                        onClick={() => {}}
                        className="w-full cursor-pointer md:w-auto bg-yellow-300 border border-yellow-400 text-blue-700 font-semibold text-sm px-8 py-2.5 rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap"
                    >
                        Make a claim
                    </button>
                    <button
                        type="button"
                        onClick={() => {}}
                        className="w-full cursor-pointer md:w-auto bg-white border-2 border-blue-600 text-blue-600 font-semibold text-sm px-8 py-2.5 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap"
                    >
                        Manage my policy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PolicyCard;
