!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){var o=n(1);$(document).ready(function(){const e=firebase.initializeApp({apiKey:"AIzaSyBLZjIB6nUrsTKU2lHJuRLoPgNosQfAquE",authDomain:"ucb-project-search-event.firebaseapp.com",databaseURL:"https://ucb-project-search-event.firebaseio.com",projectId:"ucb-project-search-event",storageBucket:"ucb-project-search-event.appspot.com",messagingSenderId:"830770899521"},"userdata");var t=firebase.database(e);firebase.initializeApp({apiKey:"AIzaSyAZ9w3hQPnIWxgY-KKl3awkJirnN5mvG3w",authDomain:"proj-1-8fff4.firebaseapp.com",databaseURL:"https://proj-1-8fff4.firebaseio.com",projectId:"proj-1-8fff4",storageBucket:"proj-1-8fff4.appspot.com",messagingSenderId:"833251081928"});var n=firebase.database(),r=void 0,a=void 0;r=o.getLocalStorage("loggedInUserID"),a=o.getLocalStorage("loggedInUserName"),console.log(r),null!==r&&null!==a&&($("#sign-in-form").empty(),$(".dropdown").text("Welcome! "+a),$("#logout").css("visibility","visible"),$("#my-events").css("visibility","visible"));var s={url:"https://api.seatgeek.com/2/events?client_id=MTM3NTY1NjV8MTU0MTAzNjQ2MC42NA",rangeInMiles:0,sortField:"datetime_local",sortOrder:"desc",events:[],urlStr:"",getEvents:function(e,t,o){this.rangeInMiles=e,this.sortOrder=t?"asc":"desc",$.getJSON({url:"http://ipinfo.io",method:"GET"}).then(function(e){var t=e.ip;console.log(t);for(var a="",l=0;l<o.length;l++)a=a+"&taxonomies.name="+o[l];s.urlStr=s.url+"&geoip="+t+"&range="+s.rangeInMiles+"mi&sort="+s.sortField+"."+s.sortOrder+a,$.ajax({url:s.url+"&geoip="+t+"&range="+s.rangeInMiles+"mi&sort="+s.sortField+"."+s.sortOrder+a,method:"GET"}).then(function(e){s.setEvents(e.events),function(e){i(e.events,$(".events")),$(".eventContainer").on("click",function(e){if(null!==r){var t=$(this),o=n.ref(r);null===o&&n.ref(r).set({selectedEvents:selectedEvents});var a=t.data("event");o.once("value").then(function(e){var o=e.child("selectedEvents").val();null===o&&(o=[]),o.includes(a)||o.push(a),n.ref(r).set({selectedEvents:o}),t.remove()})}})}(s)})})},setEvents:function(e){this.events=e}};function i(e,t){if(null!==e)for(var n=0;n<e.length;n++){var o=$("<div>"),r=$("<div>"),a=$("<div>"),s=$("<div>"),i=$("<div>"),l=e[n],c=(l.id,$("<a class='ticket-link' href="+e[n].url+" target='_blank'>Find Tickets</a>"));i=moment(l.datetime_local).format("llll"),r.addClass("eventContainer"),s.addClass("title"),a.addClass("eventVenue"),o.addClass("eventButton"),r.data("event",l),a.text(e[n].venue.name),s.text(l.title),r.append(s),r.append(a),o.append(r),r.append(i),r.append(c),t.append(o)}}$("#sign-in").on("click",function(e){e.preventDefault();var t=$("#username").val().trim(),n=$("#password").val().trim();c(t,n)}),$("#sigup-submit").on("click",function(e){e.preventDefault();var t=function(){var e=function(){return(65536*(1+Math.random())|0).toString(16).substring(1)};return e()+e()+e()+e()+e()+e()+e()+e()}(),n=$("#signup-username").val(),r=$("#signup-password").val();l({userID:t,userName:n,password:r}),o.setLocalStorage("newUserId",t),o.setLocalStorage("newUserName",n),window.location.href="index.html"}),$("#logout").on("click",function(){r=void 0,a=void 0,o.deleteLocalStorage("loggedInUserID"),o.deleteLocalStorage("loggedInUserName"),location.href="index.html"}),$("#search").on("click",function(e){console.log(r),console.log(a),$(".events").empty(),$(".checkmark").prop("checked",!1),e.preventDefault();var t=[];$.each($("input:checked"),function(){var e=$(this).val();t.push(e),$(".events").empty()}),s.getEvents(11,!0,t),console.log(s)}),n.ref().on("value",function(e){null!==r&&n.ref(r).on("value",function(e){i(e.child("selectedEvents").val(),$(".myEvents"))})}),$("#cancel").on("click",function(){$(".myEvents").empty()});var l=function(e){console.log(e),t.ref().push({userID:e.userID,userName:e.userName,password:e.password})},c=function(e,n){var s=!1;t.ref().orderByChild("userName").equalTo(e).on("value",function(e){e.forEach(function(e){n===e.val().password&&(console.log("User and Password Match"),r=e.val().userID,a=e.val().userName,s=!0,$("#sign-in-form").empty(),$(".dropdown").text("Welcome! "+a),$("#logout").css("visibility","visible"),$("#my-events").css("visibility","visible"),o.setLocalStorage("loggedInUserID",r),o.setLocalStorage("loggedInUserName",a))})});return s}})},function(e,t){console.log("Storgae Helper Added");e.exports={deleteLocalStorage:function(e){console.log(e),localStorage.removeItem(e)},getLocalStorage:function(e){return localStorage.getItem(e)},setLocalStorage:function(e,t){localStorage.setItem(e,t)}}}]);