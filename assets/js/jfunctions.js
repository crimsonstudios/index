function textToClipboard(text) {
  //window.alert("E-mail copied to your copyboard");

  var answer = window.confirm("If you proceed, our email will be copied to your clipboard!");
  if(answer) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
}