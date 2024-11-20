interface BtnProps {
    onclick?: () => void
    title: string
}
const Btn = ({onclick, title}:BtnProps) => {
  return (
    <div className="flex justify-center w-full mt-6 ">
        <button onClick={onclick} className="bg-colorVeryDarkViolet text-white p-5 w-4/5 rounded-lg cursor-pointer text-xl font-semibold active:bg-red-500" type="submit">{title}</button>
    </div>
  )
}

export default Btn