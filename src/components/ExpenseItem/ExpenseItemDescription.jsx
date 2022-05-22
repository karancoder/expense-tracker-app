import React, { useState } from "react";

const ExpenseItemDescription = ({ description }) => {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const getLimitedDescription = (description, limitAt = 50) => {
        return (
            <span>
                {description.slice(0, limitAt) +
                    (description.length >= limitAt ? " ..." : "")}{" "}
                {description.length >= limitAt ? (
                    <span
                        className="text-blue-500 hover:underline"
                        onClick={handleReadMore}
                    >
                        Expand
                    </span>
                ) : (
                    ""
                )}
            </span>
        );
    };
    const handleReadMore = (event) => {
        setShowFullDescription(
            (prevShowFullDescription) => !prevShowFullDescription
        );
    };
    return (
        <div className="text-sm font-light">
            {showFullDescription
                ? description
                : getLimitedDescription(description)}
        </div>
    );
};

export default ExpenseItemDescription;
