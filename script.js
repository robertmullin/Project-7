window.onload = function() {

	// Video
	var video = document.getElementById("video");

	// Buttons
	var playButton = document.getElementById("play-pause");
    var progressBar = document.getElementById('progress-bar');
	var muteButton = document.getElementById("mute");
	var fullScreenButton = document.getElementById("full-screen");
    // Progress
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");
    
    //Time
    
    var cTime = document.getElementById("currentTime");
    var dTime = document.getElementById("durationTime");


	// Event listener for the play/pause button
	playButton.addEventListener("click", function() {
	  if (video.paused == true) {
	    // Play the video
	    video.play();

	    // Update the button icon to 'Pause'
	    playButton.innerHTML = '<img src="icons/pause-icon.png"/>';
	  } else {
	    // Pause the video
	    video.pause();

	    // Update the button icon to 'Play'
	    playButton.innerHTML = '<img src="icons/play-icon.png"/>';
	  }
	});

    
    //Display current time
    video.addEventListener('timeupdate', function(){
      var cTime = document.getElementById("currentTime");
      var minutes = Math.floor(video.currentTime / 60);
      var seconds = Math.floor(video.currentTime - minutes * 60);
      var x = minutes < 10 ? "" + minutes + ":":minutes;
      var y = seconds < 10 ? "0" + seconds : seconds;
      cTime.innerHTML = ( x + y + "  " + "/ " );
    });
    
   // Make the grey and orange progress bar work 

        video.addEventListener('timeupdate', function(e) {
          var value = (100 / video.duration) * video.currentTime;
          progressBar.value = value;
        });

    //Progress 

        progressBar.addEventListener('click', function(e) {
          var percent = e.offsetX * this.max / this.offsetWidth;
          video.currentTime = video.duration * (percent / 100);
        });


	// Event listener for the mute button
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// mute icons
			muteButton.innerHTML = '<img src="icons/volume-off-icon.png"/>';
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.innerHTML = '<img src="icons/volume-on-icon.png"/>';
		}
	});


	// Event listener for the full-screen button
	fullScreenButton.addEventListener("click", function (){
		var vidcontainer = document.getElementById("video-container");
        
    if (document.webkitIsFullScreen === false) {
			vidcontainer.webkitRequestFullscreen();
		} else if (document.webkitIsFullScreen === true) 
			document.webkitExitFullscreen(); {
		}  

    if (document.mozFullScreen === false) {
			vidcontainer.mozRequestFullScreen(); 
    } else if (document.mozFullScreen === true) {
      document.mozCancelFullScreen();
    }
    fullScreenButton.innerHTML = '<img src="icons/fullscreen-icon.png"/>'
	});	
    
    //highlight the lines
    
    function startLine(startID) {
	  var line = document.getElementById(startID).classList;
	  line.add('line');
	}

	function endLine(endID) {
	  var line = document.getElementById(endID).classList;
	  line.remove('line');
	}

	video.addEventListener('timeupdate', function(){   
      var time = video.currentTime;

    if (time > 0.00 && time < 4.13) {
      startLine('line1');
  	} else { 
  	  endLine('line1');
  	}	
  	if (time >= 4.13 && time < 7.535) {
      startLine('line2');
    } else {
      endLine('line2');	
    }
    if (time >= 7.535 && time < 11.27) {
      startLine('line3');
    } else {  
  	  endLine('line3');
  	}
	  if (time >= 11.27 && time < 13.96) {
      startLine('line4');
  	} else {
  	  endLine('line4');
    }
  	if (time >= 13.96 && time < 17.94) {
      startLine('line5');
  	} else { 
  	  endLine('line5');
  	}
	  if (time >= 17.94 && time < 22.37) {
      startLine('line6');
  	} else {
  	  endLine('line6');
    }
  	if (time >= 22.37 && time < 26.88) {
      startLine('line7');
  	} else { 
  	  endLine('line7');
  	}
	  if (time >= 26.88 && time < 30.92) {
      startLine('line8');
  	} else {
  	  endLine('line8');
    }
  	if (time >= 32.100 && time < 34.730) {
      startLine('line9');
  	} else { 
  	  endLine('line9');
  	}  	  	
	  if (time >= 34.730 && time < 39.430) {
      startLine('line10');
  	} else {
  	  endLine('line10');
    }
  	if (time >= 39.430 && time < 41.190) {
      startLine('line11');
  	} else { 
  	  endLine('line11');
  	}
	  if (time >= 42.350 && time < 46.300) {
      startLine('line12');
  	} else {
  	  endLine('line12');
    }
  	if (time >= 46.300 && time < 49.270) {
      startLine('line13');
  	} else { 
  	  endLine('line13');
  	}
	  if (time >= 49.270 && time < 53.760) {
      startLine('line14');
  	} else {
  	  endLine('line14');
    }
  	if (time >= 53.760 && time < 57.780) {
      startLine('line15');
  	} else { 
  	  endLine('line15');
  	}  	
  	if (time >= 57.780 && time < 59.85) {
      startLine('line16');
  	} else { 
  	  endLine('line16');
  }
});
    
}