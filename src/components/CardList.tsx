const CardList = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-bold mb-2">Policy Number: 726100029411</h2>
                <p>Policy Start: 2026-05-01</p>
                <p>Policy End: 2027-05-01</p>
                <p>Premium: $500</p>
                <p>Status: Active</p>
            </div>
        </div>
    );
};

export default CardList;