import { useEffect } from "react"
export default function useClickOutside(ref, callback) {
	useEffect(() => {
		const handleClickOutside = (event) => {
			event.preventDefault()
			if (ref && ref.current && !ref.current.contains(event.target)) {

				callback()
			}
		}
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [ref, callback])
}