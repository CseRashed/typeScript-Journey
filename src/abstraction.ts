// 3 Piller of OOP Concept=======>abstraction
//idea
// after implementation

/*use:
 1.interface
 2.abstraction class
*/

// ---------------------- using Interface -------------------- 

//idea
interface MediaPlayer{
    play():void;
    pause():void;
    stop():void;
}

//Implementation

class MusicPlayer implements MediaPlayer{
    play() {
        console.log('Playing Music')
    }
    pause(){
        console.log('Music Paused ........')
    }
    stop(){
        console.log('Music Stopped....')
    }
}

const music1=new MusicPlayer()
music1.play()
// ---------------------------------------------------------------

// ----------------------------using abstract class ------------------------- 
// idea 
abstract class MediaPlay{
   abstract play():void;
  abstract  pause():void;
  abstract  stop():void;
}
// implements
class RashedPlayer extends MediaPlay{
    play() {
        console.log('Playing Music........')
    }
     pause(){
        console.log('Music Paused ........')
    }
    stop(){
        console.log('Music Stopped....')
    }
}

const rashedu1=new RashedPlayer()
rashedu1.pause()
// ---------------------------------------------------------- 