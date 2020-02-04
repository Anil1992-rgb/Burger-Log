// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
            $(".change-burger").on("click", function(event) {
                var id = $(this).data("id");
                var newDevour = $(this).data("newdevour");

                var newDevourState = {
                    devour: newDevour
                };


            });