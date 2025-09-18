import Student from "./Student"

function App() {
  return (
    <>
    <Student name="Spongebob" Age={40} isStudent={true}/>
    <Student name="Patrick" Age={43} isStudent={false}/>
    <Student name="Squidward" Age={0} isStudent={false}/>
    <Student name="Sandy" Age={20} isStudent={true}/>
    </>

  )

}

export default App
