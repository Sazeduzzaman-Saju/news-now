
const loadCatagories = ()=>{
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> displayNavigation(data.data.news_category));
}

const displayNavigation =(nav)=>{
    console.log(nav);
    const getNavContainer = document.getElementById('nav-container');
    getNavContainer.innerHTML= `
            <nav class="navbar navbar-expand-lg" id="myHeader">
            <div class="container navigations" >
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto mb-2 mb-lg-0 ">
                    <li class="nav-item me-2">
                        <a class="nav-link active" id="active" aria-current="page" href="#">${nav[0].category_name}</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[0].category_name}</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[1].category_name}</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[2].category_name}</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[3].category_name}</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[4].category_name}</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[5].category_name}</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[6].category_name}</a>
                    </li>
                    <li class="nav-item me-2">
                        <a class="nav-link " id="" aria-current="page" href="#">${nav[7].category_name}</a>
                    </li>
                </ul>

            </div>
            </div>
        </nav>
    `;
    getNavContainer.appendChild(getNavContainer);

}

loadCatagories();