
const loadCatagories = ()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayNavigation(data.data.news_category));
}

const displayNavigation =(nav)=>{
// start spin
toggleSpin(true);
    const getNavContainer = document.getElementById('nav-container');
    getNavContainer.innerHTML= `
            <nav class="navbar navbar-expand-lg" id="myHeader">
            <div class="container navigations" >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                    <li class="nav-item navlinks">
                        <a class="nav-link active navlinks-start" onclick="loadNews('${nav.category_id}')" id="active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[0].category_id}')">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[0].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[1].category_id}')">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[1].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[2].category_id}')">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[2].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[3].category_id}')">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[3].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[4].category_id}')">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[4].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[5].category_id}')">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[5].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[6].category_id}')">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[6].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[7].category_id}')">
                        <a class="nav-link navlinks-end" id="" aria-current="page" href="#">${nav[7].category_name}</a>
                    </li>

                </ul>
            </div>
            </div>
        </nav>
    `;
    getNavContainer.appendChild(getNavContainer);
}


// 
const loadNews = (catagoriId) =>{
    const url =`https://openapi.programming-hero.com/api/news/category/${catagoriId}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> newsContainer(data.data))
    .catch(error => {
        element.parentElement.innerHTML = `Error: ${error}`;
        console.error('There was an error!', error);
    });
}


const newsContainer=(allNews)=>{
// Count Data length
const getLength = allNews.length;
const getCounterfield= document.getElementById('counter');
const getCounterfieldValue = getLength;
getCounterfield.innerText = getCounterfieldValue;
// console.log(allNews);

// No Data Found Call
const noData = document.getElementById('no-data-available');
if (getLength === 0) {
    noData.classList.remove('d-none');
} else {
    noData.classList.add('d-none');
}
// Display Data
    const getNewsContainer = document.getElementById('news-container');
    toggleSpin(false);
    getNewsContainer.innerHTML='';
    allNews.forEach(news => {
        const createElement = document.createElement('div');
        createElement.innerHTML=`
        <div class="col-lg-12 col-md-12 col-sm-12">
        <div class="card mb-3 mt-5 shadow-lg border-0">
            <div class="row g-0">
              <div class="col-md-3">
                <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <h5 class="card-title fw-bold">${news.title}</h5>
                  <p class="card-text">${news.details.slice(0,480)}</p>
                  <div class="row">
                    <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                        <img class="w-25 rounded-circle" src="${news.author.img}" alt="">
                        <div class="d-flex flex-column justify-content-start">
                            <small>${news.author.name ? news.author.name : "stranger"}</small>
                            <small>${news.author.published_date.slice(0,10)}</small>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                        <div>
                            <i class="fa-regular fa-eye"></i>
                        </div>
                        <div class="ms-2 mt-3">
                            <p>${news.total_view}</p>
                        </div>
                        
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                        <div>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </div>
                        <div class="ms-2">
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star-half-stroke"></i>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-end align-items-center">
                        <a href="#" id="" onclick="newsDetails()" ><i class="fa-solid fa-arrow-right pe-3"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
        getNewsContainer.appendChild(createElement);
        
    });
    // stop spinner
    toggleSpin(false);

}








const toggleSpin = isLoading =>{
    const getTogglerSpiner = document.getElementById('loader');
    if (isLoading) {
        getTogglerSpiner.classList.remove('d-none');
    } else {
        getTogglerSpiner.classList.add('d-none');
    }
}



loadCatagories();


