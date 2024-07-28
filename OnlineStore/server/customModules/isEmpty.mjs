export default function isEmpty(...params) {
  let empty = false
  params.map((param) => {
    if (!param || param == null) empty = true
  })

  return empty
}