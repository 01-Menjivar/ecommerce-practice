export default function ProductDetailSkeleton() {
    return (
        <div className="max-w-4xl mx-auto p-4 animate-pulse">
            
            <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded mb-4"></div>
            
            <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
            
            <div className="space-y-2 mb-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
            </div>
            
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-32"></div>
        </div>
    );
}
