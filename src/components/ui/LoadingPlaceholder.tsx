import React from 'react';

const LoadingPlaceholder: React.FC = () => {
    return (
        <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
        </div>
    );
};

export default LoadingPlaceholder;