
//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");



if (Meteor.isClient) {

  Meteor.startup(function () {

});


  Template.playground.helpers({

    //"track": function() {
      //var starter = MusicMachine.findOne();
      //isPlaying();
    //}

    "startdac": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.start==1) {
          playAll();
          $(".alert-success").html("Everything is playing"); }
        else if(starter.start == 0) {
          stopAll();
        }
    }

      return Session.get('startdac');
    },

    "drums": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.drums==1) {
          playDrums(); 
          //$("#t1").text("Playing");

        } else if (starter.drums==0) {

          stopDrums(); 
          //$("#t1").text("Track 1");

        }
      }

      return Session.get('drums');
    },

    "cello": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.celloline==1) {
          playBass(); 
          //$("#t2").text("Playing");

        } else if (starter.celloline==0) {

          stopBass(); 
          //$("#t2").text("Track 2");

        }
      }
      return Session.get('cello');
    },

    "arp": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.arp==1) {
          playArp(); 
          //$("#t3").text("Playing");

        } else if (starter.arp==0) {

          stopArp(); 
          //$("#t3").text("Track 3");

        }
      }
      return Session.get('arp');
    },
    "piano": function() {
      var starter = MusicMachine.findOne();
      if(starter) {
        if(starter.piano==1) {
          playPiano(); 
          //$("#t4").text("Playing");
        } else if (starter.piano==0) {
          stopPiano(); 
          //$("#t4").text("Track 4");
        }
      } return Session.get('piano');
    },
    "violin": function() {
      var starter = MusicMachine.findOne();
      if(starter) {
        if(starter.violin==1) {
          playViolin(); 
          //$("#t5").text("Playing");
        } else if (starter.violin==0) {
          stopViolin(); 
          //$("#t5").text("Track 5");
        }
      } return Session.get('violin');
    },
    "flute": function() {
      var starter = MusicMachine.findOne();
      if(starter) {
        if(starter.flute==1) {
          playFlute(); 
          //$("#t6").text("Playing");
        } else if (starter.flute==0) {
          stopFlute(); 
          //$("#t6").text("Track 6");
        }
      } return Session.get('flute');
    },
    "viola":function() {
      var starter = MusicMachine.findOne();
      if(starter) {
        if(starter.viola==1) {
          playViola(); 
          //$("#t7").text("Playing");
        } else if (starter.viola==0) {
          stopViola(); 
          //$("#t7").text("Track 7");
        }
      } return Session.get('viola');
    },
    "xylophone":function() {
      var starter = MusicMachine.findOne();
      if(starter) {
        if(starter.xylophone==1) {
          playXylophone(); 
          //$("#t8").text("Playing");
        } else if(starter.xylophone==0) {
          stopXylophone(); 
          //$("#t8").text("Track 8");
        }
      } return Session.get('xylophone');
    },
   

    //don't forget the commas between each function
