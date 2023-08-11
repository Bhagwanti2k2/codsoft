<script>
    let output=document.getElementById("input");
    function display(num)
    {
        output.value +=num;
    }
    function calculate()
    {
        output.value=eval(output.value);
    }
    function clearInput(){
      var getValue= document.getElementById("input");
        if (getValue.value !="") {
            getValue.value = "";
        }
    }
</script>
