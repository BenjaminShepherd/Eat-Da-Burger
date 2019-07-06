$(function () {

    // Add a new burger.
    $(".name").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgerr").val().trim(),
            devoured: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            // Reload the page to get the updated burger list.
            location.reload();
        });
    });

    $(".update-eaten").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function () {
            console.log("Burger devoured");
            location.reload();
        });
    });

    $(".trashburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });

})



// $(function () {

//     // Update the eaten status
//     $("#update-eaten").on("click", function (e) {
//         let id = $(this).data("id");
//         let eaten = $(this).data("eaten_update");

//         let update = {
//             eaten: eaten
//         };

//         $.ajax("/api/burgers/" + id, {
//             type: "GET",
//             data: update
//         }).then(
//             function () {
//                 console.log("updated eaten status to " + update);
//                 location.reload();
//             }
//         );
//     });

//     // Add item
//     $(".add-form").on("submit", function (e) {
//         e.preventDefault();

//         let newBurger = {
//             name: $("#name").val().trim()
//         };

//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(
//             function () {
//                 console.log("added " + newBurger);
//                 location.reload()
//             }
//         );
//     });

//     // Delete function
//     $(".delete-item").on("click", function (e) {
//         let id = $(this).data("id");

//         $.ajax("/api/burgers/" + id, {
//             type: "DELETE"
//         }).then(
//             function () {
//                 console.log("deleted " + id);
//                 location.reload();
//             }
//         );
//     });
// });