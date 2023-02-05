interface PaginationProps{
  handlePage:(arg:number)=>void;
  current:number;
  total:number;
}

function Pagination({handlePage,current,total}:PaginationProps) {
  // const btn=total.map((el)=><button></button>)
  const page=new Array(total).fill(0);
  const currentPage=page.map((element,ind)=><button key={ind+1}  style={{borderColor:current===ind+1?"red":"grey"}} onClick={()=>handlePage(ind+1)}>{ind+1}</button>)
  return (
  <div data-testid = "page-container">
  {currentPage}
  </div>
 
  );
}

export default Pagination;
