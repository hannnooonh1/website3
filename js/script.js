var btn = document.getElementById("openlog")
 function openlogin(){
    window.open("https://accounts.google.com/v3/signin/identifier?hl=id&ifkv=AVQVeyzrTKqguWxNqVRcGdVOtc9zNhqigxeLfB662XuNcmLhk6sHTmQMnR1v_UPPFXrHLXZCNXQHGQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1946934925%3A1697625092655556&theme=glif","login","width-50,height-50")
 }
 btn.onclick=openlogin;