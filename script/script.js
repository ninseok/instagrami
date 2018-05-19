//{nome:"",token:"",uid:"",cid:""}
function friends(){
    var uri="https://thisisjs-ninseok.c9users.io/instagrami/index.html";
    var instaf=[
        {nome:"Allan",token:"7694992758.e414fc9.f2009bcc60a047158bb22e99c890c676",uid:"7694992758",cid:"e414fc9340684d9a9155d29c414a6a35"},
        {nome:"Janaina",token:"302766420.bd82fd4.dfc0e0141bcf4d3daebcc00a724b1b53",uid:"302766420",cid:"bd82fd48c5074515904fc94d79de6dc7"},
        {nome:"Diany",token:"346107797.65e4fe9.bb914a0ae6734887968aeb0ecee97cea",uid:"346107797",cid:"65e4fe9c87dc4beda6353025cfb7d4e4"},
        {nome:"BlantzMob",token:"7180460989.c317d5f.0ffcc9e9b9a64a60b48b78a1161a9730",uid:"7180460989",cid:"c317d5f85a0942919e0a1ee36de93165"},
        {nome:"Bruna",token:"625984581.5ade2bf.809b1f84cff4482197f4fc9504498c02",uid:"625984581",cid:"5ade2bf8695a4fc4a50217ddf747bb99"},
        {nome:"Renato",token:"260029426.1e2002f.b922a678e6bf43fe81ee12439173d6c7",uid:"260029426",cid:"1e2002fe30d54b62a2fae4e20d6ada97"}
        ];
    sendReq(instaf);
}

function sendReq(listf) {
    for(var i=0; i<listf.length; i++){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var objInsta = JSON.parse(this.responseText); // faz o parse de texto pra json
            montaPagina(objInsta); // passa o obj pra função
        }
        };
        xhttp.open("GET", "https://api.instagram.com/v1/users/"+listf[i].uid+"/media/recent/?access_token="+listf[i].token, true);
        xhttp.send();
    }
}

function montaPagina(objInsta, num){
    var div = document.createElement("div");
    var divicon = document.createElement("div");
    var h2 = document.createElement("h2");
    var icon = document.createElement("img");
    var user = document.createElement("p");
    var likes = document.createElement("p");
    var image = document.createElement("img");
    var num = Math.floor((Math.random() * 10) + 1);
    
    for(var i=0;i<=num;i++){
        h2.innerHTML = objInsta.data[i].user.full_name;
        icon.src = objInsta.data[i].user.profile_picture;
        user.innerHTML = "@"+objInsta.data[i].user.username;
        image.src = objInsta.data[i].images.standard_resolution.url;
        likes.innerHTML = objInsta.data[i].likes.count;
        
        divicon.appendChild(icon);
        divicon.appendChild(h2);
        divicon.appendChild(user);
        div.appendChild(divicon);
        div.appendChild(image);
        div.appendChild(likes);
        document.getElementById("main").appendChild(div);
        document.body.appendChild(document.getElementById("main"));
        
        div.setAttribute("class","principal");
        divicon.setAttribute("class","divicon");
        icon.setAttribute("class","icon");
        icon.setAttribute("align","left");
        image.setAttribute("class","image");
        likes.setAttribute("class","fas fa-heart");
    }
    
    var at = document.getElementsByClassName("principal");
    for(var c=0;c<at.length;c++){
        at[c].setAttribute("id",c);
    }
}

window.onload = friends;