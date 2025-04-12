import './styles.css'

export function ClassDisplay({ names }) {

    return (
        <>
        <div>
            {names.map((course, index) => (
                <button key = {index} className = "btnStyle">
                    {course}
                    </button>
            ))}
          </div>
        </>
    )


}