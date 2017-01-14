import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './navigation.html';
import './templates/gameplay.html';

    

function myFunction() {
   var val = document.getElementById("slider").value //gets the oninput value
   document.getElementById('output').innerHTML = val //displays this value to the html page
   console.log(val)
}

 

Template.accordion1.onRendered(function(){

  this.$('.collapsible').collapsible({
    accordion: true
   });
  
  $('select').material_select();
  

});


Template.navbar.onRendered(function(){

    this.$('.button-collapse').sideNav();
    $('.parallax').parallax();
  $('.tooltipped').tooltip({delay: 50});


  $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 5, // Spacing from edge
      belowOrigin: true, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
    }
  );
   
});


Template.gameplay.onRendered(function(){
  
document.getElementById("slider").oninput = function() {
    myFunction()
};

})

Template.home.onRendered(function(){

    this.$('.button-collapse').sideNav();
    $('.parallax').parallax();
  
 
   
});


  Template.gameplay.events({
    'click .back_btn' : function () {
        history.back();
      },
    
    'change input[type=range]': function(event){
     var sliderValue = event.currentTarget.value
     Session.set('sliderValueIs', sliderValue)
     //then you can get this session and return it in a helper to display on your page
  }
 
});


Template.gameplay.helpers({
    
  });




Meteor.startup(function () {
  
  
this.$('.button-collapse').sideNav();
    $('.parallax').parallax();

   // Accounts.ui.config({

    //  passwordSignupFields: 'USERNAME_AND_EMAIL'
   // });
  
  
  
});
  
  
