document.addEventListener("DOMContentLoaded", function() {
    console.log("Hello");
    const Div = document.createElement("div");
    const Title = document.createElement("h4");
    const MsgBox = document.createElement("div");
    Div.id = "lit-msg";
    Div.style = ""
        +"background : linear-gradient(180deg,  #191525, #16092C);"
        +"width : 100% !important; "
        +"height : 100% !important;"

    MsgBox.id  = "msg-box"
    MsgBox.style = ""
        +"background : linear-gradient(180deg,  black, #16092C);"
        +"width : 430px !important;"
        +"height : 40px !important;"
        +"position: absolute;"
        +"bottom : 0px;"
        +"right: 0 !important;"
        +"border-top-left-radius : 90px !important;"
    +"display: flex;\n" +
        "    justify-content: center;\n" +
        "    align-items: center;"

    Title.textContent = "Use \"UD Digi Kyokasho N-B\" to make everything pretty."
    Title.style = ""
        +"color : rgb(100,100,100);"
    +"font-size:0.1em;"+" text-shadow: black 0.1em 0.1em 1em"
    document.getElementById("body").appendChild(Div);
    MsgBox.appendChild(Title);
    Div.appendChild(MsgBox);
})