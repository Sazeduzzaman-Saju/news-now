// const newsDetails=()=>{
//     const url=`https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`;
//     fetch(url)
//     .then(res=>res.json())
//     .then(data=>displayNewsDetails(data.data));
// }

// const displayNewsDetails = singleNews =>{
//     const detailsbutton = document.getElementById('details-button');
//     const singlaeDetails = detailsbutton;
//     console.log(singleNews);
//     singlaeDetails.innerHTML=`
//     <!-- Modal -->
//     <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
//       <div class="modal-dialog">
//           <div class="modal-content">
//           <div class="modal-header">
//               <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//           </div>
//           <div class="modal-body">
//               ...
//           </div>
//           </div>
//       </div>
//       </div>
//     `;
//     detailsbutton.appendChild(singlaeDetails);


// }

// newsDetails();