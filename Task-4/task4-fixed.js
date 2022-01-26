var server_echo;
var json = {
    json: {
        a: 1,
        b: 2
    },
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    return response.json();
})
.then(function (result) {
    server_echo = result.echo;
    server_echo.forEach(
        element => console.log(element)
    );
    alert(result);
})
.catch (function (error) {
    console.log('Request failed', error);
});
