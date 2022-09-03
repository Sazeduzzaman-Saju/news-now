
const loadCatagories = ()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayNavigation(data.data.news_category));
}

const displayNavigation =(nav)=>{
// start spin
const getNavContainer = document.getElementById('nav-container');
getNavContainer.innerHTML='';
    getNavContainer.innerHTML= `

			<nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark bg-light">
			 <div class="container">
			  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
			      <span class="navbar-toggler-icon"></span>
			    </button>
			  <div class="collapse navbar-collapse" id="main_nav">
				

              <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li class="nav-item navlinks" onclick="loadNews('${nav[0].category_id}')">
                  <a class="nav-link text-black active" id="" aria-current="page" href="#">${nav[0].category_name}</a>
              </li>
              <li class="nav-item navlinks" onclick="loadNews('${nav[1].category_id}')">
                  <a class="nav-link text-black active" id="" aria-current="page" href="#">${nav[1].category_name}</a>
              </li>
              <li class="nav-item navlinks" onclick="loadNews('${nav[2].category_id}')">
                  <a class="nav-link text-black active" id="" aria-current="page" href="#">${nav[2].category_name}</a>
              </li>
              <li class="nav-item navlinks" onclick="loadNews('${nav[3].category_id}')">
                  <a class="nav-link text-black active" id="" aria-current="page" href="#">${nav[3].category_name}</a>
              </li>
              <li class="nav-item navlinks" onclick="loadNews('${nav[4].category_id}')">
                  <a class="nav-link text-black active" id="" aria-current="page" href="#">${nav[4].category_name}</a>
              </li>
              <li class="nav-item navlinks" onclick="loadNews('${nav[5].category_id}')">
                  <a class="nav-link text-black active" id="" aria-current="page" href="#">${nav[5].category_name}</a>
              </li>
              <li class="nav-item navlinks" onclick="loadNews('${nav[6].category_id}')">
                  <a class="nav-link text-black active" id="" aria-current="page" href="#">${nav[6].category_name}</a>
              </li>
              <li class="nav-item navlinks" onclick="loadNews('${nav[7].category_id}')">
                  <a class="nav-link text-black navlinks-end active" id="" aria-current="page" href="#">${nav[7].category_name}</a>
              </li>
          </ul>

			  </div> <!-- navbar-collapse.// -->
			 </div> <!-- container-fluid.// -->
			</nav>

            
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                    <li class="nav-item navlinks" onclick="loadNews('${nav[0].category_id}')">
                        <a class="nav-link active" id="" aria-current="page" href="#">${nav[0].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[1].category_id}')">
                        <a class="nav-link active" id="" aria-current="page" href="#">${nav[1].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[2].category_id}')">
                        <a class="nav-link active" id="" aria-current="page" href="#">${nav[2].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[3].category_id}')">
                        <a class="nav-link active" id="" aria-current="page" href="#">${nav[3].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[4].category_id}')">
                        <a class="nav-link active" id="" aria-current="page" href="#">${nav[4].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[5].category_id}')">
                        <a class="nav-link active" id="" aria-current="page" href="#">${nav[5].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[6].category_id}')">
                        <a class="nav-link active" id="" aria-current="page" href="#">${nav[6].category_name}</a>
                    </li>
                    <li class="nav-item navlinks" onclick="loadNews('${nav[7].category_id}')">
                        <a class="nav-link navlinks-end active" id="" aria-current="page" href="#">${nav[7].category_name}</a>
                    </li>
                </ul>
            </div>
            </div>
        </nav>
    `;
    toggleSpin(true);
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
    getNewsContainer.innerHTML='';
    allNews.forEach(news => {
        const createElement = document.createElement('div');
        createElement.innerHTML=`

        <div class="card mb-3 mt-5 shadow-lg border-0">
        <div class="row g-0">
          <div class="col-md-3">
            <img src="${news.thumbnail_url}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-9">
            <div class="card-body">
              <h5 class="card-title fw-bold">${news.title}</h5>
              <p class="card-text">${news.details.slice(0,350)}</p>
              <div class="row pt-5">
                <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                  <img class=" w-25 rounded-circle" src="${news.author.img}" alt="">
                  <div class="d-flex flex-column justify-content-start">
                    <small>${news.author.name ? news.author.name : "stranger"}</small>
                    <small>${news.author.published_date}</small>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                  <div>
                    <i class="fa-regular fa-eye"></i>
                  </div>
                  <div class="ms-2 mt-3">
                    <p>${news.total_view ? news.total_view : "Empty"}</p>
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
                  <button id="details-button" onclick="newsDetails('${news._id ? news._id : 'Id Not Found'}')" class="border-0 bg-transparent" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                    <i class="fa-solid fa-arrow-right pe-3 modal-button"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
              `;
              getNewsContainer.appendChild(createElement);
            })
            // stop spinner
            toggleSpin(false);
        }

const toggleSpin = isLoading =>{
    const getTogglerSpiner = document.getElementById('loader');
    if (isLoading === true) {
        getTogglerSpiner.classList.remove('d-none');
    } else {
        getTogglerSpiner.classList.add('d-none');
    }
}

// searchDetails
const newsDetails=(searchDetails)=>{
    // console.log(searchDetails);
    const url=`https://openapi.programming-hero.com/api/news/${searchDetails}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayModal(data.data[0]));
}

const displayModal = (singleNews)=>{
    console.log(singleNews);
    const getNewsDetails = document.getElementById('details-button');
    getNewsDetails.innerHTML='';
    const singleNewsDetails = getNewsDetails;
    singleNewsDetails.innerHTML=`

    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${singleNews.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${singleNews.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-9">
                        <p>${singleNews.details}</p>
                        <div class="row">
                        <div class="col-md-4">
                            <div class="d-flex justify-content-start align-items-center">
                            <img class="rounded-circle" src="${singleNews.author.img}" alt="" style="width: 25% !important;">
                                <div class="d-flex flex-column justify-content-start">
                                    <small>${singleNews.author.name ? singleNews.author.name : "stranger"}</small>
                                    <small>${singleNews.author.published_date.slice(0,10)}</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-sm-6 d-flex justify-content-center align-items-center">
                        <div>
                            <i class="fa-regular fa-eye"></i>
                        </div>
                        <div class="ms-2 mt-3">
                            <p>${singleNews.author.total_view}</p>
                        </div>
                        
                    </div>
                        <div class="col-md-4">
                            <div class="d-flex justify-content-start align-items-center">
                                <div class="d-flex flex-column justify-content-center align-content-center">
                                <div class="ms-2 pt-3">
                                <i class="fa-regular fa-star-full-stroke"></i>
                                <i class="fa-regular fa-star-half-stroke"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                                <i class="fa-regular fa-star"></i>
                            </div>
                                </div>
                            </div>
                        </div>

                        </div>
                    </div>
                </div>
          </div>
        </div>
      </div>
    </div>

    `;
    getNewsDetails.appendChild(singleNewsDetails);
}
const loadHome=()=>{
    const getButton = document.getElementById('homes');
    console.log('button clicked');
}
loadCatagories('');


document.addEventListener("DOMContentLoaded", function(){
        
    window.addEventListener('scroll', function() {
         
      if (window.scrollY > 200) {
        document.getElementById('navbar_top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
         document.getElementById('navbar_top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
    });
  }); 