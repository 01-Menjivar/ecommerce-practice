export default function ProductsSkeleton() {
    return (
        <div className="container mx-auto px-4 py-8">
            
            <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded mb-8 w-64 animate-pulse"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md animate-pulse">
                        <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 mb-4 rounded"></div>
                        
                        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2 w-3/4"></div>
                        
                        <div className="space-y-2 mb-4">
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6"></div>
                        </div>
                        
                        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-4 w-1/4"></div>
                        
                        <div className="space-y-2">
                            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                            <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
