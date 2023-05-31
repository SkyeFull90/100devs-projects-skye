function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

ask(
    "Do you agreee?",
    function() { alert("You agreed.")},
    function() { alert("You canceled the excution."); }
);