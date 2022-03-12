import Todo from './components/Todo'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center relative overflow-hidden sm:py-12">
      <div className="relative px-6 pt-10 pb-8 bg-white shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold border-b-2 pb-4 text-slate-900 text-center">
            My Todos
          </h2>
          <div className="divide-y divide-slate-100">
            <Todo text="Learn react on day 1" />
            <Todo text="Setup a new js project" />
            <Todo text="Go for a run" />
            <Todo text="Get work on upwork" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
