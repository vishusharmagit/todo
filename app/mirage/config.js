// export default function() {

//   // These comments are here to help you get started. Feel free to delete them.

//   /*
//     Config (with defaults).

//     Note: these only affect routes defined *after* them!
//   */

//   // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
//   // this.namespace = '';    // make this `api`, for example, if your API is namespaced
//   // this.timing = 400;      // delay for each request, automatically set to 0 during testing

//   /*
//     Shorthand cheatsheet:

//     this.get('/posts');
//     this.post('/posts');
//     this.get('/posts/:id');
//     this.put('/posts/:id'); // or this.patch
//     this.del('/posts/:id');

//     http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
//   */
// }db.db.todos
export default function() {
    this.get('/todos', function(db, request) {
        return {
            //data: db.todos.map(attrs => (
            data: db.db.todos.map(attrs => (
                { type: 'todos', id: attrs.id, attributes: attrs }
            ))
        };
    });
    this.post('/todos', function(db, request) {
        var attrs = JSON.parse(request.requestBody);
        var todo = db.db.todos.insert(attrs);
        return {
            data: {
                type: 'todos',
                id: todo.id,
                attributes: todo
            }
        };
    });
    this.patch('/todos/:id', function(db, request) {
        let attrs = JSON.parse(request.requestBody);
        let todo = db.db.todos.update(attrs.data.id, attrs.data.attributes);
        return {
            data: {
                type: "todos",
                id: todo.id,
                attributes: todo
            }
        };
    });
    this.del('/todos/:id');
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {
}
*/