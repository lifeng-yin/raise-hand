import { FormEvent, useState } from "react"
import useLocalStorageState from "use-local-storage-state"
import { Redirect } from "wouter"

const EnterName = () => {
    const [name, setName] = useLocalStorageState('name', { defaultValue: '' })
    const [inputtedName, setInputtedName] = useState('')
    const [isInputError, setIsInputError] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        setName(inputtedName)
        setIsSubmitted(true)
    }

    if (isSubmitted) return <Redirect to="/"></Redirect>

    return (
        <main className="w-full h-full grid justify-center items-center bg-gray-200">
            <div className="p-8 shadow-lg bg-white shadow-gray-300 w-72 rounded-lg">
                <h2 className="text-2xl font-bold">{name ? 'Change your name' : 'Before continuing...'}</h2>
                <h3 className="text-lg font-light mb-4">{name ? 'Enter a new name.' : 'Enter your name.'}</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        className={
                            "text-xl bg-gray-100 w-full px-2 py-1 rounded ring-0 focus:outline-none focus:ring-2 caret-black "
                            + (isInputError ? 'ring-2 ring-red-500' : 'ring-blue-600')
                        }
                        value={inputtedName}
                        onChange={e => setInputtedName(e.target.value)}
                        minLength={1}
                        maxLength={50}
                        required
                        onInvalid={e => {
                            e.preventDefault()
                            setIsInputError(true)
                        }}
                    />
                    { isInputError && <p className="mt-2 text-red-500">Enter a name between 1 and 25 characters long.</p>}
                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 px-6 py-2 text-white rounded hover:bg-blue-500"
                    >{name ? 'Change name' : 'Submit'}</button>
                </form>
            </div>
        </main>
    )
}

export default EnterName