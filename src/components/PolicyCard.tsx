import type { IPolicy } from "../types/Policy";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import formatDate from "../utils/formatDate";

const PolicyCard = ({ policy }: { policy: IPolicy }) => {
    const isAnnual = policy.type === "Annual";

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-7">
            <div className="flex items-start justify-between gap-6">
                {/* Left: all policy info */}
                <div className="flex-1">
                    <h2 className="text-lg mb-5">
                        <span className="text-blue-600 font-semibold">Policy number:{" "}</span>
                        <span className="">{policy.policyNumber}</span>
                    </h2>

                    {/* Details row */}
                    <div className="flex gap-0">
                        {/* Left column */}
                        <div className="space-y-1.5 pr-8 min-w-[260px]">
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

                        {/* Vertical divider */}
                        <div className="w-px bg-gray-200 self-stretch mx-2" />

                        {/* Right column */}
                        <div className="space-y-1.5 pl-8">
                            <p className="text-sm text-gray-800">
                                <span className="font-bold">Plan:</span> {policy.planName}
                            </p>
                            <p className="text-sm text-gray-800">
                                <span className="font-bold">Excess:</span> ${policy.excess}
                            </p>
                        </div>
                    </div>

                    {/* Footer links */}
                    <div className="flex items-center gap-6 mt-6">
                        <a
                            href="#"
                            className="text-sm text-gray-700 underline flex items-center gap-1.5 hover:text-gray-900"
                        >
                            <ExternalLinkIcon />
                            View PDS
                        </a>
                        <a
                            href="#"
                            className="text-sm text-gray-700 underline flex items-center gap-1.5 hover:text-gray-900"
                        >
                            <ExternalLinkIcon />
                            Certificate of Insurance
                        </a>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3 flex-shrink-0">
                    <button className="bg-yellow-300 border border-yellow-400 text-blue-700 font-semibold text-sm px-8 py-2.5 rounded-full hover:bg-yellow-400 transition-colors whitespace-nowrap">
                        Make a claim
                    </button>
                    <button className="bg-white border-2 border-blue-600 text-blue-600 font-semibold text-sm px-8 py-2.5 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap">
                        Manage my policy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PolicyCard;
