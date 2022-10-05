//fonction qui mélange aléatoirement les valeurs que je lui passe via l'input 1
function generate(){
    monTableau=[];
    var strMaList = document.getElementById("inpListWords");
    var strGroup = document.getElementById("myList");
    strGroup.style.display="block";
    strGroup.innerText="";
    var testVide=strMaList.value;
    if(testVide===""){
        M.toast({html: 'Erreur : veuillez saisir des valeurs svp !'})
    }else{
        var input2 = document.getElementById("inpFinalWords");
        var result = strMaList.value;

        monTableau = result.split(',');
        monTableau = shuffle(monTableau);

        var chaine = monTableau.join(" ");//tab to chain
        input2.value=chaine.toString(); // et on set l'input de résultat
       
                 //groupement
                 var nbGroup=document.getElementById("cmbGroup");
                 var indicegroup =  parseInt(nbGroup.value);
                    var element =[];
                    for (let j=0;j<monTableau.length;j=j+indicegroup){
                        element =[];
                        for (let i = j; i < j+indicegroup; i=i+1) {
                            element.push(monTableau[i]);
                            console.log( element.push(monTableau[i]));
                        } 
                        AppendElem("li",element.join(" "),"myList");
                }
    }
}   

// fonction shuffle qui mélange (comme sur python)  
function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
  
 //Fonction qui reset tout les inputs
 function reset(){
    var inp1 = document.getElementById("inpListWords");
    var inp2 = document.getElementById("inpFinalWords");
    var inp3 = document.getElementById("myList");
    inp1.value="";
    inp2.value="";
    inp3.style.display="none";
 }

 $(document).ready(function(){
    //initialise la combobox 
    $('select').formSelect(); 
});

// fonction qui ajouter un li avec les noms des valeurs mélanger : 1 li par clic
function AppendElem(typeBaliseaAjouter,textVoulu,idCibleOuAjouter) {

    // Create an "li" node:
    const node = document.createElement(typeBaliseaAjouter);
    
    // Create a text node:

    const textnode = document.createTextNode(textVoulu);
    
    // Append the text node to the "li" node:
    node.appendChild(textnode);
    
    // Append the "li" node to the list:

    document.getElementById(idCibleOuAjouter).appendChild(node);
}