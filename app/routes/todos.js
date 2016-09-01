// import Ember from 'ember';

// export default Ember.Route.extend({  
//     model() {
//         let todos = [
//             {
//                 title: "Learn Ember",
//                 complete: false,
//             },
//             {
//                 title: "Solve World Hunger",
//                 complete: false,
//             }
//         ];
//         return todos;
//     }
// });

import Ember from 'ember';

export default Ember.Route.extend({  
    model() {
        return this.store.findAll('todo');
        // let todos = [
        //     {
        //         title: "Learn Ember",
        //         complete: false,
        //     },
        //     {
        //         title: "Solve World Hunger",
        //         complete: false,
        //     }
        // ];
        // return todos;

    },
    actions: {
        createTodo(newTitle) {
           this.store.createRecord('todo', {
               title: newTitle,
               complete: false
           }).save();
        },
        updateTodo(todo) {
            todo.save();
        },
        deleteTodo(todo) {
            todo.destroyRecord();
        }
    }
});