const apiEndPoint = "https://nodeapi.pyther.com/api/book"

export const getBooks = async () =>{
  return fetch(apiEndPoint, {
              method: 'GET',
                  headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                    }
              })
            .then(response => response.json())
            .then(response => {
              //console.log(JSON.stringify(response));
              return response;
          }).catch(function(error) {
            console.log(error);
        });
};

export const addBook = async (record:any) =>{
return fetch(apiEndPoint, {
method: 'POST',
  headers: {
  'Content-Type': 'application/json;charset=utf-8'
    },
  body:JSON.stringify(record)
})
.then(response => response.json())
.then(response => {
//console.log(JSON.stringify(response));
return response;
}).catch(function(error) {
console.log(error);
});
}

export const updateBook = async (record:any) =>{
return fetch(apiEndPoint, {
method: 'PUT',
  headers: {
  'Content-Type': 'application/json;charset=utf-8'
    },
  body:JSON.stringify(record)
})
.then(response => response.json())
.then(response => {
//console.log(JSON.stringify(response));
return response;
}).catch(function(error) {
console.log(error);
});
}

export const deleteBook = async (id:any) =>{
return fetch(apiEndPoint, {
method: 'DELETE',
  headers: {
  'Content-Type': 'application/json;charset=utf-8'
    },
  body:JSON.stringify({id})
})
.then(response => response.json())
.then(response => {
//console.log(JSON.stringify(response));
return response;
}).catch(function(error) {
console.log(error);
});
}

export const getBookById = async (id:any) =>{
return fetch(apiEndPoint + "/"+id, {
method: 'GET',
  headers: {
  'Content-Type': 'application/json;charset=utf-8'
    }
})
.then(response => response.json())
.then(response => {
//console.log(JSON.stringify(response));
return response;
}).catch(function(error) {
console.log(error);
});
}