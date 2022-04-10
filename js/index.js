// addEventListener('DOMContentLoaded', loadSelectors);
addEventListener('submit',handleSubmit);

const responseBlock = document.querySelector('.response-block');
const jsonCode = document.querySelector('#json-response');
/**In case field validation is required
  const formName = document.querySelector('#form-name');
  const formDescription = document.querySelector('#form-desc');
  const formPrice = document.querySelector('#form-price');
  const formDiscount = document.querySelector('#form-discount');
  const formCountry = document.querySelector('#form-country');
  const formImages = document.querySelector('#form-prodImg');
*/

async function handleSubmit(e) {
  e.preventDefault();
  const productJSON = await createProduct();
  if( productJSON ){
    productJSON.results.status === 201 ? responseBlock.classList.add('success-shadow') : responseBlock.classList.add('error-shadow');
    jsonCode.innerText = JSON.stringify(productJSON, null, 2);
  }
}

async function createProduct() {
  try {
    const response = await fetch('https://clothes-api-ian.herokuapp.com/api/products/new', {
      method: "POST",
      // headers: {
      //   "Content-Type": "form-data"
      // },
      body: new FormData(document.querySelector('#product-form'))
    });

    const results = await response.json();
    
    if(results.status === 500){
      console.log('Server Error');
      return undefined;
    }

    return results;
  } catch (error) {
      return undefined;
  }
}
