import './App.css'
import Card from './components/Card'
function App() {
  const myobj = {
    name:"gaurav",
    age:25,
  }

  const newarry = [1,2,3,4,5]
  return (
    <>
     <h1 className='flex items-center justify-center bg-green-500 text-black rounded-2xl p-4 mb-5'>hello tailwind </h1>
     <Card username="gaurav" obj = {myobj} arry={newarry} />
     <Card/>
    {/* <Card channel="hello" Arr=[1,2,3,4] />  */}
    </>
  )
}

export default App
