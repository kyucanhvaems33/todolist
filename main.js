// var getpostapi = 'https://jsonplaceholder.typicode.com/posts';
// fetch(getpostapi).then(respone => respone.json()).then(json => {
//     //var htmls = json.map(status => `<li> <h2> ${status.title} </h2> <p> ${status.body} </p> </li>`);
//     //var html = htmls.join('');
//     //document.getElementById('testapi').innerHTML = html;
//     console.log(json);

// });

//#region GET API STATUS
// function getsatusapi(){
//     var getstatusapi = 'https://todolist-thangbui.hasura.app/api/rest/get-status';
// fetch(getstatusapi,{
//     method: 'get',
//     headers:
//     {
//         'Content-Type': 'application/json',
//         'x-hasura-admin-secret': 'EMT545kts6gIrIl8PUOfgt0m4kJpsDgx4tM7cFWFcVxjBl2ArZ6o5DG8ETtf0Hkx'
//     }
// })
// .then(respone => respone.json())
// .then(json => 
//     {
//     var htmls = json.status.map(status => `<li> <h2> ${status.id} </h2> <p> ${status.name} </p> </li>`);
//     var html = htmls.join('');
//     document.getElementById('testapi').innerHTML = html;
//     //console.log(htmls);
// });
// }

// getsatusapi();
//#endregion


//#region API post user
// function postuserapi(full_name){
//     var user = {full_name: `${full_name}`};
    
//     var getpostapi = 'https://todolist-thangbui.hasura.app/api/rest/post-user';
//     fetch(getpostapi,{
//         method: 'post',
//         body: JSON.stringify(user),
//         headers:
//         {
//             'Content-Type': 'application/json',
//             'x-hasura-admin-secret': 'EMT545kts6gIrIl8PUOfgt0m4kJpsDgx4tM7cFWFcVxjBl2ArZ6o5DG8ETtf0Hkx'
//         }
//     })
//     .then(respone => {
//         (respone.status == 200)? console.log("POST SUCCESS!"): console.log("POST FAILED!");
//     })
//     .catch(err => console.log(err));
// }

// postuserapi("Đào Anh Ngọc");
//#endregion


//#region API post work by user

// function postworkapi(status_id, user_id, name_work){
//     var work = {
//         status_id: `${status_id}`,
//         user_id: `${user_id}`,
//         name: `${name_work}`
//     };
    
//     var getworkapi = 'https://todolist-thangbui.hasura.app/api/rest/post-work';
//     fetch(getworkapi,{
//         method: 'post',
//         body: JSON.stringify(work),
//         headers:
//         {
//             'Content-Type': 'application/json',
//             'x-hasura-admin-secret': 'EMT545kts6gIrIl8PUOfgt0m4kJpsDgx4tM7cFWFcVxjBl2ArZ6o5DG8ETtf0Hkx'
//         }
//     })
//     .then(respone => {
//         (respone.status == 200)? console.log("POST SUCCESS!"): console.log("POST FAILED!");
//     })
//     .catch(err => console.log(err));
// }

// postworkapi("2f373b63-1597-4a2f-bac6-650f20982fab", "3f69ac9f-2e72-4080-98ee-062bd6bd8e64","Tìm hiểu về DDD");


//#endregion


//#region API put work


// function updateworkapi(id, status_id, name){
//     let work = {
//         id: `${id}`,
//         status_id: `${status_id}`,
//         name: `${name}`
//     };
    
//     let putworkapi = 'https://todolist-thangbui.hasura.app/api/rest/put-work';
//     fetch(putworkapi,{
//         method: 'put',
//         body: JSON.stringify(work),
//         headers:
//         {
//             'Content-Type': 'application/json',
//             'x-hasura-admin-secret': 'EMT545kts6gIrIl8PUOfgt0m4kJpsDgx4tM7cFWFcVxjBl2ArZ6o5DG8ETtf0Hkx'
//         }
//     })
//     .then(respone => {
//         (respone.status == 200)? console.log("PUT SUCCESS!"): console.log("PUT FAILED!");
//     })
//     .catch(err => console.log(err));
// }

// updateworkapi("19a2e426-c1fa-43bd-902b-0012dc618d46", "5f78e60b-3727-4a23-bca6-71141229cf12", "Tìm hiểu về GITFLOW");


//#endregion


//#region API put user

// function updateuserapi(id, name){
//         let user = {
//             id: `${id}`,
//             name: `${name}`
//         };
        
//         let putuserapi = 'https://todolist-thangbui.hasura.app/api/rest/put-user';
//         fetch(putuserapi,{
//             method: 'put',
//             body: JSON.stringify(user),
//             headers:
//             {
//                 'Content-Type': 'application/json',
//                 'x-hasura-admin-secret': 'EMT545kts6gIrIl8PUOfgt0m4kJpsDgx4tM7cFWFcVxjBl2ArZ6o5DG8ETtf0Hkx'
//             }
//         })
//         .then(respone => {
//             (respone.status == 200)? console.log("PUT SUCCESS!"): console.log("PUT FAILED!");
//         })
//         .catch(err => console.log(err));
// }
    
// updateuserapi("83b9f7ad-d8fb-4ad7-aa8c-85fe92665a85", "Nguyễn Quốc Thụ");

//#endregion


//#region API get all work of user

function getallworkapi(){
    let getworkapi = 'https://todolist-thangbui.hasura.app/api/rest/get-all-work';
fetch(getworkapi,{
    method: 'get',
    headers:
    {
        'Content-Type': 'application/json',
        'x-hasura-admin-secret': 'EMT545kts6gIrIl8PUOfgt0m4kJpsDgx4tM7cFWFcVxjBl2ArZ6o5DG8ETtf0Hkx'
    }
})
.then(respone => respone.json())
.then(json => 
    {
    let htmls = json.users.map(json => ` <li> <h2>${json.full_name}</h2> ${(json.to_dos.map(todo => `<p>${todo.name} - ${todo.status.name}</p>`)).join('')} </li>`);
    let html = htmls.join('');
    document.getElementById('testapi').innerHTML = html;
    console.log(htmls);
});
}

getallworkapi();

//#endregion

