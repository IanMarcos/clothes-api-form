document.querySelector('#form-submit').addEventListener('click',handleSubmit);
document.querySelector('.get-btn').addEventListener('click', handleGetBtn);

const responseBlock = document.querySelector('.response-block');
const jsonCode = document.querySelector('#json-response');

async function handleSubmit(e) {
  e.preventDefault();
  const productJSON = await createProduct();
  displayJSONResponse(productJSON);
}

async function handleGetBtn(e) {
  e.stopPropagation();
  const productJSON = await getProducts();
  displayJSONResponse(productJSON);
}

async function createProduct() {
  try {
    const response = await fetch(`${APIURL}/api/products/new`, {
      method: "POST",
      body: new FormData(document.querySelector('#product-form'))
    });

    const results = await response.json();

    return results;
  } catch (error) {
    return undefined;
  }
}

async function getProducts() {
  try {
    const response = await fetch(`${APIURL}/api/products/all`);
    const results = await response.json();
    return results;
  } catch (error) {
    return undefined;
  }
}

function displayJSONResponse(json) {
  if( json ){
    if( json.status && json.status === 200 || json.status === 201){
      responseBlock.classList.add('success-shadow');
    } else {
      responseBlock.classList.add('error-shadow');
    }
    jsonCode.innerText = JSON.stringify(json, null, 2);
  }
}