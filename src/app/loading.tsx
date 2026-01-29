export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-green-200 border-t-green-600 rounded-full animate-spin mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading...</h2>
        <p className="text-gray-500">Please wait while we load the content</p>
      </div>
    </div>
  )
}
