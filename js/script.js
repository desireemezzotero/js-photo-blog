const endPoint = 'https://jsonplaceholder.typicode.com/photos?_limit=6';
const row = document.querySelector('.row')
let ok;
axios.get(endPoint)
  .then (response => {
    response.data.forEach(card => {
      const {title, url} = card
      const ok = title.charAt(0).toUpperCase() + title.slice(1)
      console.log(ok)
      row.innerHTML += `
         <div class="col-12 col-lg-6 col-xl-4 position-relative mb-3">
  
            <div class="pin position-absolute">
              <img src="./img/pin.svg" alt="">
            </div>
  
            <div class="card-dm p-4">
              <div class="image debug">
                <img src="${url}" alt="" class="img-fluid">
              </div> <!-- img -->
  
              <div class="text text-center debug pt-3">
                <p>
                  ${ok}
                </p>
              </div>
            </div><!-- card -->
          </div><!-- col -->
      `
    })

  })





   