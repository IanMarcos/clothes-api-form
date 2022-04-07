addEventListener('DOMContentLoaded', loadJSON);

async function loadJSON() {
  try {
    const response = await fetch('https://clothes-api-ian.herokuapp.com/api/products/all?limit=1');
    const results = await response.json();
    if(results.status !== 200){
      console.log('Something went wrong fetching the product');
      return;
    }
    console.log(results);
    
  } catch (error) {
    console.log(error);
  }
}

async function createProduct(e) {
  e.preventDefault();
  
}
