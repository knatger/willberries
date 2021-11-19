const search = function() {
  const input = document.querySelector('.search-block > input')
  const searchBtn = document.querySelector('.btn-outline-secondary')
  let input_value;

  input.addEventListener('input',(event) => {
    input_value = event.target.value
  })

  searchBtn.addEventListener('click',() => {
    console.log(input_value)
  })
s
}

search()