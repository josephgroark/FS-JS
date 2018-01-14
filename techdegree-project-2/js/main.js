//list of students
const $stList = $(".student-list").children();

//function showing list of students depending on page number
function showPage(pageNum, studentList){
  studentList.hide();
  for(let i=0; i<=pageNum; i++){
    if(i=pageNum){
    studentList.slice(`${[i-1]}0`, `${[i]}0`).show();
    }
  }
};

//default list of students on page load
showPage(1, $stList);

//function creating number of links depending on number of students
function appendPageLinks(studentList){

  //assigning number of pages to a variable
  const numberOfPages = Math.ceil(studentList.length /10);

  //removing previous pagination link section
  while($(".pagination ul").firstChild){
    $(".pagination ul").removeChild($(".pagination ul").firstChild);
  }

  //created pagination section and number of links appended to it
  $(".page").append($("<div class = 'pagination'><ul>"));
  for(let i = 1; i <= numberOfPages; i++){
    $(".pagination").append($("<li><a href='#'>"+[i]+"</a></li>"));
  }
  $(".pagination").append($("</ul></div>"));

  // created click function which provides argument to showPage function
  $(".pagination a").click((e)=>{
    $(".pagination a").removeClass("active");
    $(e.target).addClass("active");
    const pageNumber = e.target.innerHTML;
    showPage(pageNumber, $stList);
  });
}

appendPageLinks($stList);
