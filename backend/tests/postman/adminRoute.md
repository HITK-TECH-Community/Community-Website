## For `/admin` route
```js
pm.test("Status code is 200 (OK)", function(){
    pm.response.to.have.status(200);
})
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});
pm.test("Content-Type is JSON", function () {
    pm.response.to.be.json;
})
pm.test("Response should be a parsable JSON", function() {
    pm.expect(pm.response.json).to.be.ok;
})
pm.test("Response JSON should be an array of JSON objects", function() {
    var schema = {
        'items':{
            'type': JSON,
        },
    };
    pm.expect(tv4.validate(pm.response.json, schema)).to.be.true;
})
```
