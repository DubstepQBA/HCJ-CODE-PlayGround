/* eslint-disable react/prop-types */
function Output({ srcDoc }) {
    return (
        <div className="w-full ">
            <h1 className="text-gray-200">OutPut</h1>
            <iframe srcDoc={srcDoc} className="w-full rounded-md h-[80vh] pr-2"></iframe>
        </div>
    )
}
export default Output