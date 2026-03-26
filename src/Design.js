function Design({count,increment,decrement,reset}){
 return(<div className="flex items-center justify-center h-screen bg-green-500">
<div className="bg-white p-12  shadow-lg text-center w-full max-w-lg">
        
        <h1 className="text-2xl font-bold mb-4">COUNTER APPLICATION</h1>
        <div className="text-4xl font-bold text-blue-600 mb-4">
          {count}
        </div>
        {count === 0 && (
          <p className="text-red-500 mb-4">Minimum limit reached... </p>
        )}
        <div className="flex justify-between gap-2">
          <button onClick={increment} className="bg-green-500 text-white px-4 py-2  hover:bg-green-600 w-full">Increment</button>

          <button onClick={decrement}className="bg-yellow-500 text-white px-4 py-2  hover:bg-yellow-600 w-full" > Decrement</button>

          <button onClick={reset}className="bg-red-500 text-white px-4 py-2  hover:bg-red-600 w-full" >Reset</button>
        </div>

      </div>
    </div>)}
export default Design