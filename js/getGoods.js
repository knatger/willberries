const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link')
  


  const getData = () => {
    fetch('/db/db.json') //https://test-7fe49-default-rtdb.firebaseio.com/db.json - бд в облачном хранилище (если есть ошибки при подключении бд)
    .then((res) => res.json()) //метод fetch обратился к файлу json и вернул ответ, метод then срабатывает только после получения ответа, ответ приходит в виде объекта response (обычно сокращают до res)
    //метод json используеся для извлечения данных из объекта response; есть еще метод text - он возвращает данные в виде строки - одной большой строки
    .then((data) => { //в параметр data попадет ответ сервера, который он вернул - массив с даннными
    console.log(data)
    localStorage.setItem('data',JSON.stringify(data))
  })
  }

  links.forEach((link) => {
    link.addEventListener('click',(event) => {
      event.preventDefault()
      getData()
    })
  })

  localStorage.setItem('goods',JSON.stringify([1, 2,3, 4, 5]))

  console.log(JSON.parse(localStorage.getItem('goods')))
  console.log(localStorage)
  localStorage.removeItem('goods')

  console.log(localStorage)
}

getGoods()