//the last one doesn't have to have one!


  "sliderVal1":  function() { 
    var slider1 = MusicMachine.findOne();
    if (slider1) { 
        Template.instance().$('#slider1').data('uiSlider').value(slider1.slide);
        setSpeed1(slider1.slide/50);
        return slider1.slide;
      }
    },

   "sliderVal2":  function() { 
    var slider2 = MusicMachine.findOne();
    if (slider2) { 
        Template.instance().$('#slider2').data('uiSlider').value(slider2.slide);
        setSpeed2(slider2.slide/50);
        return slider2.slide;
      }
    },
  "sliderVal3":  function() { 
    var slider3 = MusicMachine.findOne();
    if (slider3) { 
        Template.instance().$('#slider3').data('uiSlider').value(slider3.slide);
        setSpeed3(slider3.slide/50);
        return slider3.slide;
      }
    },
  "sliderVal4":  function() { 
    var slider4 = MusicMachine.findOne();
    if (slider4) { 
        Template.instance().$('#slider4').data('uiSlider').value(slider4.slide);
        setSpeed4(slider4.slide/50);
        return slider4.slide;
      }
    },
   "sliderVal5":  function() { 
    var slider5 = MusicMachine.findOne();
    if (slider5) { 
        Template.instance().$('#slider5').data('uiSlider').value(slider5.slide);
        setSpeed5(slider5.slide/50);
        return slider5.slide;
      }
    },
  "sliderVal6":  function() { 
    var slider6 = MusicMachine.findOne();
    if (slider6) { 
        Template.instance().$('#slider6').data('uiSlider').value(slider6.slide);
        setSpeed6(slider6.slide/50);
        return slider6.slide;
      }
    },
   "sliderVal7":  function() { 
    var slider7 = MusicMachine.findOne();
    if (slider7) { 
        Template.instance().$('#slider7').data('uiSlider').value(slider7.slide);
        setSpeed7(slider7.slide/50);
        return slider7.slide;
      }
    },
   "sliderVal8":  function() { 
    var slider8 = MusicMachine.findOne();
    if (slider8) { 
        Template.instance().$('#slider8').data('uiSlider').value(slider8.slide);
        setSpeed8(slider8.slide/50);
        return slider8.slide;
      }
    },
    "sliderVal9":function() {
      var slider9 = MusicMachine.findOne();
      if(slider9) {
        Template.instance().$('#slider9').data('uiSlider').value(slider9.slide);
        setAmp1(slider9.slide/50);
        return slider9.slide;
      }
    },
    "sliderVal10":function() {
      var slider10 = MusicMachine.findOne();
      if(slider10) {
        Template.instance().$('#slider10').data('uiSlider').value(slider10.slide);
        setAmp2(slider10.slide/50);
        return slider10.slide;
      }
    },
    "sliderVal11":function() {
      var slider11 = MusicMachine.findOne();
      if(slider11) {
        Template.instance().$('#slider11').data('uiSlider').value(slider11.slide);
        setAmp3(slider11.slide/50);
        return slider11.slide;
      }
    },
    "sliderVal12":function() {
      var slider12 = MusicMachine.findOne();
      if(slider12) {
        Template.instance().$('#slider12').data('uiSlider').value(slider12.slide);
        setAmp4(slider12.slide/50);
        return slider12.slide;
      }
    },
    "sliderVal13":function() {
      var slider13 = MusicMachine.findOne();
      if(slider13) {
        Template.instance().$('#slider13').data('uiSlider').value(slider13.slide);
        setAmp5(slider13.slide/50);
        return slider13.slide;
      }
    },
    "sliderVal14":function() {
      var slider14 = MusicMachine.findOne();
      if(slider14) {
        Template.instance().$('#slider14').data('uiSlider').value(slider14.slide);
        setAmp6(slider14.slide/50);
        return slider14.slide;
      }
    },
    "sliderVal15":function() {
      var slider15 = MusicMachine.findOne();
      if(slider15) {
        Template.instance().$('#slider15').data('uiSlider').value(slider15.slide);
        setAmp7(slider15.slide/50);
        return slider15.slide;
      }
    },
    "sliderVal16":function() {
      var slider16 = MusicMachine.findOne();
      if(slider16) {
        Template.instance().$('#slider16').data('uiSlider').value(slider16.slide);
        setAmp8(slider16.slide/50);
        return slider16.slide;
      }
    }
  });


  Template.playground.events({

     "click button.startButton": function () {
      Session.set('startdac', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
    },

    "click button.stopButton": function () {
      Session.set('startdac', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {start: 0}});
    },

     "click button.myButton1": function () {
      Session.set('drums', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 1}});

    },
      "click button.myButton2": function () {
      Session.set('drums', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 0}});
    },

      "click button.myButton3": function () {
      Session.set('cello', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {celloline: 1}});

    },

      "click button.myButton4": function () {
      Session.set('cello', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {celloline: 0}});

    },
      "click button.myButton5": function () {
      Session.set('arp', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 1}});

    },

      "click button.myButton6": function () {
      Session.set('arp', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 0}});

    },
      "click button.myButton7": function() {
        Session.set('piano',1);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {piano:1}});
    },
    "click button.myButton8": function() {
        Session.set('piano',0);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {piano:0}});
    },
    "click button.myButton9": function() {
        Session.set('violin',1);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {violin:1}});
    },
    "click button.myButton10": function() {
        Session.set('violin',0);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {violin:0}});
    },
    "click button.myButton11": function() {
        Session.set('flute',1);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {flute:1}});
    },
    "click button.myButton12": function() {
        Session.set('flute',0);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {flute:0}});
    },
    "click button.myButton13": function() {
        Session.set('viola',1);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {viola:1}});
    },
    "click button.myButton14": function() {
        Session.set('viola',0);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {viola:0}});
    },
    "click button.myButton15": function() {
        Session.set('xylophone',1);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {xylophone:1}});
    },
    "click button.myButton16": function() {
        Session.set('xylophone',0);
        var val = MusicMachine.findOne({});
        MusicMachine.update({_id:val._id},{$set: {xylophone:0}});
    },
  });

  Template.playground.onRendered(function() {
    $('h2').hide();
    var handler = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide: ui.value}});
    }, 50, { leading: false });


  
    

   if (!this.$('#slider1').data('uiSlider')) {
        $("#slider1").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider2').data('uiSlider')) {
        $("#slider2").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider3').data('uiSlider')) {
        $("#slider3").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider4').data('uiSlider')) {
        $("#slider4").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    } 
    if (!this.$('#slider5').data('uiSlider')) {
        $("#slider5").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider6').data('uiSlider')) {
        $("#slider6").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider7').data('uiSlider')) {
        $("#slider7").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider8').data('uiSlider')) {
        $("#slider8").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider9').data('uiSlider')) {
        $("#slider9").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider10').data('uiSlider')) {
        $("#slider10").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider11').data('uiSlider')) {
        $("#slider11").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider12').data('uiSlider')) {
        $("#slider12").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider13').data('uiSlider')) {
        $("#slider13").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider14').data('uiSlider')) {
        $("#slider14").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider15').data('uiSlider')) {
        $("#slider15").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
    if (!this.$('#slider16').data('uiSlider')) {
        $("#slider16").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
  });
}

if (Meteor.isServer) {
//      MusicMachine.remove({});
      if (MusicMachine.find().count() === 0) {
      MusicMachine.insert({slide: 13});

    }

}