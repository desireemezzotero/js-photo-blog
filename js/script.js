const endoPoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6';
const row= document.querySelector('row')

let newArray = [ ]; 

axios.get(endoPoint)
  .then (response => {
    response.data.forEach(card => {
      const {title, url} = card
      newArray.push(title,url)
    })
    console.log(newArray)


    row.innerHTML += `
       <div class="col-12 col-lg-6 col-xl-4 position-relative mb-3">

          <div class="pin position-absolute">
            <img src="./img/pin.svg" alt="">
          </div>

          <div class="card-dm p-3">
            <div class="image debug justify-content-center d-flex">
              <img src="${url}" alt="">
            </div> <!-- img -->

            <div class="text text-center debug">
              <p>
                ${title}
              </p>
            </div>
          </div><!-- card -->
        </div><!-- col -->
    `
  })




   