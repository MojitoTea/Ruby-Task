var template = function(text) {
   return '<p><input type="checkbox"><i class="glyphicon glyphicon-cog"></i><span>' + text + '</span><i class="glyphicon glyphicon-trash"></i><i class="glyphicon glyphicon-resize-vertical"></i></p>';
 };
 var main = function() {
   $('form').submit(function() {
     var todo = $('#todo');
     if (todo.val() !== "") {
       var html = template(todo.val());
       $(html).appendTo('.list');
       $(todo).val("");
     }
     return false;
   });
   $(document).on("click", '.glyphicon-trash', function() {
     $(this).parent().remove();
   });
   $(document).on("click", '.glyphicon-cog', function() {
     $(this).toggleClass('active');
   });
 };
 $(document).ready(main);