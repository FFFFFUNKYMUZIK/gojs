<script src="http://code.jquery.com/jquery-latest.min.js"></script>

<script>

$(document).ready(function() {

     jQuery.ajax({

           type:"GET",

           url:"127.0.0.1:8080/test",

           dataType:"JSON", // 옵션이므로 JSON으로 받을게 아니면 안써도 됨

           success : function(data) {

                 // 통신이 성공적으로 이루어졌을 때 이 함수를 타게 된다.

                 // TODO

           },

           complete : function(data) {

                 // 통신이 실패했어도 완료가 되었을 때 이 함수를 타게 된다.

                 // TODO

           },

           error : function(xhr, status, error) {

                 alert("에러발생");

           }

     });

});

</script>



//출처: https://marobiana.tistory.com/77 [Take Action]